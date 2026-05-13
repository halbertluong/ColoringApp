import { useRef, useCallback, useEffect } from 'react';
import { ToolType, Point, ColoringPage } from '../types';
import { floodFill } from '../utils/floodFill';

const CANVAS_W = 900;
const CANVAS_H = 900;
const MAX_HISTORY = 40;

interface DrawingEngineOptions {
  tool: ToolType;
  color: string;
  brushSize: number;
}

export function useDrawingEngine(
  displayCanvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: DrawingEngineOptions
) {
  // Offscreen canvases for layered rendering
  const outlineCanvas = useRef<HTMLCanvasElement | null>(null);
  const colorCanvas = useRef<HTMLCanvasElement | null>(null);

  // Drawing state (refs so no re-renders during drawing)
  const isDrawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const activePenDown = useRef(false); // tracks if a pen (stylus) is currently down

  // Zoom / pan state
  const scale = useRef(1);
  const panX = useRef(0);
  const panY = useRef(0);
  const lastPinchDist = useRef<number | null>(null);
  const lastPinchMid = useRef<{ x: number; y: number } | null>(null);
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());

  // History for undo/redo
  const history = useRef<ImageData[]>([]);
  const historyIndex = useRef(-1);

  // Current options via ref (avoids stale closures in event handlers)
  const optsRef = useRef(opts);
  optsRef.current = opts;

  // ─── Offscreen canvas init ──────────────────────────────────────────────────
  const getOutlineCtx = useCallback(() => {
    if (!outlineCanvas.current) {
      outlineCanvas.current = document.createElement('canvas');
      outlineCanvas.current.width = CANVAS_W;
      outlineCanvas.current.height = CANVAS_H;
    }
    return outlineCanvas.current.getContext('2d', { willReadFrequently: true })!;
  }, []);

  const getColorCtx = useCallback(() => {
    if (!colorCanvas.current) {
      colorCanvas.current = document.createElement('canvas');
      colorCanvas.current.width = CANVAS_W;
      colorCanvas.current.height = CANVAS_H;
    }
    return colorCanvas.current.getContext('2d', { willReadFrequently: true })!;
  }, []);

  // ─── Composite: draw color layer first, then outline on top ─────────────────
  const composite = useCallback(() => {
    const display = displayCanvasRef.current;
    if (!display || !colorCanvas.current || !outlineCanvas.current) return;
    const ctx = display.getContext('2d')!;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    // Color layer
    ctx.drawImage(colorCanvas.current, 0, 0);
    // Outline on top with multiply blending so black stays black over any color
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(outlineCanvas.current, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
  }, [displayCanvasRef]);

  // ─── History ─────────────────────────────────────────────────────────────────
  const saveHistory = useCallback(() => {
    const colorCtx = getColorCtx();
    const snap = colorCtx.getImageData(0, 0, CANVAS_W, CANVAS_H);
    // Truncate forward history
    history.current = history.current.slice(0, historyIndex.current + 1);
    history.current.push(snap);
    if (history.current.length > MAX_HISTORY) history.current.shift();
    historyIndex.current = history.current.length - 1;
  }, [getColorCtx]);

  const undo = useCallback(() => {
    if (historyIndex.current <= 0) return;
    historyIndex.current--;
    const colorCtx = getColorCtx();
    colorCtx.putImageData(history.current[historyIndex.current], 0, 0);
    composite();
  }, [getColorCtx, composite]);

  const redo = useCallback(() => {
    if (historyIndex.current >= history.current.length - 1) return;
    historyIndex.current++;
    const colorCtx = getColorCtx();
    colorCtx.putImageData(history.current[historyIndex.current], 0, 0);
    composite();
  }, [getColorCtx, composite]);

  // ─── Load coloring page ───────────────────────────────────────────────────
  const loadPage = useCallback(
    (page: ColoringPage) => {
      const outlineCtx = getOutlineCtx();
      const colorCtx = getColorCtx();

      // Clear color layer
      colorCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      colorCtx.fillStyle = 'white';
      colorCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Load SVG into outline canvas
      const blob = new Blob([page.svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        outlineCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        outlineCtx.drawImage(img, 0, 0, CANVAS_W, CANVAS_H);
        URL.revokeObjectURL(url);
        // Clear history for new page
        history.current = [];
        historyIndex.current = -1;
        saveHistory();
        composite();
      };
      img.src = url;
    },
    [getOutlineCtx, getColorCtx, composite, saveHistory]
  );

  // Load a user-uploaded image (already a data URL or object URL)
  const loadImageUrl = useCallback(
    (imageUrl: string) => {
      const outlineCtx = getOutlineCtx();
      const colorCtx = getColorCtx();

      colorCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      colorCtx.fillStyle = 'white';
      colorCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      const img = new Image();
      img.onload = () => {
        // Draw the image scaled to fit on a white background
        outlineCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        outlineCtx.fillStyle = 'white';
        outlineCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);

        const aspect = img.width / img.height;
        let dw = CANVAS_W, dh = CANVAS_H;
        if (aspect > 1) dh = CANVAS_W / aspect;
        else dw = CANVAS_H * aspect;
        const dx = (CANVAS_W - dw) / 2;
        const dy = (CANVAS_H - dh) / 2;
        outlineCtx.drawImage(img, dx, dy, dw, dh);

        history.current = [];
        historyIndex.current = -1;
        saveHistory();
        composite();
      };
      img.src = imageUrl;
    },
    [getOutlineCtx, getColorCtx, composite, saveHistory]
  );

  // ─── Coordinate conversion ────────────────────────────────────────────────
  const toCanvasPoint = useCallback(
    (clientX: number, clientY: number, pressure = 1): Point => {
      const display = displayCanvasRef.current!;
      const rect = display.getBoundingClientRect();
      // The canvas element is visually scaled by CSS; getBoundingClientRect accounts for that
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
        pressure: Math.max(0.01, pressure),
      };
    },
    [displayCanvasRef]
  );

  // ─── Brush rendering ──────────────────────────────────────────────────────
  const drawStroke = useCallback(
    (from: Point, to: Point) => {
      const { tool, color, brushSize } = optsRef.current;
      const colorCtx = getColorCtx();

      const pressure = (from.pressure + to.pressure) / 2;
      const size = brushSize * (tool === 'pencil' ? 0.6 : 1) * (0.5 + pressure * 0.5);

      colorCtx.lineCap = 'round';
      colorCtx.lineJoin = 'round';
      colorCtx.strokeStyle = color;

      switch (tool) {
        case 'pencil': {
          colorCtx.globalAlpha = 0.85 * pressure;
          colorCtx.lineWidth = size;
          colorCtx.shadowBlur = 0;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          break;
        }
        case 'crayon': {
          // Multiple offset lines for texture
          colorCtx.globalAlpha = 0.55 * pressure;
          colorCtx.lineWidth = size;
          for (let i = 0; i < 4; i++) {
            const ox = (Math.random() - 0.5) * size * 0.6;
            const oy = (Math.random() - 0.5) * size * 0.6;
            colorCtx.beginPath();
            colorCtx.moveTo(from.x + ox, from.y + oy);
            colorCtx.lineTo(to.x + ox, to.y + oy);
            colorCtx.stroke();
          }
          break;
        }
        case 'marker': {
          colorCtx.globalAlpha = 0.75;
          colorCtx.lineWidth = size * 1.4;
          colorCtx.shadowBlur = 0;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          break;
        }
        case 'brush': {
          colorCtx.globalAlpha = 0.6 * pressure;
          colorCtx.lineWidth = size * (1 + pressure * 0.5);
          colorCtx.shadowBlur = size * 0.5;
          colorCtx.shadowColor = color;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          colorCtx.shadowBlur = 0;
          break;
        }
        case 'watercolor': {
          colorCtx.globalAlpha = 0.12 * pressure;
          colorCtx.lineWidth = size * 2.2;
          colorCtx.shadowBlur = size;
          colorCtx.shadowColor = color;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          colorCtx.shadowBlur = 0;
          break;
        }
        case 'glitter': {
          const dist = Math.hypot(to.x - from.x, to.y - from.y);
          const steps = Math.max(1, Math.floor(dist / 6));
          for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const cx = from.x + (to.x - from.x) * t;
            const cy = from.y + (to.y - from.y) * t;
            const count = Math.ceil(size * 0.8);
            for (let j = 0; j < count; j++) {
              const angle = Math.random() * Math.PI * 2;
              const r = Math.random() * size;
              const px = cx + Math.cos(angle) * r;
              const py = cy + Math.sin(angle) * r;
              const dotSize = 1 + Math.random() * 2.5;
              colorCtx.globalAlpha = Math.random() * 0.9 * pressure;
              colorCtx.fillStyle = color;
              colorCtx.beginPath();
              colorCtx.arc(px, py, dotSize, 0, Math.PI * 2);
              colorCtx.fill();
            }
          }
          break;
        }
        case 'eraser': {
          colorCtx.globalAlpha = 1;
          colorCtx.strokeStyle = 'white';
          colorCtx.lineWidth = size * 1.8;
          colorCtx.shadowBlur = 0;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          break;
        }
        default:
          break;
      }

      colorCtx.globalAlpha = 1;
      composite();
    },
    [getColorCtx, composite]
  );

  // ─── Clear / Save ─────────────────────────────────────────────────────────
  const clearCanvas = useCallback(() => {
    const colorCtx = getColorCtx();
    colorCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    colorCtx.fillStyle = 'white';
    colorCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);
    saveHistory();
    composite();
  }, [getColorCtx, composite, saveHistory]);

  const saveImage = useCallback(() => {
    const display = displayCanvasRef.current;
    if (!display) return;
    const link = document.createElement('a');
    link.download = 'coloring-masterpiece.png';
    link.href = display.toDataURL('image/png');
    link.click();
  }, [displayCanvasRef]);

  // ─── Pointer event handlers ───────────────────────────────────────────────
  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      const display = displayCanvasRef.current;
      if (!display) return;
      display.setPointerCapture(e.pointerId);

      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      // Two-finger gesture overrides drawing
      if (activePointers.current.size >= 2) {
        isDrawing.current = false;
        return;
      }

      // Palm rejection: ignore broad touch if stylus already drawing
      if (e.pointerType === 'touch' && activePenDown.current) return;
      if (e.pointerType === 'pen') activePenDown.current = true;

      const pt = toCanvasPoint(e.clientX, e.clientY, e.pressure);
      const { tool, color } = optsRef.current;

      if (tool === 'bucket') {
        const outlineCtx = getOutlineCtx();
        const colorCtx = getColorCtx();
        saveHistory();
        floodFill(colorCtx, outlineCtx, pt.x, pt.y, color);
        composite();
        return;
      }

      isDrawing.current = true;
      lastPoint.current = pt;
      saveHistory();
    },
    [displayCanvasRef, toCanvasPoint, getOutlineCtx, getColorCtx, composite, saveHistory]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (activePointers.current.size === 2) {
        // Pinch zoom / pan
        const pts = Array.from(activePointers.current.values());
        const dx = pts[1].x - pts[0].x;
        const dy = pts[1].y - pts[0].y;
        const dist = Math.hypot(dx, dy);
        const mid = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };

        if (lastPinchDist.current !== null && lastPinchMid.current !== null) {
          const scaleChange = dist / lastPinchDist.current;
          const newScale = Math.min(4, Math.max(0.5, scale.current * scaleChange));

          // Pan follows midpoint movement
          panX.current += mid.x - lastPinchMid.current.x;
          panY.current += mid.y - lastPinchMid.current.y;

          scale.current = newScale;
          applyTransform();
        }

        lastPinchDist.current = dist;
        lastPinchMid.current = mid;
        return;
      }

      lastPinchDist.current = null;
      lastPinchMid.current = null;

      if (!isDrawing.current || !lastPoint.current) return;
      if (e.pointerType === 'touch' && activePenDown.current) return;

      // Use getCoalescedEvents for high-fidelity Apple Pencil input
      const events = e.getCoalescedEvents ? e.getCoalescedEvents() : [e];
      for (const ev of events) {
        const pt = toCanvasPoint(ev.clientX, ev.clientY, ev.pressure);
        drawStroke(lastPoint.current, pt);
        lastPoint.current = pt;
      }
    },
    [toCanvasPoint, drawStroke]
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      activePointers.current.delete(e.pointerId);
      lastPinchDist.current = null;
      lastPinchMid.current = null;

      if (e.pointerType === 'pen') activePenDown.current = false;
      isDrawing.current = false;
      lastPoint.current = null;
    },
    []
  );

  // ─── Transform helpers ────────────────────────────────────────────────────
  function applyTransform() {
    const display = displayCanvasRef.current;
    if (!display) return;
    const parent = display.parentElement;
    if (!parent) return;
    parent.style.transform = `translate(${panX.current}px, ${panY.current}px) scale(${scale.current})`;
  }

  const resetZoom = useCallback(() => {
    scale.current = 1;
    panX.current = 0;
    panY.current = 0;
    applyTransform();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Attach events ────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    const options: AddEventListenerOptions = { passive: false };
    canvas.addEventListener('pointerdown', handlePointerDown, options);
    canvas.addEventListener('pointermove', handlePointerMove, options);
    canvas.addEventListener('pointerup', handlePointerUp, options);
    canvas.addEventListener('pointercancel', handlePointerUp, options);
    canvas.addEventListener('pointerleave', handlePointerUp, options);

    // Prevent context menu on long-press (iPad)
    const noCtx = (e: Event) => e.preventDefault();
    canvas.addEventListener('contextmenu', noCtx);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown, options);
      canvas.removeEventListener('pointermove', handlePointerMove, options);
      canvas.removeEventListener('pointerup', handlePointerUp, options);
      canvas.removeEventListener('pointercancel', handlePointerUp, options);
      canvas.removeEventListener('pointerleave', handlePointerUp, options);
      canvas.removeEventListener('contextmenu', noCtx);
    };
  }, [displayCanvasRef, handlePointerDown, handlePointerMove, handlePointerUp]);

  return { loadPage, loadImageUrl, undo, redo, clearCanvas, saveImage, resetZoom };
}

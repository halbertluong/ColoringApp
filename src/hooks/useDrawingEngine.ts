import { useRef, useCallback, useEffect } from 'react';
import { ToolType, GlitterType, Point, ColoringPage } from '../types';
import { floodFill, getRegionMask } from '../utils/floodFill';

const CANVAS_W = 900;
const CANVAS_H = 900;
const MAX_HISTORY = 40;

interface DrawingEngineOptions {
  tool: ToolType;
  color: string;
  brushSize: number;
  autoColorMode: boolean;
  glitterType: GlitterType;
}

function getGlitterColor(type: GlitterType, baseColor: string, x: number, y: number): string {
  switch (type) {
    case 'rainbow': {
      const hue = ((x * 0.4 + y * 0.3) % 360 + Math.random() * 40) % 360;
      return `hsl(${hue}, 100%, 55%)`;
    }
    case 'gold': {
      const golds = ['#FFD700', '#FFA500', '#FFB347', '#FFCC00', '#DAA520'];
      return golds[Math.floor(Math.random() * golds.length)];
    }
    case 'silver': {
      const silvers = ['#C0C0C0', '#D8D8D8', '#E8E8E8', '#A8A8A8', '#FFFFFF'];
      return silvers[Math.floor(Math.random() * silvers.length)];
    }
    case 'roseGold': {
      const rg = ['#FFB6C1', '#FF9BA5', '#FFD4B3', '#E8A0A0', '#FFB0A0'];
      return rg[Math.floor(Math.random() * rg.length)];
    }
    case 'stardust': {
      const sd = ['#FFFFFF', '#F0F0FF', '#E8E8FF', '#FFFFF0', '#F8F0FF'];
      return sd[Math.floor(Math.random() * sd.length)];
    }
    case 'purple': {
      const purps = ['#9B59B6', '#8E44AD', '#CF9FFF', '#BB88FF', '#AA66FF'];
      return purps[Math.floor(Math.random() * purps.length)];
    }
    default:
      return baseColor;
  }
}

export function useDrawingEngine(
  displayCanvasRef: React.RefObject<HTMLCanvasElement | null>,
  opts: DrawingEngineOptions
) {
  const outlineCanvas = useRef<HTMLCanvasElement | null>(null);
  const colorCanvas = useRef<HTMLCanvasElement | null>(null);
  const referenceCanvas = useRef<HTMLCanvasElement | null>(null);
  const maskCanvas = useRef<HTMLCanvasElement | null>(null);
  const strokeTempCanvas = useRef<HTMLCanvasElement | null>(null);
  const smartBrushMask = useRef<Uint8Array | null>(null);

  const isDrawing = useRef(false);
  const lastPoint = useRef<Point | null>(null);
  const activePenDown = useRef(false);

  const scale = useRef(1);
  const panX = useRef(0);
  const panY = useRef(0);
  const lastPinchDist = useRef<number | null>(null);
  const lastPinchMid = useRef<{ x: number; y: number } | null>(null);
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());

  const history = useRef<ImageData[]>([]);
  const historyIndex = useRef(-1);

  const optsRef = useRef(opts);
  optsRef.current = opts;

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

  const getReferenceCtx = useCallback(() => {
    if (!referenceCanvas.current) {
      referenceCanvas.current = document.createElement('canvas');
      referenceCanvas.current.width = CANVAS_W;
      referenceCanvas.current.height = CANVAS_H;
    }
    return referenceCanvas.current.getContext('2d', { willReadFrequently: true })!;
  }, []);

  const getMaskCtx = useCallback(() => {
    if (!maskCanvas.current) {
      maskCanvas.current = document.createElement('canvas');
      maskCanvas.current.width = CANVAS_W;
      maskCanvas.current.height = CANVAS_H;
    }
    return maskCanvas.current.getContext('2d', { willReadFrequently: true })!;
  }, []);

  const getStrokeTempCtx = useCallback(() => {
    if (!strokeTempCanvas.current) {
      strokeTempCanvas.current = document.createElement('canvas');
      strokeTempCanvas.current.width = CANVAS_W;
      strokeTempCanvas.current.height = CANVAS_H;
    }
    return strokeTempCanvas.current.getContext('2d', { willReadFrequently: true })!;
  }, []);

  const composite = useCallback(() => {
    const display = displayCanvasRef.current;
    if (!display || !colorCanvas.current || !outlineCanvas.current) return;
    const ctx = display.getContext('2d')!;
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    ctx.drawImage(colorCanvas.current, 0, 0);
    ctx.globalCompositeOperation = 'multiply';
    ctx.drawImage(outlineCanvas.current, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
  }, [displayCanvasRef]);

  const saveHistory = useCallback(() => {
    const colorCtx = getColorCtx();
    const snap = colorCtx.getImageData(0, 0, CANVAS_W, CANVAS_H);
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

  const loadPage = useCallback(
    (page: ColoringPage) => {
      const outlineCtx = getOutlineCtx();
      const colorCtx = getColorCtx();
      const refCtx = getReferenceCtx();

      colorCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      colorCtx.fillStyle = 'white';
      colorCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      refCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      const loadOutlineFromUrl = (url: string, isBlobUrl: boolean) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
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
          if (isBlobUrl) URL.revokeObjectURL(url);
          history.current = [];
          historyIndex.current = -1;
          saveHistory();
          composite();
        };
        img.onerror = () => {
          if (isBlobUrl) URL.revokeObjectURL(url);
        };
        img.src = url;
      };

      if (page.svgData.startsWith('http') || page.svgData.startsWith('/') || page.svgData.startsWith('data:') || page.svgData.startsWith('./')) {
        loadOutlineFromUrl(page.svgData, false);
      } else if (page.svgData) {
        const blob = new Blob([page.svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        loadOutlineFromUrl(url, true);
      }

      if (page.colorSvgData) {
        const loadRef = (src: string, isBlob: boolean) => {
          const cimg = new Image();
          cimg.crossOrigin = 'anonymous';
          cimg.onload = () => {
            const aspect = cimg.width / cimg.height;
            let dw = CANVAS_W, dh = CANVAS_H;
            if (aspect > 1) dh = CANVAS_W / aspect;
            else dw = CANVAS_H * aspect;
            const dx = (CANVAS_W - dw) / 2;
            const dy = (CANVAS_H - dh) / 2;
            refCtx.drawImage(cimg, dx, dy, dw, dh);
            if (isBlob) URL.revokeObjectURL(src);
          };
          cimg.src = src;
        };

        if (page.colorSvgData.startsWith('http') || page.colorSvgData.startsWith('/') || page.colorSvgData.startsWith('./') || page.colorSvgData.startsWith('data:')) {
          loadRef(page.colorSvgData, false);
        } else {
          const cblob = new Blob([page.colorSvgData], { type: 'image/svg+xml' });
          loadRef(URL.createObjectURL(cblob), true);
        }
      }
    },
    [getOutlineCtx, getColorCtx, getReferenceCtx, composite, saveHistory]
  );

  const loadImageUrl = useCallback(
    (imageUrl: string) => {
      const outlineCtx = getOutlineCtx();
      const colorCtx = getColorCtx();

      colorCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      colorCtx.fillStyle = 'white';
      colorCtx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
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

  const toCanvasPoint = useCallback(
    (clientX: number, clientY: number, rawPressure = 1): Point => {
      const display = displayCanvasRef.current!;
      const rect = display.getBoundingClientRect();
      const scaleX = CANVAS_W / rect.width;
      const scaleY = CANVAS_H / rect.height;
      // Mouse reports 0 or 0.5; Apple Pencil gives real 0–1 pressure
      const pressure = rawPressure < 0.05 ? 0.65 : Math.max(0.25, rawPressure);
      return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY,
        pressure,
      };
    },
    [displayCanvasRef]
  );

  const drawStroke = useCallback(
    (from: Point, to: Point) => {
      const { tool, color, brushSize, glitterType } = optsRef.current;
      const colorCtx = getColorCtx();
      const pressure = (from.pressure + to.pressure) / 2;
      // brushSize dominates; tiny pressure modifier for feel
      const size = brushSize * (0.88 + pressure * 0.12);

      if (tool === 'smartBrush' && maskCanvas.current) {
        const tempCtx = getStrokeTempCtx();
        tempCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        tempCtx.lineCap = 'round';
        tempCtx.lineJoin = 'round';
        tempCtx.strokeStyle = color;
        tempCtx.globalAlpha = 0.9;
        tempCtx.lineWidth = size * 1.2;
        tempCtx.shadowBlur = size * 0.3;
        tempCtx.shadowColor = color;
        tempCtx.beginPath();
        tempCtx.moveTo(from.x, from.y);
        tempCtx.lineTo(to.x, to.y);
        tempCtx.stroke();
        tempCtx.shadowBlur = 0;
        tempCtx.globalCompositeOperation = 'destination-in';
        tempCtx.drawImage(maskCanvas.current, 0, 0);
        tempCtx.globalCompositeOperation = 'source-over';
        colorCtx.drawImage(strokeTempCanvas.current!, 0, 0);
        colorCtx.globalAlpha = 1;
        composite();
        return;
      }

      colorCtx.lineCap = 'round';
      colorCtx.lineJoin = 'round';
      colorCtx.strokeStyle = color;

      switch (tool) {
        case 'pencil': {
          // Solid, clean pencil line — alpha doesn't multiply pressure so it's always visible
          colorCtx.globalAlpha = 0.82;
          colorCtx.lineWidth = size;
          colorCtx.shadowBlur = 0;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          break;
        }
        case 'crayon': {
          // Textured crayon: multiple offset strokes build wax feel
          colorCtx.globalAlpha = 0.65;
          colorCtx.lineWidth = size;
          for (let i = 0; i < 4; i++) {
            const ox = (Math.random() - 0.5) * size * 0.5;
            const oy = (Math.random() - 0.5) * size * 0.5;
            colorCtx.beginPath();
            colorCtx.moveTo(from.x + ox, from.y + oy);
            colorCtx.lineTo(to.x + ox, to.y + oy);
            colorCtx.stroke();
          }
          break;
        }
        case 'marker': {
          // Bold, nearly opaque marker
          colorCtx.globalAlpha = 0.92;
          colorCtx.lineWidth = size * 1.4;
          colorCtx.shadowBlur = 0;
          colorCtx.beginPath();
          colorCtx.moveTo(from.x, from.y);
          colorCtx.lineTo(to.x, to.y);
          colorCtx.stroke();
          break;
        }
        case 'brush': {
          // Brush: pressure affects opacity for a painterly feel
          colorCtx.globalAlpha = 0.5 + pressure * 0.4;
          colorCtx.lineWidth = size * (1 + pressure * 0.4);
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
          // Soft layering — each pass adds a little; build up with multiple strokes
          colorCtx.globalAlpha = 0.07 + pressure * 0.05;
          colorCtx.lineWidth = size * 2.5;
          colorCtx.shadowBlur = size * 1.2;
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
          const steps = Math.max(1, Math.floor(dist / 5));
          for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            const cx = from.x + (to.x - from.x) * t;
            const cy = from.y + (to.y - from.y) * t;
            const count = Math.ceil(size * 1.0);
            for (let j = 0; j < count; j++) {
              const angle = Math.random() * Math.PI * 2;
              const r = Math.random() * size;
              const px = cx + Math.cos(angle) * r;
              const py = cy + Math.sin(angle) * r;
              const dotSize = 1 + Math.random() * 3;
              colorCtx.globalAlpha = 0.5 + Math.random() * 0.5;
              colorCtx.fillStyle = getGlitterColor(glitterType, color, px, py);
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
    [getColorCtx, getStrokeTempCtx, composite]
  );

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

  const handlePointerDown = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      const display = displayCanvasRef.current;
      if (!display) return;
      display.setPointerCapture(e.pointerId);

      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (activePointers.current.size >= 2) {
        isDrawing.current = false;
        return;
      }

      if (e.pointerType === 'touch' && activePenDown.current) return;
      if (e.pointerType === 'pen') activePenDown.current = true;

      const pt = toCanvasPoint(e.clientX, e.clientY, e.pressure);
      const { tool, color, autoColorMode } = optsRef.current;

      if (tool === 'bucket') {
        const outlineCtx = getOutlineCtx();
        const colorCtx = getColorCtx();
        saveHistory();

        if (autoColorMode) {
          const refCtx = getReferenceCtx();
          const pixel = refCtx.getImageData(Math.floor(pt.x), Math.floor(pt.y), 1, 1).data;
          const a = pixel[3];
          const r = pixel[0], g = pixel[1], b = pixel[2];
          if (a >= 20 && !(r > 240 && g > 240 && b > 240)) {
            const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
            floodFill(colorCtx, outlineCtx, pt.x, pt.y, hex);
          } else {
            floodFill(colorCtx, outlineCtx, pt.x, pt.y, color);
          }
        } else {
          floodFill(colorCtx, outlineCtx, pt.x, pt.y, color);
        }

        composite();
        return;
      }

      if (tool === 'smartBrush') {
        const outlineCtx = getOutlineCtx();
        const mask = getRegionMask(outlineCtx, pt.x, pt.y);
        smartBrushMask.current = mask;

        const maskCtx = getMaskCtx();
        maskCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
        const imgData = maskCtx.createImageData(CANVAS_W, CANVAS_H);
        for (let i = 0; i < mask.length; i++) {
          if (mask[i]) {
            imgData.data[i * 4] = 255;
            imgData.data[i * 4 + 1] = 255;
            imgData.data[i * 4 + 2] = 255;
            imgData.data[i * 4 + 3] = 255;
          }
        }
        maskCtx.putImageData(imgData, 0, 0);

        isDrawing.current = true;
        lastPoint.current = pt;
        saveHistory();
        return;
      }

      isDrawing.current = true;
      lastPoint.current = pt;
      saveHistory();
    },
    [displayCanvasRef, toCanvasPoint, getOutlineCtx, getColorCtx, getReferenceCtx, getMaskCtx, composite, saveHistory]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      e.preventDefault();
      activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (activePointers.current.size === 2) {
        const pts = Array.from(activePointers.current.values());
        const dx = pts[1].x - pts[0].x;
        const dy = pts[1].y - pts[0].y;
        const dist = Math.hypot(dx, dy);
        const mid = { x: (pts[0].x + pts[1].x) / 2, y: (pts[0].y + pts[1].y) / 2 };

        if (lastPinchDist.current !== null && lastPinchMid.current !== null) {
          const scaleChange = dist / lastPinchDist.current;
          const newScale = Math.min(4, Math.max(0.5, scale.current * scaleChange));
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
      smartBrushMask.current = null;
    },
    []
  );

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

  useEffect(() => {
    const canvas = displayCanvasRef.current;
    if (!canvas) return;

    const options: AddEventListenerOptions = { passive: false };
    canvas.addEventListener('pointerdown', handlePointerDown, options);
    canvas.addEventListener('pointermove', handlePointerMove, options);
    canvas.addEventListener('pointerup', handlePointerUp, options);
    canvas.addEventListener('pointercancel', handlePointerUp, options);
    canvas.addEventListener('pointerleave', handlePointerUp, options);

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

import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { ToolType, ColoringPage } from '../types';
import { useDrawingEngine } from '../hooks/useDrawingEngine';

interface Props {
  tool: ToolType;
  color: string;
  brushSize: number;
  initialPage: ColoringPage;
}

export interface ColoringCanvasHandle {
  undo: () => void;
  redo: () => void;
  clearCanvas: () => void;
  saveImage: () => void;
  loadPage: (page: ColoringPage) => void;
  loadImageUrl: (url: string) => void;
  resetZoom: () => void;
}

export const ColoringCanvas = forwardRef<ColoringCanvasHandle, Props>(
  ({ tool, color, brushSize, initialPage }, ref) => {
    const displayCanvasRef = useRef<HTMLCanvasElement>(null);

    const engine = useDrawingEngine(displayCanvasRef, { tool, color, brushSize });

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      undo: engine.undo,
      redo: engine.redo,
      clearCanvas: engine.clearCanvas,
      saveImage: engine.saveImage,
      loadPage: engine.loadPage,
      loadImageUrl: engine.loadImageUrl,
      resetZoom: engine.resetZoom,
    }));

    // Load initial page on mount
    useEffect(() => {
      engine.loadPage(initialPage);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Cursor styles per tool
    const cursorMap: Record<ToolType, string> = {
      bucket: 'cell',
      pencil: 'crosshair',
      crayon: 'crosshair',
      marker: 'crosshair',
      brush: 'crosshair',
      watercolor: 'crosshair',
      glitter: 'crosshair',
      eraser: 'cell',
    };

    return (
      <div className="canvas-viewport">
        <div className="canvas-transform-wrapper">
          <canvas
            ref={displayCanvasRef}
            width={900}
            height={900}
            className="coloring-canvas"
            style={{ cursor: cursorMap[tool], touchAction: 'none' }}
          />
        </div>
      </div>
    );
  }
);

ColoringCanvas.displayName = 'ColoringCanvas';

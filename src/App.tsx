import { useState, useRef } from 'react';
import { ToolType, ColoringPage } from './types';
import { COLORING_PAGES } from './data/coloringPages';
import { ColoringCanvas, ColoringCanvasHandle } from './components/ColoringCanvas';
import { LeftToolbar } from './components/LeftToolbar';
import { RightToolbar } from './components/RightToolbar';
import { TopBar } from './components/TopBar';
import { ImageGallery } from './components/ImageGallery';
import './App.css';

export default function App() {
  const [tool, setTool] = useState<ToolType>('bucket');
  const [color, setColor] = useState('#FF0000');
  const [brushSize, setBrushSize] = useState(14);
  const [showGallery, setShowGallery] = useState(false);
  const [currentPage, setCurrentPage] = useState<ColoringPage>(COLORING_PAGES[0]);
  const [customPages, setCustomPages] = useState<ColoringPage[]>([]);

  const canvasRef = useRef<ColoringCanvasHandle>(null);

  const handleSelectPage = (page: ColoringPage) => {
    setCurrentPage(page);
    setShowGallery(false);
    canvasRef.current?.loadPage(page);
  };

  const handleUpload = (url: string, name: string) => {
    const page: ColoringPage = {
      id: `custom-${Date.now()}`,
      name,
      category: 'Custom',
      svgData: '',
    };
    setCustomPages((prev) => [...prev, page]);
    setCurrentPage(page);
    setShowGallery(false);
    canvasRef.current?.loadImageUrl(url);
  };

  return (
    <div className="app">
      {/* Top bar */}
      <TopBar
        onUndo={() => canvasRef.current?.undo()}
        onRedo={() => canvasRef.current?.redo()}
        onClear={() => canvasRef.current?.clearCanvas()}
        onSave={() => canvasRef.current?.saveImage()}
        onGallery={() => setShowGallery(true)}
        onResetZoom={() => canvasRef.current?.resetZoom()}
      />

      {/* Main area */}
      <div className="main-area">
        <LeftToolbar
          tool={tool}
          brushSize={brushSize}
          onToolChange={setTool}
          onBrushSizeChange={setBrushSize}
        />

        {/* Canvas wrapper */}
        <div className="canvas-area">
          <div className="page-label">
            {currentPage.name}
            {currentPage.category && (
              <span className="page-cat"> · {currentPage.category}</span>
            )}
          </div>
          <ColoringCanvas
            ref={canvasRef}
            tool={tool}
            color={color}
            brushSize={brushSize}
            initialPage={currentPage}
          />
        </div>

        <RightToolbar color={color} onColorChange={setColor} />
      </div>

      {/* Gallery modal */}
      {showGallery && (
        <ImageGallery
          currentPageId={currentPage.id}
          onSelect={handleSelectPage}
          onUpload={handleUpload}
          onClose={() => setShowGallery(false)}
        />
      )}

      {/* Prevent iOS bounce scroll */}
      <div style={{ display: 'none' }}>{customPages.length}</div>
    </div>
  );
}

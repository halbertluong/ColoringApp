import { useState, useRef } from 'react';
import { ToolType, ColoringPage } from './types';
import { COLORING_PAGES } from './data/coloringPages';
import { ColoringCanvas, ColoringCanvasHandle } from './components/ColoringCanvas';
import { BottomBar } from './components/BottomBar';
import { TopBar } from './components/TopBar';
import { ImageGallery } from './components/ImageGallery';
import './App.css';

export default function App() {
  const [tool, setTool] = useState<ToolType>('bucket');
  const [color, setColor] = useState('#FF0000');
  const [brushSize, setBrushSize] = useState(14);
  const [showGallery, setShowGallery] = useState(false);
  const [currentPage, setCurrentPage] = useState<ColoringPage>(COLORING_PAGES[0]);

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
    setCurrentPage(page);
    setShowGallery(false);
    canvasRef.current?.loadImageUrl(url);
  };

  return (
    <div className="app-new">
      <TopBar
        pageTitle={currentPage.name}
        onGallery={() => setShowGallery(true)}
        onUndo={() => canvasRef.current?.undo()}
        onRedo={() => canvasRef.current?.redo()}
        onClear={() => canvasRef.current?.clearCanvas()}
        onSave={() => canvasRef.current?.saveImage()}
      />

      <div className="canvas-area-new">
        <ColoringCanvas
          ref={canvasRef}
          tool={tool}
          color={color}
          brushSize={brushSize}
          initialPage={currentPage}
        />
      </div>

      <BottomBar
        tool={tool}
        brushSize={brushSize}
        color={color}
        onToolChange={setTool}
        onBrushSizeChange={setBrushSize}
        onColorChange={setColor}
      />

      {showGallery && (
        <ImageGallery
          currentPageId={currentPage.id}
          onSelect={handleSelectPage}
          onUpload={handleUpload}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}

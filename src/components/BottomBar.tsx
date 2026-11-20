import { useRef } from 'react';
import { ToolType } from '../types';

interface Props {
  tool: ToolType;
  brushSize: number;
  color: string;
  onToolChange: (t: ToolType) => void;
  onBrushSizeChange: (s: number) => void;
  onColorChange: (c: string) => void;
}

const TOOLS: { id: ToolType; icon: string; label: string }[] = [
  { id: 'bucket', icon: '🪣', label: 'Fill' },
  { id: 'autoColor', icon: '🪄', label: 'Magic' },
  { id: 'smartBrush', icon: '🔮', label: 'Smart' },
  { id: 'crayon', icon: '🖍️', label: 'Crayon' },
  { id: 'marker', icon: '🖊️', label: 'Marker' },
  { id: 'pencil', icon: '✏️', label: 'Pencil' },
  { id: 'brush', icon: '🖌️', label: 'Brush' },
  { id: 'watercolor', icon: '💧', label: 'Water' },
  { id: 'glitter', icon: '✨', label: 'Glitter' },
  { id: 'eraser', icon: '🧹', label: 'Eraser' },
];

const SIZES = [
  { size: 4, label: 'XS' },
  { size: 8, label: 'S' },
  { size: 14, label: 'M' },
  { size: 22, label: 'L' },
  { size: 36, label: 'XL' },
];

const PALETTE = [
  '#FF0000', '#FF4500', '#FF7F00', '#FFD700', '#FFFF00',
  '#ADFF2F', '#00C800', '#00FA9A', '#00BFFF', '#1E90FF',
  '#4169E1', '#8A2BE2', '#FF1493', '#FF69B4', '#FF8C94',
  '#FFA07A', '#DEB887', '#8B4513', '#A0522D', '#808000',
  '#2E8B57', '#008080', '#000080', '#4B0082', '#808080',
  '#C0C0C0', '#FFFFFF', '#1C1C1C', '#FDBCB4', '#D4AC6E',
  '#87CEEB', '#E0FFFF',
];

export function BottomBar({ tool, brushSize, color, onToolChange, onBrushSizeChange, onColorChange }: Props) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bottom-bar">
      {/* Tool row */}
      <div className="bottom-row tools-row">
        <div className="tools-scroll">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              className={`tool-btn-new ${tool === t.id ? 'tool-btn-active-new' : ''}`}
              onClick={() => onToolChange(t.id)}
              title={t.label}
            >
              <span className="tool-icon-new">{t.icon}</span>
              <span className="tool-label-new">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Color + size row */}
      <div className="bottom-row color-row">
        {/* Size buttons */}
        <div className="size-group">
          {SIZES.map(({ size, label }) => (
            <button
              key={size}
              className={`size-btn-new ${brushSize === size ? 'size-btn-active-new' : ''}`}
              onClick={() => onBrushSizeChange(size)}
              title={label}
            >
              <div
                className="size-dot-new"
                style={{ width: Math.min(size, 20), height: Math.min(size, 20) }}
              />
            </button>
          ))}
        </div>

        <div className="divider-v" />

        {/* Color swatches */}
        <div className="colors-scroll">
          {PALETTE.map((c) => (
            <button
              key={c}
              className={`color-swatch-new ${color === c ? 'color-swatch-active-new' : ''}`}
              style={{ background: c, border: c === '#FFFFFF' ? '2px solid #ddd' : undefined }}
              onClick={() => onColorChange(c)}
              title={c}
            />
          ))}
        </div>

        {/* Custom color picker */}
        <button
          className="color-picker-btn"
          style={{ background: color }}
          onClick={() => colorInputRef.current?.click()}
          title="Custom color"
        >
          <span>🎨</span>
        </button>
        <input
          ref={colorInputRef}
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

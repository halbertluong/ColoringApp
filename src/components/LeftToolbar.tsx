import { ToolType } from '../types';

interface Props {
  tool: ToolType;
  brushSize: number;
  onToolChange: (t: ToolType) => void;
  onBrushSizeChange: (s: number) => void;
}

const TOOLS: { id: ToolType; label: string; emoji: string }[] = [
  { id: 'bucket', label: 'Fill', emoji: '🪣' },
  { id: 'crayon', label: 'Crayon', emoji: '🖍️' },
  { id: 'pencil', label: 'Pencil', emoji: '✏️' },
  { id: 'marker', label: 'Marker', emoji: '🖊️' },
  { id: 'brush', label: 'Brush', emoji: '🖌️' },
  { id: 'watercolor', label: 'Watercolor', emoji: '💧' },
  { id: 'glitter', label: 'Glitter', emoji: '✨' },
  { id: 'eraser', label: 'Eraser', emoji: '🧹' },
];

const BRUSH_SIZES = [4, 8, 14, 22, 36];

export function LeftToolbar({ tool, brushSize, onToolChange, onBrushSizeChange }: Props) {
  return (
    <div className="toolbar toolbar-left">
      <div className="toolbar-tab" />
      <div className="toolbar-inner">
        <div className="toolbar-section-label">Tools</div>
        <div className="tool-grid">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              className={`tool-btn ${tool === t.id ? 'tool-btn-active' : ''}`}
              onClick={() => onToolChange(t.id)}
              title={t.label}
            >
              <span className="tool-emoji">{t.emoji}</span>
              <span className="tool-label">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="toolbar-section-label" style={{ marginTop: 12 }}>Size</div>
        <div className="size-selector">
          {BRUSH_SIZES.map((s) => (
            <button
              key={s}
              className={`size-btn ${brushSize === s ? 'size-btn-active' : ''}`}
              onClick={() => onBrushSizeChange(s)}
              title={`Size ${s}`}
            >
              <div
                className="size-dot"
                style={{ width: s * 0.7 + 4, height: s * 0.7 + 4 }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

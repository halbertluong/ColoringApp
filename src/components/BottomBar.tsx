import { useRef } from 'react';
import { ToolType, GlitterType } from '../types';

interface Props {
  tool: ToolType;
  brushSize: number;
  color: string;
  autoColorMode: boolean;
  glitterType: GlitterType;
  onToolChange: (t: ToolType) => void;
  onBrushSizeChange: (s: number) => void;
  onColorChange: (c: string) => void;
  onAutoColorModeChange: (v: boolean) => void;
  onGlitterTypeChange: (t: GlitterType) => void;
}

const TOOLS: { id: ToolType; icon: string; label: string }[] = [
  { id: 'bucket', icon: '🪣', label: 'Fill' },
  { id: 'smartBrush', icon: '🔮', label: 'Smart' },
  { id: 'crayon', icon: '🖍️', label: 'Crayon' },
  { id: 'marker', icon: '🖊️', label: 'Marker' },
  { id: 'pencil', icon: '✏️', label: 'Pencil' },
  { id: 'brush', icon: '🖌️', label: 'Brush' },
  { id: 'watercolor', icon: '💧', label: 'Water' },
  { id: 'glitter', icon: '✨', label: 'Glitter' },
  { id: 'eraser', icon: '🧹', label: 'Eraser' },
];

const GLITTER_TYPES: { id: GlitterType; icon: string; label: string }[] = [
  { id: 'normal', icon: '✨', label: 'Color' },
  { id: 'rainbow', icon: '🌈', label: 'Rainbow' },
  { id: 'gold', icon: '⭐', label: 'Gold' },
  { id: 'silver', icon: '💫', label: 'Silver' },
  { id: 'roseGold', icon: '🌸', label: 'Rose' },
  { id: 'stardust', icon: '🌟', label: 'Stars' },
  { id: 'purple', icon: '💜', label: 'Magic' },
];

const SIZES = [
  { size: 4, label: 'XS' },
  { size: 8, label: 'S' },
  { size: 14, label: 'M' },
  { size: 22, label: 'L' },
  { size: 36, label: 'XL' },
  { size: 54, label: 'XXL' },
];

// 72 colors organized across the full spectrum + skin tones + metallics
const PALETTE = [
  // Row 1: Warm bright (12)
  '#FF0000', '#FF3300', '#FF6600', '#FF9900', '#FFCC00', '#FFFF00',
  '#CCFF00', '#99FF00', '#66CC00', '#33AA00', '#007700', '#004400',
  // Row 2: Cool bright (12)
  '#00BB55', '#00FFAA', '#00FFFF', '#00CCFF', '#0099FF', '#0066FF',
  '#0033FF', '#3300FF', '#6600FF', '#9900FF', '#CC00FF', '#FF00FF',
  // Row 3: Pink / rose (8)
  '#FF0088', '#FF0055', '#FF3366', '#FF6688', '#FF1493', '#CC0066', '#880033', '#550022',
  // Row 4: Pastels (12)
  '#FFB3B3', '#FFD4B3', '#FFEFB3', '#DAFFB3', '#B3FFD9', '#B3FFFF',
  '#B3D9FF', '#D9B3FF', '#FFB3FF', '#FFB3D9', '#FFC0CB', '#E6E6FA',
  // Row 5: Skin + earth (12)
  '#FFDFC4', '#F5CBA7', '#D4A574', '#C68642', '#A0522D', '#704214',
  '#8B4513', '#DEB887', '#D2B48C', '#808060', '#228B22', '#556B2F',
  // Row 6: Metallics + dark blues + grays (12)
  '#FFD700', '#FFC107', '#C0C0C0', '#A0A0A0', '#CD7F32', '#B87333',
  '#E8B4B8', '#4169E1', '#000080', '#008080', '#808080', '#404040',
  // Row 7: Pure end (4)
  '#FFFFFF', '#F5F5F5', '#333333', '#000000',
];

export function BottomBar({
  tool, brushSize, color, autoColorMode, glitterType,
  onToolChange, onBrushSizeChange, onColorChange, onAutoColorModeChange, onGlitterTypeChange,
}: Props) {
  const colorInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bottom-bar">
      {/* Tools row */}
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

          {/* Magic Fill toggle — lives in tools row, toggles auto-color mode */}
          <button
            className={`tool-btn-new magic-fill-btn ${autoColorMode ? 'tool-btn-active-new magic-fill-active' : ''}`}
            onClick={() => onAutoColorModeChange(!autoColorMode)}
            title="Magic Fill — auto-picks the right color when you fill"
          >
            <span className="tool-icon-new">🪄</span>
            <span className="tool-label-new">Magic</span>
          </button>
        </div>
      </div>

      {/* Glitter sub-options — shown only when glitter tool is active */}
      {tool === 'glitter' && (
        <div className="bottom-row glitter-row">
          <div className="glitter-label">Sparkle:</div>
          <div className="glitter-scroll">
            {GLITTER_TYPES.map((g) => (
              <button
                key={g.id}
                className={`glitter-btn ${glitterType === g.id ? 'glitter-btn-active' : ''}`}
                onClick={() => onGlitterTypeChange(g.id)}
                title={g.label}
              >
                <span className="glitter-icon">{g.icon}</span>
                <span className="glitter-label-text">{g.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

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
                style={{ width: Math.min(size, 22), height: Math.min(size, 22) }}
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
              style={{
                background: c,
                border: c === '#FFFFFF' || c === '#F5F5F5' ? '1.5px solid #ccc' : undefined,
              }}
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

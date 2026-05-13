import { useState, useRef } from 'react';
import { PALETTE_COLORS } from '../data/colors';

interface Props {
  color: string;
  onColorChange: (c: string) => void;
}

export function RightToolbar({ color, onColorChange }: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const pickerRef = useRef<HTMLInputElement>(null);

  return (
    <div className="toolbar toolbar-right">
      <div className="toolbar-tab" />
      <div className="toolbar-inner">
        {/* Color wheel / picker button */}
        <div className="color-tools-row">
          <button
            className="color-wheel-btn"
            title="Color Picker"
            onClick={() => {
              setShowPicker(true);
              setTimeout(() => pickerRef.current?.click(), 50);
            }}
          >
            🎨
          </button>
          <input
            ref={pickerRef}
            type="color"
            value={color}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0, pointerEvents: 'none' }}
            onChange={(e) => onColorChange(e.target.value)}
            onBlur={() => setShowPicker(false)}
          />
          {/* Current color preview */}
          <div
            className="current-color-preview"
            style={{ background: color }}
            title={color}
          />
        </div>

        <div className="toolbar-section-label">Colors</div>

        {/* Palette grid */}
        <div className="palette-grid">
          {PALETTE_COLORS.map((c) => (
            <button
              key={c}
              className={`color-swatch ${color === c ? 'color-swatch-active' : ''}`}
              style={{ background: c, border: c === '#FFFFFF' ? '2px solid #ccc' : undefined }}
              onClick={() => onColorChange(c)}
              title={c}
            />
          ))}
        </div>

        {/* Recently used / custom: show if picker was used */}
        {showPicker && (
          <div className="custom-color-row">
            <div
              className="color-swatch color-swatch-active"
              style={{ background: color, width: 32, height: 32 }}
            />
            <span style={{ fontSize: 11, color: '#fff', marginLeft: 4 }}>{color}</span>
          </div>
        )}
      </div>
    </div>
  );
}

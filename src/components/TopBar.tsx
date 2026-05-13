interface Props {
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onSave: () => void;
  onGallery: () => void;
  onResetZoom: () => void;
}

export function TopBar({ onUndo, onRedo, onClear, onSave, onGallery, onResetZoom }: Props) {
  return (
    <div className="topbar">
      {/* Left: Gallery button */}
      <div className="topbar-left">
        <button className="topbar-btn topbar-btn-gallery" onClick={onGallery} title="Choose Coloring Page">
          <span>🖼️</span>
          <span className="topbar-label">Pages</span>
        </button>
      </div>

      {/* Center: App title */}
      <div className="topbar-center">
        <span className="app-title">✦ Color Studio ✦</span>
      </div>

      {/* Right: actions */}
      <div className="topbar-right">
        <button className="topbar-btn" onClick={onResetZoom} title="Reset Zoom">
          <span>🔍</span>
        </button>
        <button className="topbar-btn" onClick={onUndo} title="Undo">
          <span>↩️</span>
        </button>
        <button className="topbar-btn" onClick={onRedo} title="Redo">
          <span>↪️</span>
        </button>
        <button className="topbar-btn topbar-btn-clear" onClick={onClear} title="Clear">
          <span>🗑️</span>
        </button>
        <button className="topbar-btn topbar-btn-save" onClick={onSave} title="Save Image">
          <span>✅</span>
          <span className="topbar-label">Save</span>
        </button>
      </div>
    </div>
  );
}

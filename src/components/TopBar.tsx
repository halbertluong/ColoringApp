interface Props {
  pageTitle: string;
  onGallery: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onSave: () => void;
}

export function TopBar({ pageTitle, onGallery, onUndo, onRedo, onClear, onSave }: Props) {
  return (
    <div className="topbar-new">
      <div className="topbar-left-new">
        <button className="topbar-btn-new topbar-btn-pages" onClick={onGallery}>
          <span>🎨</span>
          <span className="topbar-btn-label">Pages</span>
        </button>
      </div>

      <div className="topbar-center-new">
        <span className="topbar-title-new">{pageTitle}</span>
      </div>

      <div className="topbar-right-new">
        <button className="topbar-btn-new" onClick={onUndo} title="Undo">
          <span>↩️</span>
          <span className="topbar-btn-label">Undo</span>
        </button>
        <button className="topbar-btn-new" onClick={onRedo} title="Redo">
          <span>↪️</span>
          <span className="topbar-btn-label">Redo</span>
        </button>
        <button className="topbar-btn-new topbar-btn-clear" onClick={onClear} title="Clear">
          <span>🗑️</span>
          <span className="topbar-btn-label">Clear</span>
        </button>
        <button className="topbar-btn-new topbar-btn-save" onClick={onSave} title="Save">
          <span>💾</span>
          <span className="topbar-btn-label">Save</span>
        </button>
      </div>
    </div>
  );
}

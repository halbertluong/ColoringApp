import { useRef, useState } from 'react';
import { ColoringPage } from '../types';
import { COLORING_PAGES } from '../data/coloringPages';

interface Props {
  currentPageId: string;
  onSelect: (page: ColoringPage) => void;
  onUpload: (url: string, name: string) => void;
  onClose: () => void;
}

function isSvgData(s: string) {
  return s.trim().startsWith('<');
}

function getThumbnailSrc(page: ColoringPage): string {
  const src = page.colorSvgData || page.svgData;
  if (!src) return '';
  if (isSvgData(src)) {
    const blob = new Blob([src], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  }
  return src; // already a URL (./images/..., http://, data:...)
}

export function ImageGallery({ currentPageId, onSelect, onUpload, onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState('');
  const [urlError, setUrlError] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(COLORING_PAGES.map((p) => p.category)))];

  const filtered = activeCategory === 'All'
    ? COLORING_PAGES
    : COLORING_PAGES.filter((p) => p.category === activeCategory);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const url = ev.target?.result as string;
      onUpload(url, file.name.replace(/\.[^/.]+$/, ''));
    };
    reader.readAsDataURL(file);
  };

  const handleUrl = () => {
    setUrlError('');
    if (!urlInput.trim()) return;
    const img = new Image();
    img.onload = () => onUpload(urlInput.trim(), 'Custom Image');
    img.onerror = () => setUrlError('Could not load image from that URL');
    img.src = urlInput.trim();
  };

  const categoryColors: Record<string, string> = {
    Frozen: '#90CAF9',
    Classic: '#FFB300',
    Princesses: '#F48FB1',
    'Lion King': '#FFA726',
    'Toy Story': '#7986CB',
    Nemo: '#29B6F6',
    Disney: '#66BB6A',
    Cars: '#EF5350',
    Custom: '#78909C',
  };

  return (
    <div className="gallery-overlay-new" onClick={onClose}>
      <div className="gallery-modal-new" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-header-new">
          <h2 className="gallery-title-new">🎨 Choose a Page</h2>
          <button className="gallery-close-new" onClick={onClose}>✕</button>
        </div>

        {/* Category tabs */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'category-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Page grid */}
        <div className="gallery-grid-new">
          {filtered.map((page) => {
            const src = getThumbnailSrc(page);
            return (
              <button
                key={page.id}
                className={`gallery-card-new ${currentPageId === page.id ? 'gallery-card-selected' : ''}`}
                onClick={() => onSelect(page)}
              >
                {src ? (
                  <img
                    className="gallery-thumb-new"
                    src={src}
                    alt={page.name}
                    crossOrigin="anonymous"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = (e.target as HTMLImageElement).parentElement;
                      if (parent) {
                        const ph = parent.querySelector('.gallery-thumb-placeholder');
                        if (ph) (ph as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className="gallery-thumb-placeholder" style={{ display: src ? 'none' : 'flex' }}>
                  <span>🖼️</span>
                </div>
                <span
                  className="gallery-category-badge"
                  style={{ background: categoryColors[page.category] || '#888' }}
                >
                  {page.category}
                </span>
                <span className="gallery-card-name-new">{page.name}</span>
              </button>
            );
          })}
        </div>

        {/* Upload section */}
        <div className="gallery-upload-section">
          <h3 className="gallery-upload-title">📁 Add Your Own</h3>
          <div className="gallery-upload-actions">
            <button className="upload-btn-new" onClick={() => fileInputRef.current?.click()}>
              📷 Upload from Device
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFile}
            />
            <div className="url-row-new">
              <input
                className="url-input-new"
                placeholder="Paste image URL..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUrl()}
              />
              <button className="url-load-btn-new" onClick={handleUrl}>Load</button>
            </div>
            {urlError && <p className="url-error-new">{urlError}</p>}
          </div>
          <p className="upload-hint-new">
            Upload a photo from your device or paste a coloring page URL to color it!
          </p>
        </div>
      </div>
    </div>
  );
}

import { useRef, useState } from 'react';
import { ColoringPage } from '../types';
import { COLORING_PAGES } from '../data/coloringPages';

interface Props {
  currentPageId: string;
  onSelect: (page: ColoringPage) => void;
  onUpload: (url: string, name: string) => void;
  onClose: () => void;
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

  const getThumbnailUrl = (page: ColoringPage) => {
    const svgData = page.colorSvgData || page.svgData;
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  };

  const categoryColors: Record<string, string> = {
    Nature: '#4CAF50',
    Fantasy: '#9C27B0',
    Adventure: '#FF5722',
    Princess: '#E91E63',
    Animals: '#FF9800',
    Custom: '#2196F3',
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
            const thumbUrl = getThumbnailUrl(page);
            return (
              <button
                key={page.id}
                className={`gallery-card-new ${currentPageId === page.id ? 'gallery-card-selected' : ''}`}
                onClick={() => onSelect(page)}
              >
                <img
                  className="gallery-thumb-new"
                  src={thumbUrl}
                  alt={page.name}
                  onLoad={() => URL.revokeObjectURL(thumbUrl)}
                />
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
            Tip: Search for coloring pages online and paste the URL here, or upload a photo to color!
          </p>
        </div>
      </div>
    </div>
  );
}

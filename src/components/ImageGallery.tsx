import { useRef, useState } from 'react';
import { ColoringPage } from '../types';
import { COLORING_PAGES } from '../data/coloringPages';

interface Props {
  currentPageId: string | undefined;
  onSelect: (page: ColoringPage) => void;
  onUpload: (url: string, name: string) => void;
  onClose: () => void;
}

export function ImageGallery({ currentPageId, onSelect, onUpload, onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlInput, setUrlInput] = useState('');
  const [urlError, setUrlError] = useState('');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      onUpload(dataUrl, file.name.replace(/\.[^.]+$/, ''));
    };
    reader.readAsDataURL(file);
  };

  const handleUrlLoad = () => {
    const u = urlInput.trim();
    if (!u) return;
    // Validate it looks like a URL
    if (!u.startsWith('http://') && !u.startsWith('https://') && !u.startsWith('data:')) {
      setUrlError('Please enter a valid image URL (https://...)');
      return;
    }
    setUrlError('');
    onUpload(u, 'Custom Image');
  };

  // Build SVG thumbnails on-the-fly using data URIs
  const thumbUrl = (svgData: string) => {
    const blob = new Blob([svgData], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  };

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-header">
          <h2 className="gallery-title">🎨 Choose a Coloring Page</h2>
          <button className="gallery-close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Curated pages */}
        <div className="gallery-section-label">Curated Pages</div>
        <div className="gallery-grid">
          {COLORING_PAGES.map((page) => {
            const url = thumbUrl(page.svgData);
            return (
              <button
                key={page.id}
                className={`gallery-card ${currentPageId === page.id ? 'gallery-card-active' : ''}`}
                onClick={() => onSelect(page)}
              >
                <img
                  src={url}
                  alt={page.name}
                  className="gallery-thumb"
                  onLoad={() => URL.revokeObjectURL(url)}
                />
                <span className="gallery-card-name">{page.name}</span>
                <span className="gallery-card-cat">{page.category}</span>
              </button>
            );
          })}
        </div>

        {/* Upload */}
        <div className="gallery-section-label" style={{ marginTop: 24 }}>Load Your Own</div>
        <div className="gallery-upload-area">
          <button
            className="upload-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            📁 Upload Image
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFile}
          />

          <div className="url-row">
            <input
              type="text"
              className="url-input"
              placeholder="Paste image URL (https://...)"
              value={urlInput}
              onChange={(e) => { setUrlInput(e.target.value); setUrlError(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleUrlLoad()}
            />
            <button className="url-load-btn" onClick={handleUrlLoad}>Load</button>
          </div>
          {urlError && <div className="url-error">{urlError}</div>}

          <p className="upload-hint">
            Tip: Search "Disney coloring pages" online, save the image, then upload it here.
            Works best with black-outline images on white backgrounds.
          </p>
        </div>
      </div>
    </div>
  );
}

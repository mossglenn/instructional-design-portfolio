import { useEffect, useState } from 'react';

interface ZoomedImage {
  src: string;
  alt: string;
}

export default function ZoomModal() {
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const button = (e.target as HTMLElement)?.closest('[data-zoom-trigger]');
      if (!button) return;

      const img = button.querySelector('img');
      if (!img) return;

      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || '';

      if (src) {
        setZoomedImage({ src, alt });
      }
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (!zoomedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={() => setZoomedImage(null)}
    >
      <img
        src={zoomedImage.src}
        alt={zoomedImage.alt}
        className="max-w-full max-h-full rounded-lg shadow-2xl"
      />
    </div>
  );
}

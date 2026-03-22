// app/lib/imageUtils.js
const BASE_URL = 'http://69.62.84.113:5025';

// ✅ Clearly different fallback so you can tell it apart from real images
export const FALLBACK_IMAGE = 'https://placehold.co/800x600/1e1b4b/ffffff?text=No+Image';

export const getImageUrl = (imagePath) => {
  if (!imagePath || imagePath === 'null' || imagePath === 'undefined' || imagePath.trim() === '') {
    return FALLBACK_IMAGE;
  }
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const cleanPath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  if (cleanPath.startsWith('uploads/')) {
    return `${BASE_URL}/${cleanPath}`;
  }
  return `${BASE_URL}/uploads/${cleanPath}`;
};


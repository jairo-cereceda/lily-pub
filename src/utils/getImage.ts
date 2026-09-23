import type { ImageMetadata } from 'astro';

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpeg,jpg,png,gif,webp}'
);

export async function getImageMetadata(imgSrc: string) {
  const imagePath = `/src/assets/${imgSrc}`;

  if (!allImages[imagePath]) {
    throw new Error(`"${imagePath}" no existe en "src/assets/".`);
  }

  const imageModule = await allImages[imagePath]();

  return imageModule.default;
}

export async function preloadImages(imageUrls) {
  return Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {
    console.log('preload', url);
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  })));
}
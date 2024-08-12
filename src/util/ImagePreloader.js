export async function preloadImages(imageUrls, onProgress) {
  let numLoaded = 0;
  return Promise.all(imageUrls.map(url => new Promise((resolve, reject) => {
    console.log('preload', url);
    const image = new Image();
    image.src = url;
    image.onload = () => {
      numLoaded++;
      if (onProgress) {
        onProgress(numLoaded);
      }
      resolve();
    };
    image.onerror = reject;
  })));
}
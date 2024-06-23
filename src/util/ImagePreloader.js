export const preloadImages = (imageUrls) => {
  imageUrls.forEach(imageUrl => {
    console.log('preload', imageUrl);
    const image = new Image();
    image.src = imageUrl;
  });
}
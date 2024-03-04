function showImage(imageUrl) {
  const preview = document.getElementById('preview');
  const zoomedImg = document.getElementById('zoomed-img');

  zoomedImg.src = imageUrl;
  preview.style.display = 'flex';
}

function hideImage() {
  const preview = document.getElementById('preview');
  preview.style.display = 'none';
}
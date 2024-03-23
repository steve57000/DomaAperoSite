const carouselImages = document.querySelectorAll('.carousel-image');
let index = 0;

function showImage() {
  carouselImages.forEach(img => img.style.display = 'none');
  carouselImages[index].style.display = 'block';
}

function nextSlide() {
  index = (index + 1) % carouselImages.length;
  showImage();
}

function prevSlide() {
  index = (index - 1 + carouselImages.length) % carouselImages.length;
  showImage();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showImage(); // Afficher la première image au chargement de la page

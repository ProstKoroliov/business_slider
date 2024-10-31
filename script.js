
let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');
const totalImages = images.length;


function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });


  const textContainers = document.querySelectorAll('.strategy, .empaty, .trigger, .context, .analytics');
  textContainers.forEach((container, i) => {
    container.style.opacity = (i === index) ? 1 : 0;
  });
}


showImage(currentIndex);

document.getElementById('left').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
  showImage(currentIndex);
});

document.getElementById('right').addEventListener('click', () => {
  currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});

const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const cursorImagePrev = leftButton.querySelector('.slider-left');
const cursorImageNext = rightButton.querySelector('.slider-right');

leftButton.addEventListener('mouseenter', () => {
  cursorImagePrev.src = 'images/cursor_left_active.svg';
});

leftButton.addEventListener('mouseleave', () => {
  cursorImagePrev.src = 'images/cursor_left.svg';
});

rightButton.addEventListener('mouseenter', () => {
  cursorImageNext.src = 'images/cursor_right_active.svg';
});

rightButton.addEventListener('mouseleave', () => {
  cursorImageNext.src = 'images/cursor_right.svg';
});
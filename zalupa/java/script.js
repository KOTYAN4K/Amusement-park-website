'use strict'

const sliderBox = document.querySelector('.slider-container');
const slides = sliderBox.querySelectorAll('.slider-item');
const btnPrev = sliderBox.querySelector('.slider-btn--prev');
const btnNext = sliderBox.querySelector('.slider-btn--next');


let counter = 0;

if (btnNext) {
  btnNext.addEventListener('click', function () {
    if (counter >= slides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slides[counter].classList.toggle('slider-item__active');
    slides[counter].classList.add('slide_right');
    counter++;
    if (counter >= slides.length) {
      counter = 0;
    }
    slides[counter].classList.toggle('slider-item__active');
    slides[counter].classList.remove('slide_left');
    counter++;
    if (counter >= slides.length) {
      counter = 0;
    }
    slides[counter].classList.add('slide_left');
    slides[counter].classList.remove('slide_right');
    counter--;
  });
}

if (btnPrev) {
  btnPrev.addEventListener('click', function () {
    if (counter >= slides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slides[counter].classList.toggle('slider-item__active');
    slides[counter].classList.add('slide_left');
    counter--;
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slides[counter].classList.toggle('slider-item__active');
    slides[counter].classList.remove('slide_right');
    counter--;
    if (counter < 0) {
      counter = slides.length - 1;
    }
    slides[counter].classList.add('slide_right');
    slides[counter].classList.remove('slide_left');
    counter++
  });
}

'use strict'

const sliderBox = document.querySelector('.slider-container');
const slides = sliderBox.querySelectorAll('.slider-item');
const btnPrev = sliderBox.querySelector('.slider-btn--prev');
const btnNext = sliderBox.querySelector('.slider-btn--next');

let counterf = 0;
console.log(1);

if (btnNext) {
  btnNext.addEventListener('click', function () {
    if (counterf >= slides.length) {
      counterf = 0;
    }
    if (counterf < 0) {
      counterf = slides.length - 1;
    }
    slides[counterf].classList.toggle('slider-item__active');
    slides[counterf].classList.add('slide_right');
    counterf++;
    if (counterf >= slides.length) {
      counterf = 0;
    }
    slides[counterf].classList.toggle('slider-item__active');
    slides[counterf].classList.remove('slide_left');
    counterf++;
    if (counterf >= slides.length) {
      counterf = 0;
    }
    slides[counterf].classList.add('slide_left');
    slides[counterf].classList.remove('slide_right');
    counterf--;
  });
}

if (btnPrev) {
  btnPrev.addEventListener('click', function () {
    if (counterf >= slides.length) {
      counterf = 0;
    }
    if (counterf < 0) {
      counterf = slides.length - 1;
    }
    slides[counterf].classList.toggle('slider-item__active');
    slides[counterf].classList.add('slide_left');
    counterf--;
    if (counterf < 0) {
      counterf = slides.length - 1;
    }
    slides[counterf].classList.toggle('slider-item__active');
    slides[counterf].classList.remove('slide_right');
    counterf--;
    if (counterf < 0) {
      counterf = slides.length - 1;
    }
    slides[counterf].classList.add('slide_right');
    slides[counterf].classList.remove('slide_left');
    counterf++
  });
}

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
   // при прокрутке содержимого страницы
   window.addEventListener('scroll', () => {
            // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 900 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();


const openButton = document.querySelectorAll('.answers-list-block-plus')
const answer = document.querySelectorAll('.answers-list-block-answer')

const textShow = 'answers-list-block-answer-show'
const minus = 'answers-list-block-minus'
const plus = 'answers-list-block-plus'

let number = 0
let status = 0

for (let i = 0; i < 5; i++) {
	number = i
	openButton[i].addEventListener('click', function(){
		if (status == 0) {
			answer[i].classList.add(textShow)
			openButton[i].classList.remove(plus)
			openButton[i].classList.add(minus)
			status = 1
		}

		else if (status == 1) {
			answer[i].classList.remove(textShow)
			openButton[i].classList.add(plus)
			openButton[i].classList.remove(minus)
			status = 0
		}
	})
}


let links = document.querySelectorAll(".link");
let infos = document.querySelectorAll(".info");

console.log(infos);
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(evt){
        evt.preventDefault();
        infos[i].removeAttribute("hidden");
    } 
}
for(let info of infos){
    document.addEventListener('mouseup', function(e){
        if (!e.target.closest(".info")) {
            info.setAttribute("hidden", "hidden");
        }
    });
}



//паралакс

function parallax(){
  var tie = document.getElementById('tie');
  var deathstar = document.getElementById('deathstar');
  

  tie.style.top = (window.pageYOffset / 3) + 'px';
  tie.style.left = -(window.pageYOffset / 2) + 'px';
  deathstar.style.top = ( 1000 - window.pageYOffset) + 'px';
  //deathstar.style.left = (-1700 + window.pageYOffset) + 'px';
}

window.addEventListener("scroll", parallax, false);
const sliderList = document.querySelectorAll('.reviews-list')
const sliderPage = document.querySelectorAll('.reviews-slider-page')

const buttonBack = document.querySelector('.reviews-slider-left-button')
const buttonNext = document.querySelector('.reviews-slider-right-button')

const hideList = 'reviews-list-hide'
const activePage = 'reviews-slider-page-active'

let counter = 0

buttonNext.addEventListener('click', function(){
	if (counter == 0){
		sliderList[counter].classList.add(hideList)
		sliderPage[counter].classList.remove(activePage)
		counter++
		sliderList[counter].classList.remove(hideList)
		sliderPage[counter].classList.add(activePage)
	}

	else if (counter == 1){
		sliderList[counter].classList.add(hideList)
		sliderPage[counter].classList.remove(activePage)
		counter--
		sliderList[counter].classList.remove(hideList)
		sliderPage[counter].classList.add(activePage)
	}
})

buttonBack.addEventListener('click', function(){
	if (counter == 0){
		sliderList[counter].classList.add(hideList)
		sliderPage[counter].classList.remove(activePage)
		counter++
		sliderList[counter].classList.remove(hideList)
		sliderPage[counter].classList.add(activePage)
	}

	else if (counter == 1){
		sliderList[counter].classList.add(hideList)
		sliderPage[counter].classList.remove(activePage)
		counter--
		sliderList[counter].classList.remove(hideList)
		sliderPage[counter].classList.add(activePage)
	}
})
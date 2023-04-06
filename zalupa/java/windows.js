const windowBlock = document.querySelector('.window-block')
const windowScreen = document.querySelector('.window')
const showButton = document.querySelectorAll('.courses-list-block-more')

const submitButton = document.querySelector('.window-block-button')
const errorBlock = document.querySelector('.error')

const showWindow = 'window-show'
const showBlock = 'window-block-anim'
const errorHide = 'error-hiden'

for (let i = 0; i < 9; i++){
	showButton[i].addEventListener('click', function(){
		windowScreen.classList.add(showWindow)
		windowBlock.classList.add(showBlock)
	})
}

submitButton.addEventListener('click', function(){
	windowScreen.classList.remove(showWindow)
	windowBlock.classList.remove(showBlock)
	errorBlock.classList.remove(errorHide);
	setTimeout(
	  	() => {
	    	errorBlock.classList.add(errorHide);
	  	},
  		4 * 1000
	);
})
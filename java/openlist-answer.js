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
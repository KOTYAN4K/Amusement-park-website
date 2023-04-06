const moreButton = document.querySelector('.courses-more')
const list = document.querySelector('.courses-list')
const showList = 'courses-list-show'
const hideButton = 'courses-more-hide'

moreButton.addEventListener('click', function(){
	list.classList.add(showList)
	moreButton.classList.add(hideButton)
})
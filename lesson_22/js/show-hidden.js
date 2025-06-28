`use strict`

const button = document.querySelector(`#button`)
const content = document.querySelector(`#content`)

// Простий метод

button.addEventListener(`click`, function(){
	console.log(`click!!!`)
	content.classList.toggle(`text-hidden`)

	if(content.classList.contains(`text-hidden`)){
		button.textContent = `Відкрити блок`
	} else {
		button.textContent = `Закрити блок`
	}
})

// Швидкий метод

/*button.addEventListener(`click`, function(){
	console.log(`click!!!`)

	if(content.classList.toggle(`text-hidden`)){
		button.textContent = `Відкрити блок`
	} else {
		button.textContent = `Закрити блок`
	}
})*/
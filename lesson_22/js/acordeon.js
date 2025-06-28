`use strict`

console.log(`hello acord`)
const header = document.querySelectorAll(`[data-name='acordeon-title']`)
// console.log(header)

header.forEach(function(item){
	// console.log(item)
	item.addEventListener(`click`, function(){
		//console.log(this)
		//console.log(this.nextElementSibling)
		this.nextElementSibling.classList.toggle(`hidden`)
	})
})
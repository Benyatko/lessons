`use strict`
console.log(`click!!!!!`)

const tabsHeader = document.querySelectorAll(`[data-tab]`)
console.log(tabsHeader)

tabsHeader.forEach(function (item) {
	item.addEventListener(`click`, function (){
		console.log(`tab click!!!`)
		console.log(this)
	})
})
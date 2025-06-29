// Сучасний (Строгий) режим
"use strict"

// Приорітетність операторів
// let result = 2 + 3 * 10 / `5`
// 1.
//let result = 2 + 3 * 10 / 5
// 2.
//let result = 2 + 30 / 5
// 3.
//let result = 2 + 6
// 4.
//let result = 8
// console.log(result)

// let num = 5
// let results = 2 + 3 * 10 / ++num
// 1.
//let results = 2 + 3 * 10 / 6
// 2.
//let results = 2 + 30 / 6
// 3.
//let results = 2 + 5
// 4.
//let results = 7
// console.log(results)

// Оператори порівняння
// Повертають булеве значення true / false
// < > <= >=
// == != // змінюють тип даних
// === !== // НЕ змінюють тип даних
/*
let result = 11.9 < 12
console.log(typeof result)
console.log(result)
*/

// let result = 5 == "5"
// 1.
//let result = 5 == 5
// 2.
//let result = true
// console.log(result)

// let result = 5 != "5"
// 1.
// let result = 5 != 5
// 2.
//  let result = false
// console.log(typeof result)
// console.log(result)

// Порівнює як воно є без зміни типу даних
// let result = 5 === "5"
// 1.
// let result = false
// console.log(result)

// let result = 5 !== "5"
// console.log(result)

/*
let a = 5
let b = "5"

// ....code...
// ....code...
// ....code...

let result = a === b
console.log(result)
console.log(typeof a)
console.log(a)
console.log(typeof b)
console.log(b)
*/

// Оператор присвоєння =
// let someNum = 5

// Логічні оператори
// ! || &&

// Оператор "ні" ! (унарний)
// !операнд

// let result = !0
// 1. зміна типу даних в булінан
// 2. отримання результату true або false операнду
// let result = false
// 3. зміна булєвого значення на протележне
// let result = true

// console.log(typeof result)
// console.log(result)

/*
if (!хліб) {
	йдемо в магаз...
} else {
	не йдемо в магаз...
}
*/

// Оператор "або" || (хоча б один true)
// операнд №1 || операнд №2
// 1. зміна типу даних на булінан
// 2. отримання результату
//		true або false операнда №1
// 3. якщо результат кроку 2 true, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення true
// 4. якщо результат кроку 2 false
//		отримання результату
//		true або false операнда №2
// 4.1 якщо результат кроку 4 true
// 	результатом операції буде значення операдна №2
// 	та булеве значення true
// 5. якщо результат кроку 4 false
// 	результатом операції буде значення операдна №2
// 	та булеве значення false

// let someVar
/*
let result = 50 || 12
console.log(result) // Значення, яке потрапляє в змінну
console.log(Boolean(result)) // Булеве значення операції
*/

// Оператор "та" && (обидва true)
// операнд №1 && операнд №2
// 1. зміна типу даних на булінан
// 2. отримання результату
//		true або false операнда №1
// 3. якщо результат кроку 2 false, завершуємо дію
// 3.1 результатом операції буде значення операдна №1
// 	та булеве значення false
// 4. якщо результат кроку 2 true
//		отримання результату
//		true або false операнда №2
// 4.1 якщо результат кроку 4 false
//		результатом операції буде значення операдна №2
//		та булеве значення false
// 5. якщо результат кроку 2 та 4 true
//		результатом операції буде значення операдна №2
//		та булеве значення true
/*
let result = "Жека" && 123
console.log(result)
console.log(Boolean(result))
*/

// Умовне вітвлення
// Синтаксис
/*
if (умова #1) {
	// Код, який виконоється
	// тільки якщо умова #1 вертає true
} else if (умова #2) {
	// Код, який виконоється
	// тільки якщо умова #2 вертає true,
	// а умова №1 false
}else {
	// Код, який виконоється
	// тільки якщо умова #2 вертає false,
	// та умова №1 false
}
// продовження коду ...
*/
/*
let varOne = 15
let varTwo = 25
*/
// Конструкція if переводить тип даних в boolean
/*
if (varOne >= varTwo) { // Чи varOne true?
	// Виконуємо якщо так
	console.log("Працює!")
}
*/
/*
if (varOne > varTwo) { // Чи true (правда) що varOne більше за varTwo?
	console.log(`${varOne} більше ніж ${varTwo}`)
} else if (varOne === 10) {// Чи true (правда) що varOne дорівнює 10?
	console.log(`varOne дорівнює 10`)
	// Може бути безліч "else if"
} else if (varTwo === 20) {// Чи true (правда) що varTwo дорівнює 20?
	console.log(`varTwo дорівнює 20`)
} else {// Виконуємо якщо усі попередні умови повернули false
	console.log(`Все пропало...`)
}

// продовження коду ...
console.log('продовження коду ...')
*/

/*
let varOne = "1"
let varTwo = 3
let varThree = 3
let varFour = 4

if (varTwo !== 3 || varOne < 3 && varThree < 4 || varFour > 6) {
	// Код виконоється
	// тільки якщо умова вертає true
	console.log('Умова true')
}

// продовження коду ...
console.log('продовження коду ...')
*/
// Крок №1 (Пріорітет у операторів порівняння)
// if (false || true && true || false){}

// Крок №2 (Пріорітет у оператора &&)
//if (false || true || false) {}

// Крок №3
// if (true) {}


// Оператор умови ? (Тернарна умовна операція)

// Тернарна (від лат. tri — «три») операція — операція,
// що має 3 операнда.
// Наприклад: Тернарна умовна операція в інформатиці.

// Синтаксис
// умова ? значення якщо умова true : значення якщо умова false

/*
let someVar = 10 < 5 ? "Це правда" : "Це брехня"
console.log(someVar)
*/
// Або
/*
let someVar
if (10 < 5) {
	someVar = "Це правда"
} else {
	someVar = "Це брехня"
}
console.log(someVar)
*/

// Приклади з ?

// const userAge = 41
// const userType = userAge > 40 ? "Старий" : "Ще побігає"

// або
/*
let userType
if (userAge > 40) {
	userType = "Старий"
} else {
	userType = "Ще побігає"
}
*/
// console.log(userType)

// Умова в результаті умови
/*
const userAge = 41
const userType = userAge > 40 ? "Старий" : userAge <= 16 ? "Шмаркач" : "Ще побігає"
console.log(userType)
*/

// Гарний приклад порівняння

/*
let someVar = 100
let result
*/

// Варіант №1
// if (someVar) {
// 	result = someVar
// } else {
// 	result = 500
// }

// Варіант №2
// result = someVar ? someVar : 500

// Варіант №3
// result = someVar || 500
// console.log(result)


/*
const item = document.querySelector('.some-class')
if (item) {
	const animateSpeed = +item.dataset.speed || 500
	console.log(animateSpeed)
}
*/



// Цикл For
// Синтаксис
/*
for(початок; умова закінчення циклу; крок){
	// код виконується
	// на кожному колі циклу
}*/

/*
let someString = "Привіт! Як справи?"
console.log(someString.length)
*/
/*

console.log(someString[0])
console.log(someString[1])
console.log(someString[2])
console.log(someString[3])
console.log(someString[4])
console.log(someString[5])
console.log(someString[6])
*/
// ...


// Вивести окремо кожен символ рядка someString
/*
for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i])
}
*/
// ....

// Масиви
/*
let someArray = []
console.log(typeof someArray)
console.log(someArray)
*/
/*
let someArray = [10, "Жека", true, "Привіт!"]
console.log(someArray)
console.log(someArray.length)
console.log(someArray[1])
*/

// Чи це масив. Array.isArray(тут пишемо змінну)
/*
let someArray = []
console.log(Array.isArray(someArray))
if (Array.isArray(someArray)) {
	// якщо someArray це масив
	// працюємо...
} else {
	// якщо ні...
}
*/
/*
let someArray = [10, "Жека", true, "Привіт!"]
for (let i = 0; i < someArray.length; ++i) {
	if (someArray[i] > 5) {
		console.log(`Число ${someArray[i]} більше 5`)
	}
}
*/


// let someArray = [10, "Жека", true, "Привіт!"]
// Метод перебору масиву
// масив.forEach(змінна яка отримає значення елементу масива => {});
/*
someArray.forEach((item, index) => {
	console.log(index)
	console.log(item)
})
*/

// Додати елемент в масив
// push додає елемент кінець масиву
/*
let usersNames = ["Вася", "Петро", "Ілдика"]
console.log(usersNames)
usersNames.push("Жека")
console.log(usersNames)
*/

// includes Чи є елемент в масиві (пошук елемента)
/*
let usersNames = ["Вася", "Петро", "Ілдика"]
console.log(usersNames.includes("Петро"))
console.log(usersNames.includes(20))
*/

// якщо в масиві usersNames НЕМАЄ значення 10,
// то додати
// let usersNames = ["Вася", "Петро", "Ілдика", 20]
/*
if (!usersNames.includes(10)) {
	usersNames.push(10)
}*/
// Або
// !usersNames.includes(10) ? usersNames.push(10) : null
// console.log(usersNames)

// З масива у рядок
/*
let usersNames = ["Вася", "Петро", "Ілдика"]
let usersNamesString = usersNames.join(', ')
console.log(typeof usersNamesString)
console.log(usersNamesString)
*/

// Об'єкти
/*
const someObject = {}
console.log(typeof someObject)
console.log(someObject)
*/
/*
const user = {
	age: 40,
	name: "Жека"
}
console.log(user)
console.log(user.age)
conole.log(user.name)
*/
/*
const someStyles = {
	color: "green",
	["font-size"]: 25
}
console.log(someStyles["font-size"])
console.log(someStyles.color)

// Зміна значення елементу об'єкту
someStyles["font-size"] = 50
console.table(someStyles)
*/

// Функції
/*
Використовується для запуску
коду який повторюється,
та для використання методу функціонального
програмування (кожну дію варто помістити в окрему функцію)
*/

// Об'ява функції
// Синтаксис
/*
function ім'я(параметри){
	// тіло функції (код функції)
}
*/
/*
Назви функцій формуються за
тими ж правилами що й назви змінних

Наприклад, функції, починаючі с
"show..." зазвичай щось показують,
"get..." – повертають значення,
"calc..." – обчислення,
"create..." – щось створюють,
"check..." – щось перевіряють і повертають логічно
значення, і т.д.
*/
// Приклади імен
/*
showMessage
getOptions
calcSum
*/

// Виклик (запуск) функції
/*
showMessage()

function showMessage() {
	console.log('я текст!')
}

showMessage()
// ...
showMessage()
// ...
showMessage()
// ...
showMessage()
*/


// Параметри функції
/*
function showMessage(someText = "Текст за замовченням") {
	console.log(someText)
}

showMessage()
// .....
// .....
// .....
// .....
showMessage("Моє повідомлення")
*/

/*
const numOne = 10
const numTwo = 20
*/

//function calcSum(someArray) {
//function calcSum(a = 0, b = 0) {
//console.log(a + b)
//console.log(parseFloat(someArray[2]) + parseFloat(someArray[4]))
//}

//const someArray = [10, 20, 30, 40, 50]

//calcSum(someArray)
/*
calcSum()
calcSum(numOne)
calcSum(numOne, numTwo, 123)
calcSum(50, "10")
*/

// Поовернення результату
// return - повертає результат функції
/*
const numOne = 10
const numTwo = 20

function calcSum(a = 0, b = 0) {
	return a + b
}
function showMessage(someText = "Текст за замовченням") {
	console.log(someText)
}

showMessage(calcSum(numOne, numTwo))

const someVar = calcSum(numOne, numTwo)

showMessage(someVar)
*/

// Стрілочні функції
// Звичайна функція
/*
function someName(text) {
	console.log(text)
}*/

// Стрілочна функція в один рядок
// let someName = (text) => console.log(text)

// Функція де більше рядків
/*
let someName = (text) => {
	console.log(text)
	// ....
	// ....
	// ....
}*/

/*
let someFunc
// ....
if (10 > 5) {
	someFunc = () => console.log('123')
}
// ...
someFunc()
*/

// Завдання
// Текст з ефектом друку
/*
const text = "Привіт! Ще текст!"
function initText(text) {
	let template = ``
	for (let i = 0; i < text.length; ++i) {
		const item = text[i]
		template +=
			`<span style="${item === ' ' ? `display:inline;` : ""}animation-delay: ${i * 0.1}s">${item}</span>`
	}
	return template
}

goToViewport(initText(text))

// Вивід у в'юпорт
function goToViewport(code) {
	const magic = document.querySelector('.magic')
	magic.insertAdjacentHTML("beforeend", code)
}
*/

// Налаштування вмикає можливість
// редагувати текст прямо в в'юпорті
// document.designMode = "on"

// let someVar = 0
// ++someVar
// if (someVar) {
// 	console.log(someVar)
// }

// let someVar
// let result
// if (someVar){
// 	result = someVar
// }else{
// 	result = 500
// }
// console.log(result) */


/*================================================================================== */
// for (let i = 1; i <= 10; ++i) {
// 	console.log(`пункт №${i}`);
//  }

// let someArray = [0, `1`, 2, `привіт`, 4, 5, 6, 7, 8, 9, 10]
// 	for(let i = 0; i < someArray.length; ++i){
// 	if (someArray[i] === 10) {
// 		console.log('у масиві є число 10')
// 	}
//  }

//  const numOne = 10
//  const numTwo = 30
//  function calcDivide (a, b){
// 	return a / b
//  }
//  function showMessage(someText = `довільний текст`){
// 	console.log(someText)
//  }
// //  showMessage(calcDivide(numOne, numTwo))
//  const someVar = calcDivide(numOne, numTwo)
//  showMessage(`Результат ділення - ${someVar}`)


//  const numOne = 20
//  const numTwo = 20
// function sDivide(a = 0, b = 1) {
// 	if (typeof a !== 'number' || typeof b !== 'number') {
// 	  return "не вірні вхідні дані";
// 	}
// 	if (b === 0) {
// 	  return "ділення на 0 не можливе";
// 	}
// 	return `${a / b}`;
//  }
//  function showMessage(someText = `за замовченням`){
// 	console.log(someText)
// }
//   const someVar = sDivide(numOne, numTwo)
//  showMessage(`Результат ділення - ${someVar}`)



// console.log(`start`)
// for (let i = 0; i < 11; ++i) {
// 	console.log(`number ` + i)
// }
// console.log(`finish`)
// let nameArray = [`Andrii`, `Mike`, `Antony`, `John`]
// console.log(nameArray.length)
// for (let i = 0; i < nameArray.length; ++i) {
// 	console.log(nameArray[i])
// }


// function calcDivide(x, y){
// 	let result = x / y
// 	return(result)
// }
// let example = calcDivide(30, 15)
// console.log(example)


// function calcMult(x, y){
// 	let result = x * y
// 	return(result)
// }
// let example2 = calcMult(20, 40)
// 	console.log(example2)


// function calcMinus(x, y){
// 	let result = x - y
// 	return(result)
// }
// let example3 = calcMinus(10, 5)
// console.log(example3)

// let example4 = calcMult(calcMinus(500, 450), calcDivide(100, 2))
// console.log(example4)




// const andrii = {
// 	name: `Andrii`,
// 	age: 37,
// 	speciality: `web-developer`,
// 	city: `Brody`,
// 	sayHi: function(name, age, spec, city){
// 		console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років, я із міста ${this.city}`)
// 	}
// }
// andrii.sayHi()

// function Person(name, age, spec, city){
// 	this.name = name;
// 	this.age = age;
// 	this.spec = spec;
// 	this.city = city;
// 	this.sayHi = function(name, age, spec, city){
// 		console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років, я із міста ${this.city}`)
// 	}
// }
// const mykola = new Person(`Mykola`, 33, `qi ingenier`, `Lviv`)
// console.log(mykola)

// const olena = new Person(`Olena`, 25, `bloger`, `Kyiv`)
// console.log(olena)

// console.log(andrii)

// console.log(andrii)

// function sayHi(name, age, spec, city){
// 	console.log(`Привіт, мене звати ${name}, мені ${age} років, я із міста ${city}`)
// }

// sayHi(andrii.name, andrii.age, andrii.speciality, andrii.city)

// class Person{
// 	constructor(name, age, spec, city){
// 		this.name = name;
// 		this.age = age;
// 		this.spec = spec;
// 		this.city = city;
// 	}
// 	sayHi(){
// 		console.log(`Привіт, мене звати ${this.name}, мені ${this.age} років, я із міста ${this.city}`)
// }
// }
// const olena = new Person(`Olena`, 25, `bloger`, `Kyiv`)
// console.log(olena)

// let userName = [`andrii`, 20, `mykola`, `ivan`]
// !userName.includes(10) ? userName.push(10) : null
// console.log(userName)

// let someNames = [`andy`, `vasyl`, `robert`]
// let someString = someNames.join(', ')
// // console.log(typeof someString)
// console.log(someString)
/*========================================================================*/ 

// ============== ПРАКТИКА ==============================
// const button = document.querySelector(`#button`)
// const content = document.querySelector(`#content`)



// Простий метод

/*button.addEventListener(`click`, function(){
	console.log(`click!!!`)
	content.classList.toggle(`text-hidden`)

	if(content.classList.contains(`text-hidden`)){
		button.textContent = `Відкрити блок`
	} else {
		button.textContent = `Закрити блок`
	}
})*/

// Швидкий метод

/*button.addEventListener(`click`, function(){
	console.log(`click!!!`)

	if(content.classList.toggle(`text-hidden`)){
		button.textContent = `Відкрити блок`
	} else {
		button.textContent = `Закрити блок`
	}
})*/
/*========================================================================*/ 


// !Задача №4  -- РІШЕННя

/*function returnResult(x = 0, y = 0){
	if(isNaN(x / y)){
		return `Результат NaN`
	}
	if(!isFinite(x / y)){
		return `Результат Infinity`
	}
	return `Результат ділення: ${x / y}`
}
console.log(returnResult(1, 2))*/

// !Отримання ширини вікна (в'юпорта)
/*const windowWidth = window.innerWidth
console.log(typeof windowWidth)
console.log(windowWidth)*/

// !Отримання висоти вікна (в'юпорта)
/*const windowHeight = window.innerHeight
console.log(typeof windowHeight)
console.log(windowHeight)*/

//Дані про браузер
//console.log(navigator.userAgent)
// який у нас браузер
/*const userAgent = navigator.userAgent
 if(userAgent.includes(`Chrome`)){
	console.log(`Браузер ХРОМ`)
 } else if (userAgent.includes(`firefox`)){
	console.log(`браузер мозіла фокс`)
 }*/

//!інформація про систему
/*
console.log(navigator.userAgentData)
console.log(navigator.userAgentData.mobile)
console.log(navigator.userAgentData.platform)
*/

// !Location
// Адресний рядок браузера

// console.log(location)
// console.log(location.href)
// console.log(location.hash)

// перенаправлення користувача
// console.log(location.href)
// location.href += `contacts.html`

// !Повідомлення

// alert(`Повідомлення !!!`)

// Підтвердження Confirm
/*const confirmAnswer = confirm(`Запитання`)
console.log(confirmAnswer)

if (confirmAnswer){
	// if yes
} else {
	// if no
}*/

//confirmAnswer ? якщо так : якщо ні

//!Prompt
/*const promptAnswer = prompt(`запитання`)
console.log(promptAnswer)

if (promptAnswer === null){
	console.log(`юзер натиснув cancel`)
} else if (promptAnswer) {
	console.log(`Відповідь користувача: ${promptAnswer}`)
} else {
	console.log(`Користувач не надав відповідь`)
}*/

// !Document Object Model (DOM) - обєктна модель документу

// Навігація по документу

// Навігація до тегу HTML
// const htmlElement = document.documentElement
// console.log(htmlElement)

// Навігація до тегу HEAD
// const headElement = document.head
// console.log(headElement)

// Навігація до тегу BODY
// const bodyElement = document.body
// console.log(bodyElement)

// !Перший та останній дочірній елемент
// const bodyElement = document.body
// const firstBodyChild = bodyElement.firstElementChild
// const lastBodyChild = bodyElement.lastElementChild
// console.log(firstBodyChild)
// console.log(lastBodyChild)

// Усі дочірні елементи (КОЛЕКЦІя)
//const bodyElement = document.body
// Колекція дочірніх елементів
//const childNodes = bodyElement.children

//console.log(childNodes)

// for .. of метод перебору для колекцій
//for (let childNode of childNodes){
//	console.log(childNodes)}

// const bodyElement = document.querySelector(`body`)
// console.log(bodyElement)


// const liElement = document.querySelector(`li`)
// // Чи щось знайдено?
// if (liElement){
// 	//тоді працюємо
// 	console.log(`працює`)
// 	liElement.style.color = `blue`
// 	//...
// 	//...
// 	//...
// }

// !отримання списку (статична колекція)
// знайдених обєктів
// const liElements = document.querySelectorAll(`li`)
// console.log(liElements)
// console.log(liElements.length)

//if (liElements.length){ // !!!! перевіряємо саме length при querySelectorAll
// тоді працюємо...
//liElements.forEach((liElement, index) => {
//console.log(liElement)
//})
//}

// !Навігаія до батьківських та сусідніх елементів
// const activeElement = document.querySelector(`.item__active`)
// if (activeElement){
// 	const activeElementPreviousSibling = activeElement.previousElementSibling
// 	const activeElementNextSibling = activeElement.nextElementSibling
// 	console.log(activeElementPreviousSibling)
// 	console.log(activeElementNextSibling)
// }

// Отримання батьківського обєкту
// const listElement = document.querySelector(`.list`)
// if(listElement){
// 	const parentElement = listElement.parentElement
// 	console.log(parentElement)
// }

// Closest - пошук найближчого батьківського
// const listItem = document.querySelector(`.list__item`)
// if (listItem){
// 	console.log(listItem)
// const parentElement = listItem.closest(`.active`)
// console.log(parentElement)
// if (parentElement){
// 	console.log(`Знайдено !`)
// } else {
// 	console.log(`НЕ ЗНАЙДЕНО`)
// }
// }

	// !Зміна документу
// const listItems = document.querySelectorAll(`.list__item`)
// if (listItems.length){
// 	listItems.forEach((listItem, index) => {
// 		listItem.innerHTML = `<span> Привіт1 № ${index}</span>`
// 	})
// }

// !textContent - дає змогу отримати текст в середині обєкту
// також дозволяє перезаписувати текст в середині обєкту
// const listItems = document.querySelectorAll(`.list__item`)
// if (listItems.length){
// 	listItems.forEach(listItem => {
// 		listItem.textContent = 'Привіт !!!'
// 	})
// }

// !Створення обєктів
//let newElement = document.createElement(`div`) // тут тільки тег
//newElement.innerHTML = `<span>Привіт !!!</span>`
//console.log(newElement)

//const page = document.querySelector(`.page`)
//if(page){

	//вставка створеного обєкту
	// перед
	//page.before(newElement)
	//після
	//page.after(newElement)
	// всередину на початок
	//page.prepend(newElement)
	// всередину в кінець
	//page.append(newElement)
//}

// ! insertAdjacentHTML/Text/Element

//const page = document.querySelector(`.page`)

//let template = ``
//template += `<div class='block'>`
//if (page){
//	template += `<span>Сторінка існує!</span>`
//}
//template  += `</div>`

//console.log(template)

//page.insertAdjacentHTML('afterend', template)
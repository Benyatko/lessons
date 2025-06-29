`use strict`
// Домашня робота Урок №23

// 1. Отримати в константу елемент <body>

const bodyElement = document.body

// 2. Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
function addListToBody(count = 3) {
	const ul = document.createElement('ul');

	for (let i = 1; i <= count; i++) {
	  const li = document.createElement('li');
	  li.textContent = `Елемент ${i}`;
	  ul.appendChild(li);
	}
 
	document.body.appendChild(ul);
 }
 
 // 3. Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тексту зедлений

const addClass = document.body
addClass.className += `loaded`
console.log(addClass)
if (addClass){
	addClass.style.color = `green`
} else {
	console.log(`клас незнайдено !`)
}

// 4. Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
  item.classList.add('active');
  item.textContent = `Елемент №${index + 1}`;
});


// 5. Дано в html: текст, далі кнопка з класом button. Треба прокрутити скрол сторінки до кнопки

const btnToScroll = document.querySelector('.button')
if (btnToScroll) {
  btnToScroll.scrollIntoView({
    block: "center",
    inline: "end",
    behavior: "smooth",
  })
}


// 6.
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector('.link');

// Додаємо data-атрибут зі значенням 100
link.setAttribute('data-value', '100');

// Отримуємо значення атрибуту
const value = parseInt(link.getAttribute('data-value'), 10);

// Перевіряємо умову і змінюємо колір тексту
if (value < 200) {
  link.style.color = 'red';
}
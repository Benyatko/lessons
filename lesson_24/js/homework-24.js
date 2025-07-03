`use strict`

//! Домашня робота № 24

// !Задача №1
//Дано в html: три елементи з класом item.
//При кліку на кожен з елментів додати клас active,
//при повторному кліку прибрати клас
/*
document.addEventListener(`click`, documentAction)

function documentAction(e) {
const targetElement = e.target

if (targetElement.closest('.item')){
	const currentElement = targetElement.closest(`.item`)
	changeClass(currentElement)
	}
}

function changeClass(element){
	element.classList.toggle(`active`)
}*/


// !Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

// window.addEventListener("load", pageLoaded);
// function pageLoaded(e) {
// 	document.body.classList.add('change');
// }

// !Задача №3
//  Дано в html: header main footer
//  При наведенні курсору на header змінювати колір фону у footer.
//  Коли курсор йде з header повертати початковий фон для footer.


 //   *** НЕ ВІРНО ***
// document.addEventListener("mouseenter", documentAction);
// document.addEventListener("mouseleave", documentAction);

// const targetElement = e.target;
//   console.log(targetElement);
//   if (targetElement.closest('.header')) {
// 	document.footer.classList.add('change')
//  } else {
// 	document.footer.classList.remove('change')
//  }

 //=============================================================================================//
//    *** ВІРНО ***
// const header = document.querySelector('header');
// const footer = document.querySelector('footer');

// // Колір при наведенні
// header.addEventListener('mouseenter', () => {
//   footer.style.backgroundColor = 'lightblue';
// });

// // Повернення початкового кольору
// header.addEventListener('mouseleave', () => {
//   footer.style.backgroundColor = 'lightgray';
// });



// ! Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// const item = document.querySelector('.item');
// let started = false; // прапорець, щоб запуск не відбувався повторно

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && !started) {
//       started = true;
//       startCounting(item);
//       observer.unobserve(item); // прибираємо спостереження після запуску
//     }
//   });
// }, {
//   threshold: 0.5 // елемент має бути хоча б на 50% в полі зору
// });

// observer.observe(item);

// function startCounting(element) {
//   const delay = parseInt(element.dataset.delay) || 1000;
//   const max = parseInt(element.dataset.max) || 10;
//   let count = 1;

//   const interval = setInterval(() => {
//     element.textContent = count;
//     count++;
//     if (count > max) {
//       clearInterval(interval);
//     }
//   }, delay);
// }

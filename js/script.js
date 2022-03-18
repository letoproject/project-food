import tabs from "./modules/tabs";
import cards from "./modules/cards";
import timer from "./modules/timer";
import slider from "./modules/slider";
import calc from "./modules/calc";
import modal from "./modules/modal";
import forms from "./modules/forms";
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  cards();
  timer('.timer', "2022-06-13");
  modal("[data-modal]", ".modal", modalTimerId);
  forms(modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner"
  });
  calc();
});

// getResource('http://localhost:3000/menu')
//   .then(data => createCard(data));

//   function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
//       const element = document.createElement('div'),
//             priceUah = price*27;

//       element.classList.add('menu__item');

//       element.innerHTML = `
//         <img src=${img} alt=${altimg}>
//         <h3 class='menu__item-subtitle'>${title}</h3>
//         <div class='menu__item-descr'>${descr}</div>
//         <div class='menu__item-divider'></div>
//         <div class='menu__item-price'>
//             <div class='menu__item-cost'>Цена:</div>
//             <div class='menu__item-total'><span>${priceUah}</span> грн/день</div>
//         </div>
//       `;

//       document.querySelector('.menu .container').append(element);
//     });
//   }

// function slideShow(n) {

//   if ( n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach(slide => slide.style.display = 'none');
//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }
// }

// slideShow(slideIndex);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function slidesPlus(n) {
//   slideShow(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//   slidesPlus(-1);
// });

// next.addEventListener('click', () => {
//   slidesPlus(+1);
// });

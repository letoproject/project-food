document.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs'),
        cards = require('./modules/cards'),
        timer = require('./modules/timer'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc'),
        modal = require('./modules/modal'),
        forms = require('./modules/forms');
        
  tabs();
  cards();
  timer();
  modal();
  forms();
  slider();
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
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
const brendList = document.querySelector('.brend-list');
const brendListFlex = document.querySelector('.brend-list__flex');
const brendButton = document.querySelectorAll('.brend-button');

const techtypeList = document.querySelector('.techtype-list');
const techtypeListFlex = document.querySelector('.techtype-list__flex');
const techtypeButton = document.querySelectorAll('.techtype-button');

const pricelistList = document.querySelector('.pricelist-list');
const pricelistListFlex = document.querySelector('.pricelist-list__flex');
const pricelistCard = document.querySelectorAll('.pricelist-card');


function swiperCard() {
  if (window.innerWidth <= 767) {
    brendList.classList.add('swiper');
    brendListFlex.classList.add('swiper-wrapper');
    brendListFlex.classList.remove('brend-list__flex');
    for (let i = 0; i < brendButton.length; i++) {
      brendButton[i].classList.add('swiper-slide');
    }

    techtypeList.classList.add('swiper');
    techtypeListFlex.classList.add('swiper-wrapper');
    techtypeListFlex.classList.remove('techtype-list__flex');
    for (let i = 0; i < techtypeButton.length; i++) {
      techtypeButton[i].classList.add('swiper-slide');
    }

    pricelistList.classList.add('swiper');
    pricelistListFlex.classList.add('swiper-wrapper');
    pricelistListFlex.classList.remove('pricelist-list__flex');
    for (let i = 0; i < pricelistCard.length; i++) {
      pricelistCard[i].classList.add('swiper-slide');
    }
  
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
          direction: 'horizontal',
          slidesPerView: 'auto',
          spaceBetween: 8,
          centeredSlides: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    });
  } else 
  {
    brendList.classList.remove('swiper');
    brendListFlex.classList.remove('swiper-wrapper');
    brendListFlex.classList.add('brend-list__flex');
    for (let i = 0; i < brendButton.length; i++) {
      brendButton[i].classList.remove('swiper-slide');
    }

    techtypeList.classList.remove('swiper');
    techtypeListFlex.classList.remove('swiper-wrapper');
    techtypeListFlex.classList.add('techtype-list__flex');
    for (let i = 0; i < techtypeButton.length; i++) {
      techtypeButton[i].classList.remove('swiper-slide');
    }

    pricelistList.classList.remove('swiper');
    pricelistListFlex.classList.remove('swiper-wrapper');
    pricelistListFlex.classList.add('pricelist-list__flex');
    for (let i = 0; i < pricelistCard.length; i++) {
      pricelistCard[i].classList.remove('swiper-slide');
    }
  }
}
swiperCard();
window.addEventListener('resize', swiperCard);

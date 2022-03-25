import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerNav.classList.toggle('active');
    menu.classList.toggle('active')
    body.style.overflow = "hidden"
})
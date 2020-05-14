'use strict';

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

document.documentElement.classList.remove('no-js');

navToggle.addEventListener('click', function() {
navMain.classList.toggle('main-nav--opened');

navToggle.classList.toggle('main-nav__toggle--cross');
navMain.classList.toggle('main-nav--closed')
});

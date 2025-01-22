'use strict'


// MENÚ RESPONSIVE

const headerBtn = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')
console.log(headerBtn)
console.log(headerNav)

headerBtn.addEventListener('click', function () {
    headerNav.classList.toggle('isActive')
})

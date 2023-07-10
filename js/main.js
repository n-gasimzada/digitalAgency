const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu__list')

btn.addEventListener('click', function() {
    menu.classList.toggle('menu__list--active')
})
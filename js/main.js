const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu__list')

btn.addEventListener('click', function() {
    menu.classList.toggle('menu__list--active')
})


$('.global-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/main/prev.svg" alt="Prev Arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/main/next.svg" alt="Next Arrow"></button>',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
        }
      }
    ]
  });
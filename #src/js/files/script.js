$(function () {
  lazyload();
  const swiper = new Swiper('.you-might-like__slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 8,
    slidesPerView: 'auto',
    //freeMode: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,


    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      992: {
        spaceBetween: 16,
      },
    },
  });

  if (window.innerWidth < 992) {
    $('.block__text').hide();
    $('.block__title').click(function (event) {
      if ($('.block').hasClass('one')) {
        $('.block__title').not($(this)).removeClass('active');
        $('.block__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
    });
  }
});
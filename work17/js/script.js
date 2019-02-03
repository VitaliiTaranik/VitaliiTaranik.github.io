$(document).ready(function(){

  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });

/*Слайдер с отзывами*/
$('.feedback-slider').slick({
  prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prevArrow.svg" alt="" /></button>',
  nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/nextArrow.svg" alt="" /></button>'
});

/*Слайдер с преимуществом*/
  $('.features-slider').slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow:'<button class="prev arrow"></button>',
        nextArrow:'<button class="next arrow"></button>'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button class="prev arrow"></button>',
        nextArrow:'<button class="next arrow"></button>'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

/*Стили для анимации*/

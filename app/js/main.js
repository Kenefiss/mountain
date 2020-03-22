$(function () {

  $('[data-counter]').counter({
    decimals: 0,
    decPoint: ".",
    thousandsSep: ""
  });

  new WOW().init({
    mobile: true,
  });

  $('.testimonials__items').slick({
    dots: true,
    arrows: false,
    autoplay: true
  });

});
$(function () {

  new WOW({
    mobile: false
  }).init();

  $('.testimonials__items').slick({
    dots: true,
    arrows: false,
    autoplay: true
  });

  var a = 0;
  $(window).scroll(function () {
    var oTop = $('.stats-item').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.stats-number').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 3000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
  });

  $('.header__menu-btn').on('click', function () {
      $(this).toggleClass('active');
      $('.menu__list').slideToggle(1112);
    }

  );

  $(window).resize(function () {
      if ($(window).width() > 1112) {
        $('.menu__list').removeAttr('style');
      }
    }

  );

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
      $("#header-scroll").addClass("small")
    } else {
      $("#header-scroll").removeClass("small")
    }
  });

});
$(document).ready(function() {
  $(".slider__items").slick({
    dots: true,
    arrows: false
  });

  var slickOpts = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    easing: "swing",
    speed: 700,
    arrows: true,
    dots: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 791,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 621,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },

      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ],

    customPaging: function(slick, index) {
      return "<a>" + (index + 1) + "</a>";
    }
  };

  $(".shop__items").slick(slickOpts);

  $(".header__top-number").click(function() {
    $(".header__top-numbers").toggle();
  });
});

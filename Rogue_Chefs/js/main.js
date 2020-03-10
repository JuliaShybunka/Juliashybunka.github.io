$(function(){
    


$('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: true,
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 2, 
    
});

$('.clients__bottom').slick({
    dots: true,
    infinite: false,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
   
});


$("#load").click(function(e){
    e.preventDefault();
    $(".wine__content-bottom").toggle(); 
});



});
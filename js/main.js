$(document).ready(function() {
    $('.burger__menu').click(function(event) {
        $('.burger__menu, .header__menu, .head').toggleClass('active');
    });
});

var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 700){
        $(".header__menu").css({"background": "white"})
    }
    if(700 > scrolled){
        $(".header__menu").css({"background": "transparent"})         
    }

}

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: true,
        speed: 1500,
        autoplay: false,
        autoplaySpeed: 4000,
        variableWidth: true,
        responsive:[
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    });
});

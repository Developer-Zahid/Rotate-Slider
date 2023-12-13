$(document).ready(function () {
    $bannerSlider = $('.banner__slider')
    $bannerSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        cssEase: 'ease-in',
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $bannerSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slides[currentSlide]).addClass('slick-fade-out')
    });
    $bannerSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(slick.$slides[currentSlide]).removeClass('slick-fade-out')
    });
});
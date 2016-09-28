$('#image-gallery').lightSlider({
    gallery: true,
    item: 1,
    thumbItem: 9,
    slideMargin: 0,
    speed: 1000,
    auto: false,
    loop: false,
    onSliderLoad: function() {
        $('#image-gallery').removeClass('cS-hidden');
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
    }
});

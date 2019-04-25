/*===========================
          magnify popup
==============================*/
$(document).ready(function () {
    $('.img-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});
/*===========================
          owl carousel
==============================*/

$(document).ready(function () {
    $("#testimonial-content").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*===========================
          wow
==============================*/
$(document).ready(function () {
    new WOW().init();
});
/*===========================
         transparent nav
==============================*/
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("nav-bg");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("nav-bg");
            $("#back-to-top").fadeIn();
        }


    });

});
/*===========================
        easing nav
==============================*/
$(function () {

    $("a.smooth-scrool").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 53
        }, 1250, "easeInOutExpo");
    });
});
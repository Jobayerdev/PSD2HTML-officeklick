// Function Activation
$(document).ready(function() {


    wowScrollAnimation();
    categorieActiveElement();
    windowScrollTop();
    new WOW().init();
    OwlCarouselFunction();
    SlickMobileMenuFunction();
    cartDropDownAdd();
    productZoomEffect();

});
// Zoom Image
function productZoomEffect() {
    // $('#img_01').elevateZoom();
    $("#img_01").elevateZoom({
        gallery: 'gal1',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        borderColour: '#ddd',
        borderSize: 1,
        zoomWindowOffetx: 1,
        zoomWindowOffety: -1.5
    });



}
// Shopping Cart
function cartDropDownAdd() {
    $(".cart-item").on("click", function() {
        $(".shopping-cart").fadeToggle();
    });
}
// Active Element
function categorieActiveElement() {

    $(".product-sub-categories li").on('click', function() {
        $(this).siblings().removeClass('categorie-active');
        $(this).addClass('categorie-active')
    })
    $(".product-categores-heading")


}
// Scroll To Up
function windowScrollTop() {
    $(window).scroll(function() {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 500) {
            $('.jump-to-top , .social_side_links').css("opacity", "1");

        } else {
            $('.jump-to-top , .social_side_links').css("opacity", "0");
        }

    });


    $('.jump-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
    });
}
// Wow Animation 
function wowScrollAnimation() {
    // Home Page
    $(".section-title").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.4s');
    $(".service-content").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.3s');
    $(".single-work-offer").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.5s');
    $(".popular-single-slide").addClass("wow fadeInUp").attr('data-wow-delay', '0.5s');
    $(".clients-slide").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.6s');
    $(".single-footer-item").addClass("wow fadeInUp").attr('data-wow-delay', '0.5s');
    // About Page
    $(".about-title").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.4s');
    $(".team-single-item").addClass("wow fadeInUp").attr('data-wow-delay', '0.5s');
    $(".team-info").find("*").addClass("wow fadeInUp").attr('data-wow-delay', '0.6s');
    // Categories Page
    $(".product-single-categorie").addClass("wow fadeInUp").attr('data-wow-delay', '0.4s');
    $(".product-single-item").addClass("wow fadeInUp").attr('data-wow-delay', '0.4s');
    // $(".single-product-info").addClass("wow fadeInUp").attr('data-wow-delay', '0.5s');
    $(".product-pagination").addClass("wow fadeInUp").attr('data-wow-delay', '0.6s');
}




// Owl Carousel Function
function OwlCarouselFunction() {
    $('.hero-slider-area').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        animateIn: 'fadeIn', // add this
        animateOut: 'fadeOut',
        transitionStyle: "fade", // and this
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items: 1
    });
    $('.popular-item-sliders').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });
    //  $('.testmonial-sliders').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     dots:true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     autoplayTimeout: 5000,
    //     autoplaySpeed: 3000,
    //     navSpeed: 4000,
    //     dotsSpeed: 4000,
    //     dragEndSpeed: 1000,
    //     navText : ['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:2
    //         }
    //     }
    // }); 
    $('.clients-sliders').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 4000,
        dotsSpeed: 4000,
        dragEndSpeed: 1000,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    });

    $('.product-image-slider').owlCarousel({
        loop: false,
        nav: false,
        autoplay: true,
        margin: 0,
        autoplaySpeed: 2000,
        autoplayTimeout: 6000,
        navSpeed: 1000,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        // responsive: {
        //     0: {
        //         items: 5
        //     },
        //     600: {
        //         items: 5
        //     },
        //     1000: {
        //         items: 5
        //     },
        //     1200: {
        //         items: 5
        //     },
        //     1400: {
        //         items: 5
        //     },

        // }
        items: 5
    })

}



// Slick Mobile Menu Function
function SlickMobileMenuFunction() {
    $('.menu').slicknav({
        label: '',
        duration: 500,
        prependTo: '.mobile-menu'
    });
}
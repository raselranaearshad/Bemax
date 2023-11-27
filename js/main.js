$(document).ready(function(){

    // Mobile Menu start
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '767',
    });
    // Mobile Menu End

    // Hero Slider Start
    $('.slider-active').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });  // Hero Slider End

    // Project Slider Start
    $('.project-active').owlCarousel({
        loop: true,
        margin: 2,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500,
        responsive: {
            0:{
                items:1
            },
            400:{
                items: 1
            },
            600:{
                items: 2
            },
            1000: {
                items: 4
            }
        },
    }) // Project Slider End 

    // Blog Slider Start
    $('.blog-active').owlCarousel({
        loop: true,
        margin: 2,
        nav: true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items: 1
            },
            1000: {
                items: 1
            }
        },
    }) // Blog Slider End 

    // Testimonial Slider Start
    $('.testimonial-active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        responsive: {
            0:{
                items:1
            },
            600:{
                items: 1
            },
            1000: {
                items: 1
            }
        },
    }) // Testimonail Slider End 

    // Brand Slider Start
    $('.brand-active').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        responsive: {
            0:{
                items:1
            },
            400:{
                items: 2
            },
            600:{
                items: 3
            },
            792:{
                items: 4
            },
            992:{
                items: 5
            },
            1200: {
                items: 6
            }
        },
    }); // Brand Slider End
    
    // Venobox Video Popup Start
    new VenoBox({
        selector: ".video-popup",
        spinColor: '#4272d7',
        spinner: 'plane',
        
    });  // Venobox Video Popup End
});
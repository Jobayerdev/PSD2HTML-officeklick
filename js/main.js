


$(document).ready(function() {
    
  
            // owl-carousel homeSliderSection
    $("#homeSliderSection").owlCarousel({
    	items:1,
    	nav:true,
    	dots:false,
    	loop:true,
    	autoPlay:false

    });
   // owl-carousel hotdealSlider
    $("#hotdealSlider").owlCarousel({
        items:5,
        nav:true,
        autoPlay:false,
        margin:15,
        dots:true,
        navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }

    });
  // owl-carousel testmonial-Section
    $("#testmonial-Slider").owlCarousel({
        items:2,
        nav:true,
        autoPlay:false,
        margin:15,
        dots:true,
        navText: [
        '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
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

    });
  




});


 function openNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-menu").style.display = "block";
  
}

function closeNav() {
  // document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main-menu").style.display = "none";
  
}
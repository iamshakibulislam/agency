/*
    Project Name : Camel
    Author Company : SpecThemes
    Project Date: 25 December, 2017
    Template Developer: vsafaryan50@gmail.com
*/


/*
==============================================
TABLE OF CONTENT
==============================================

1. Owl Carousels
2. CountUp
3. Pie Chart
3. Navbar
4. Video Modal
5. Preloader
6. Scroll To Top
7. Isotop
8. WOW
9. Revolution Slider

==============================================
[END] TABLE OF CONTENT
==============================================
*/

"use strict";


$(document).ready(function() {

/*------------------------------------
    1. Owl Carousel
--------------------------------------*/  



/*---------------------
Testmonials
-----------------------*/

  $('#testmonials').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
      },
      600: {
        items: 1,
        margin: 25,
      },
      1000: {
        items: 1,
        margin: 25,
      }
    }
  })



/*---------------------
Partners carousel
-----------------------*/

  $('#partners').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,  
    responsiveClass: true,
    autoplayHoverPause:false,
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      600: {
        items: 3,
        margin: 30,
      },
      1000: {
        items: 5,
        margin: 30,
      }
    }
  })


/*------------------------------------
    2. CountUp
--------------------------------------*/  

    $('.countup').counterUp({
        delay: 5,
        time: 2000
    });


/*------------------------------------
    3. Navbar
--------------------------------------*/    

  if ($(window).width() > 991) {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });
  }

  if ($(window).width() < 991) {
    $(".logo_main").css("display" , "inline-block"); 
    $(".logo_light").css("display" , "none"); 
  }  
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if ($(window).width() > 991){
      if (scroll > 30) {
        $(".navbar-custom").css("background" , "#fff");
        $(".navbar-links-custom a").css("color" , "#3b3b3b");
        $(".dropdown-menu a").css("color" , "#999"); 
        $(".navbar-custom").css("border-bottom" , "1px solid #eee"); 
        $(".logo_main").css("display" , "inline-block"); 
        $(".logo_light").css("display" , "none"); 
      }
      else{
        $(".navbar-custom").css("background" , "transparent");  
        $(".navbar-links-custom a").css("color" , "rgba(255, 255, 255, 0.67)"); 
        $(".dropdown-menu a").css("color" , "#999"); 
        $(".navbar-custom").css("border-bottom" , "1px solid transparent"); 
        $(".logo_main").css("display" , "none"); 
        $(".logo_light").css("display" , "inline-block"); 
      }
    }
  })




/*------------------------------------
    4. Video Modal
--------------------------------------*/ 

  $('#videomodal').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });

  $('#videomodal').on('hidden.bs.modal', function() {
    var html5Video = document.getElementById("htmlVideo");
    if (html5Video != null) {
      html5Video.pause();
      html5Video.currentTime = 0;
    }
  });


/*------------------------------------
    5. Preloader
--------------------------------------*/ 

  $('#preloader').fadeOut('normall', function() {
      $(this).remove();
  });


/*------------------------------------
    6. Scroll To Top
--------------------------------------*/ 

    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);
            
        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });
 
    $(".scroll-to-top").on('click', function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop: 0},600);
    });



/*------------------------------------
    7. Isotop
--------------------------------------*/  

// external js: isotope.pkgd.js
// init Isotope
var $grid = $('.isotope-grid').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number radix',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change is-checked class on buttons
$('.latest-projects').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



/*------------------------------------
    8. WOW
--------------------------------------*/ 
new WOW().init();


});


/*------------------------------------
    9. Revolution Slider
--------------------------------------*/
if($("#rev_slider_24_1").length !== 0) {
  var tpj=jQuery;
  var revapi24;
  tpj(document).ready(function() {
    if(tpj("#rev_slider_24_1").revolution == undefined){
      revslider_showDoubleJqueryError("#rev_slider_24_1");
    }else{
      revapi24 = tpj("#rev_slider_24_1").show().revolution({
        sliderType:"standard",
        jsFileLocation:"revolution/js/",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:9000,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          onHoverStop:"off",
          bullets: {
            enable:true,
            hide_onmobile:false,
            style:"bullet-bar",
            hide_onleave:false,
            direction:"horizontal",
            h_align:"center",
            v_align:"bottom",
            h_offset:0,
            v_offset:50,
            space:5,
            tmp:''
          }
        },
        responsiveLevels:[1240,1024,778,480],
        visibilityLevels:[1240,1024,778,480],
        gridwidth:[1240,1024,778,480],
        gridheight:[868,768,960,720],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "60px",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        }
      });
    }

            if(revapi24) revapi24.revSliderSlicey();
  }); /*ready*/
}
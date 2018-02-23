$(".wrap_silder").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    nav: true,
    autoHeight:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayHoverPause:true
});

$(".wrap_slide_au > ul").owlCarousel({
    items:1,
    loop:true,
    autoplay:false,
    autoplayTimeout:2500,
    nav: true,
    dots:true,
    autoHeight:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayHoverPause:true
});

$("#search").click(function(){
    $("#txt_search").toggleClass("search_side");
});

// back top
$("#back_top").click(function(event){
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

var num = 100;  
  $(window).bind('scroll', function () {
      if ($(window).scrollTop() > num) {   
          $('nav.navbar, #back_top').addClass('fixed');
          $('header').css('position','static');
      }
      else
      {
          $('nav.navbar, #back_top').removeClass('fixed');
      }
  });
// active wowjs
new WOW().init();
$(document).ready(function () {

  $('a[href^="#"]').click(function () {

      var elementClick=$(this).attr("href");
      var destination=$(elementClick).offset().top;
      $('body').animate({scrollTop:destination},1000);

  });



  function css_add(window_url) {
    var $ = document; // shortcut
    var cssId = 'myCss';  // you could encode the css path itself to generate id..
        var head  = $.getElementsByTagName('head')[0];
        var link  = $.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = window_url;
        link.media = 'all';
        head.appendChild(link);


  }
  $('.header-nav-list-ul').fadeOut();
  $('.header-nav-list_btn').on('click',function () {
      if($('.header-nav-list-ul').css('display')=='none')
      {
        $('.header-nav-list-ul').fadeIn()
        $('.header-nav-list_btn').html('<i class="fa fa-times " aria-hidden="true"></i>');
        console.log('kk');
      }else {
        $('.header-nav-list-ul').fadeOut();
        $('.header-nav-list_btn').html('<i class="fa fa-bars" aria-hidden="true"></i>');
      }
  });


  if(window.innerWidth>800)
  {
    $('.header-nav-list-ul').html('<li><a href="#2">About</a></li>\
    <li><a href="#3">Skills</a></li>\
    <li><a href="#4">Gallery</a></li>\
    <li><a href="#5">Contact</a></li>');
    $('.header-scroll-text').html('<a href="#2">Scroll Down <br> <i class="fa fa-arrow-down" aria-hidden="true"></i></a>');
    $('a[href^="#"]').click(function () {

      var elementClick=$(this).attr("href");
      $(".main").moveTo(elementClick[1]);
      return false;

    });
    css_add("css/onepage-scroll.css");
    css_add("css/component.css");
    $(".main").onepage_scroll({
       dotstyle: "fillup",              // dotstyle let you choose which cool style you want to use, default is "fillup",
       sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
       easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
       animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
       pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
       updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
       beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
       afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
       loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
       keyboard: true,                  // You can activate the keyboard controls
       responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                        // the browser's width is less than 600, the fallback will kick in.
       direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
    $('.dotstyle li').css({width:"1.5rem",height:"1.5rem"});
  }
});

$(document).ready(function () {

  //Hide and show nav when scroll
  var didScroll;
  var lastScrollTop = 0;

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var scrolltop = $(this).scrollTop();

    //show sidebar only after scrolling x
    if (Math.abs(scrolltop) > 400) {
      $('.sidenav').removeClass('hidden');
      $('.sidenav').addClass('shown');
    } else {
      $('.sidenav').addClass('hidden');
      $('.sidenav').removeClass('shown');
    }

    lastScrollTop = scrolltop;
  }

});

$(document).ready(function(){
  filmstrip.initialize();
  background.initialize();

  background.resize($(window).width(), $(window).height());

  $(window).resize(function() {
    background.resize($(window).width(), $(window).height());
  });
  $(window).bind('orientationchange', function() {
    background.resize();
  });
});


$(document).ready(function(){
  filmstrip.initialize();
  background.initialize();

  background.resize();
  $(window).resize(function(event) {
    background.resize(event.target.outerWidth, event.target.outerHeight);
  });
  $(window).bind('orientationchange', function() {
    background.resize();
  });
});


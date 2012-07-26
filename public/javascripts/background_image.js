var BackgroundImage = function(dom, index) {
  this.$ = dom;
  this.small_src = dom.attr('src');
  this.large_src = dom.attr('largesrc');
  this.index = index;
  var self = this;
  this.$.click(function() {
    background.set_image(self.index);
  });
};

BackgroundImage.prototype.on_img_ready = function(callback) {
  var inspector = $('<img src="' + this.large_src + '" />');
  inspector.load(callback);
};

BackgroundImage.prototype.make_dom = function () {
  var dom = $('<div/>').addClass('background');
  dom.css('background-image', 'url(' + this.large_src + ')');
  if (!(window.navigator.userAgent.match(/iPhone/i))) {
    dom.addClass('contain');
  }

  return dom;
};

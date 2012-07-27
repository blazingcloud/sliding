describe("background", function() {
  describe("initialize", function() {
    var backgroundDom, wrapperDom;

    beforeEach(function() {
      backgroundDom = $('<div/>').addClass('background');
      wrapperDom = $('<div/>').addClass('background_wrapper');
      $(document.body).append(wrapperDom);
      wrapperDom.append(backgroundDom);

      spyOn(background, 'set_image');

      background.initialize();
    });

    afterEach(function() {
      wrapperDom.remove();
    });

    it("should set background.$ to the background div", function() {
      expect(background.$.attr('class')).toEqual('background');
    });

    it("should set background.wrapper to the wrapper div", function() {
      expect(background.wrapper.attr('class')).toEqual('background_wrapper');
    });

    it("should set current_index to 0", function() {
      expect(background.current_index).toEqual(0);
    });

    it("should call set_image to display the first image", function() {
      expect(background.set_image).toHaveBeenCalled();
    });
  });

  describe("resize", function() {
    var wrapperDom;

    beforeEach(function() {
      wrapperDom = $('<div/>').addClass('background_wrapper');
      $(document.body).append(wrapperDom);

      background.resize(600, 700);
    });

    afterEach(function() {
      wrapperDom.remove();
    });

    it("should set background.window_width and height", function() {
      expect(background.window_width).toEqual(600);
      expect(background.window_height).toEqual(700);
    });

    it("should set this.wrapper to be the right height", function() {
      expect(background.wrapper.height()).toEqual(700);
    });
  });

});

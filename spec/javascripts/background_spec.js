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

  describe("set_image", function() {
    //var wrapperDom, thumbDom, imgDom;

    beforeEach(function() {
      wrapperDom = $('<div/>').addClass('background_wrapper');
      $(document.body).append(wrapperDom);
      thumbDom = $('<img src="public/images/thumbs/flower.png" largesrc="public/images/large/flower.png" />');
      filmstrip.images = [new BackgroundImage(thumbDom, 0)]
      imgDom = filmstrip.images[0].make_dom();
      background.initialize();
    });
    afterEach(function() {
      //wrapperDom.remove();
    });

    it("should set background.current_index when passed an index", function() {
      background.set_image(0);
      expect(background.current_index).toEqual(0);
    });

    it("should make a div with class background", function() {
      background.set_image(0);
      debugger;
      // make sure it's there
      expect($('.background').length).toEqual(1);
    });
      // make sure there's only one of them (right # of things)
      // then what exactly we expect it to have (bg image property with correct url)

    it("should add the right image to the page", function() {
      //console.log("thumbDom...");
      //console.log($(thumbDom));
      //console.log("filmstrip.images[0]...");
      //console.log(filmstrip.images[0]);
      //console.log("imgDom...");
      //console.log(imgDom);
      //console.log("wrapperDom.children()");
      //console.log(wrapperDom.children());
      debugger;
      expect($('.background_wrapper').children().attr('style')).toEqual("background-image: url(http://localhost:5000/images/large/flower.png); ");
    });
  });

  describe("swipe_left", function() {
    
  /*  beforeEach(function() {
      spyOn(background, 'animate_swipe');

    });
*/
    it("should advance the index by one", function() {
      background.current_index = 1;
      filmstrip.length = 3;
      background.swipe_left();
      expect(background.current_index).toEqual(2);
    });

    it("should set index to 0 if it reached the end of the list", function() {
      background.current_index = 2;
      filmstrip.length = 3;
      background.swipe_left();
      expect(background.current_index).toEqual(0);
    });

    it("should call animate_swipe", function() {
      background.swipe_left();
      expect(background.animate_swipe).toHaveBeenCalledWith(1);
    });
  });

});

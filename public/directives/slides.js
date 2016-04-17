var getPixelColor = require('get-canvas-pixel-color');
var slides = require('../load_slides');

var app = require('ui/modules').get('apps/kibana-keynote', []);

app.directive('slides', function ($document, $routeParams, $location, $timeout) {
  return {
    restrict: 'E',
    link: function ($scope, $elem) {

      function init () {
        $scope.slides = slides;
        $scope.currentSlide = $routeParams.slide || 0;
        setSlide($scope.currentSlide)
      }

      $document.bind('keydown', function(e) {
        var key = e.keyCode;
        console.log(key);

        // Toggle between cover and contain
        if ((key === 70)) { // alt + f
          var sizing = $elem.css('background-size');
          $elem.css('background-size', sizing === 'cover' ? 'contain' : 'cover');
        }

        if ((key === 37 || key === 38) && $scope.currentSlide > 0) $scope.currentSlide--; // down or left
        if ((key === 39 || key === 40) && $scope.currentSlide < $scope.slides.length - 1) $scope.currentSlide++; // up or right
        setSlide($scope.currentSlide);
        $scope.$apply();
      })

      function setSlide(slideIndex) {

        // Persist the current slide to the URL
        $timeout(function () {
           $location.search('slide', slideIndex);
           $scope.$apply();
         }, 0);

        /*
          This is hack-larious.

          Our slides are unlikely to fit perfectly, so Kibana simply fits the slide the best it can.
          But then there would be some ugly white bars on the top/bottom or left/right of the slide.
          To hack around this we render a copy of the image to canvas and grab the color of the pixel
          at (0,0) and use that as the background color for the container. Thats going to suck if your
          slides aren't the same color on every side. So, you know, make them that.
        */
        var image = new Image();
        image.onload = function() {
          var canvas = document.createElement('canvas');
          canvas.getContext('2d').drawImage(image, 0, 0);

          var rgb = getPixelColor(canvas, 0, 0);

          $elem.css('background-image', 'url(' + slides[slideIndex] + ')');

          // 'get-canvas-pixel-color' has a bug, it inverts g and b
          $elem.css('background-color', 'rgb(' + [rgb.r, rgb.b, rgb.g].join(',') + ')');
        };
        image.src = slides[slideIndex];
      }

      init();
    }
  };
});

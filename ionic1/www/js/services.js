angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});




angular.module('starter.directives', [])


.directive('drawable', function($ionicGesture) {
  return {
    // Other directive stuff ...
    link: function($scope, $element, $attr) {

      $element.text("lalalalalala");

      var handleDrag = function(e) {
        // Access e.gesture for gesture related information
        console.log('Drag: ', e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.deltaX, e.gesture.deltaY);
        $element.text(e.gesture.touches[0].pageX + "," + e.gesture.touches[0].pageY);


      };

      var dragGesture = $ionicGesture.on('drag', handleDrag, $element);

      $scope.$on('$destroy', function() {
        // Unbind drag gesture handler
        $ionicGesture.off(dragGesture, 'drag', handleDrag);
      });
    }
  }
});
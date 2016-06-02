angular.module('awhere.controllers')

.controller('EventsCtrl', function($scope, $ionicScrollDelegate, Preset, Category, Event) {

  $scope.viewStateEnum = {
    HOT: 0,
    CATEGORIES: 1,
    CATEGORY: 2
  };

  $scope.viewState = $scope.viewStateEnum.HOT;
  $scope.category = '';
  $scope.events = Event.all();
  $scope.categories = Category.concatAll();

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.currentPreset = Preset.getCurrent();
    console.log($scope.currentPreset);
  });

  $scope.toggleView = function(state) {
    $scope.viewState = state;
    $ionicScrollDelegate.scrollTop();
  };

  $scope.changeCategory = function(category) {
    $scope.category = category;
  };

  $scope.eventFilter = function(event) {

    if ($scope.viewState === $scope.viewStateEnum.CATEGORY) {
      if ([event['primary category'], event['secondary category'], event['3rd category']].indexOf($scope.category) > -1) {
        return true;
      }
      // Hot filtering - for now just returns all events
      if ($scope.category == "Hot")
        return true;
      
      return false;
    }

    if ($scope.currentPreset)
    {
      var foundCategory = false;
      if ($scope.currentPreset.interests.length == 0) {
        if (event['price'].indexOf("Free") != -1 || parseInt(event['price']) <= parseInt($scope.currentPreset.price)) {
          return true;
        }
        else {
          return false;
        }
      };

      for (var i = 0; i < $scope.currentPreset.interests.length; i++){
        $scope.category = $scope.currentPreset.interests[i];
        // if (event['title'] === "Segal Seminar Series: John Bielenberg"){
        //   console.log(event['primary category'], $scope.category);
        // }

        if ([event['primary category'], event['secondary category'], event['3rd category']].indexOf($scope.category) > -1) {
          if (event['price'].indexOf("Free") != -1 || parseInt(event['price']) <= parseInt($scope.currentPreset.price)) {
            foundCategory = true;
            console.log("found category");
            break;
          }
        }
      }
      return foundCategory;
    }
    else {
      console.log("There is no preset");
      return true;
    }

  };

  $scope.printPrice = function(price) {
    if (price.indexOf("Free") != -1)
      return "Free";
    else
      return "$" + price;
  }

});

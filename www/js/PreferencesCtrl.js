angular.module('awhere.controllers')

.controller('PreferencesCtrl', function($scope) {

  $scope.prefs = {};
  $scope.prefs.categories = {};

  $scope.savePrefs = function() {
    console.log($scope.prefs)
    var storeVal = JSON.stringify($scope.prefs);
    localStorage.setItem("prefs", storeVal);
  };

  $scope.loadPrefs = function() {
    var loadedVal = localStorage.getItem("prefs");
    $scope.prefs = JSON.parse(loadedVal);
  };

  //the following is experimental for accordion menu
  $scope.categories = []
  for(var i = 0; i < 5; i++){
    let myObj = {name: "Category " + i.toString(), subcategories: ["Subcat a", "Subcat b", "Subcat c"]};
    $scope.categories.push(myObj);
  }
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleCategory = function(category) {
    if ($scope.isCategoryShown(category)) {
      $scope.shownCategory = null;
    } else {
      $scope.shownCategory = category;
    }
  };
  $scope.isCategoryShown = function(category) {
    return $scope.shownCategory === category;
  };
});
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

  $scope.initPrefs = function() {

  };
});
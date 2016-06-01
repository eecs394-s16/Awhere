angular.module('awhere.controllers')

.controller('PreferencesCtrl', function($scope, Preset, $stateParams, $state, Category) {

  $scope.savePrefs = function() {
    if ($scope.prefs.name == null) {
      alert("Must give preset a name");
      return;
    }
    if ($stateParams.ind === "add")
    {
      Preset.add($scope.prefs);
    }
    else
    {
      Preset.update(Number($stateParams.ind), $scope.prefs);
    }
    $state.go("presets");
  };

  $scope.loadPrefs = function() {
    var loadedVal = Preset.find(Number($stateParams.ind));
    if(!loadedVal){
      $scope.prefs = {interests: []};
    } else {
      $scope.prefs = loadedVal;
    }
  };

  $scope.searchText = "";

  $scope.categories = Category.all();

  $scope.updateCategories = function(cat,subcat,interest) {

    var name;
    if (!interest) {
      name = cat + ":" + subcat;
    }
    else {
      name = interest;
    }


    var index = $scope.prefs.interests.indexOf(name);

    if (index == -1)
    {
      $scope.prefs.interests.push(name);
    }
    else
    {
      $scope.prefs.interests.splice(index,1);
    }
  };

  $scope.inCategories = function(cat,subcat,interest) {

    var name;
    if (!interest) {
      name = cat + ":" + subcat;
    }
    else {
      name = interest;
    }

    var index = $scope.prefs.interests.indexOf(name);

    if (index == -1)
    {
      return false;
    }
    else
    {
      return true;
    }
  };

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

  $scope.$on('$ionicView.beforeEnter', function() {
      $scope.prefs = {interests: []};
      if ($stateParams.ind != "add") {
        $scope.loadPrefs();
      }
  });
});

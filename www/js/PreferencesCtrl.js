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

  $scope.categories = [
    {name:          "Professional / Future Schooling", 
     subcategories: ["Graduate School", 
                     "Career"]},
    {name:          "Academic", 
     subcategories: ["Engineering / Design", 
                     "Math", 
                     "Sciences", 
                     "Languages",
                     "English / Journalism / Lit",
                     "Music",
                     "Business / Economics",
                     "Social Sciences / History",
                     "Psych / Cog Sci",
                     "Education and Organization",
                     "Other"]},
    {name:           "Athletic",
     subcategories:  ["Varsity",
                      "Club",
                      "Intramural"]},
    {name:           "Social",
     subcategories:  ["Club Sponsored",
                      "Greek Life Sponsored",
                      "Other"]},
    {name:           "Arts",
     subcategories:  ["Theater",
                      "Music",
                      "Dance",
                      "Comedy",
                      "Film",
                      "Other"]},
    {name:            "Other",
     subcategories:  ["Food",
                      "philanthropy / service",
                      "unique"]}
                        ];
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
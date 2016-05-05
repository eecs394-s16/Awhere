angular.module('awhere.controllers')

.controller('CategoriesCtrl', function($scope, $stateParams) {
  $scope.categories = [
    "design", "entrepreneurship", "comp. sci.", "religion", "education", "athletics", "fitness", "business", "music", "life science", "writing"
  ];
});

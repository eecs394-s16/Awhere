angular.module('awhere.controllers')

.controller('PresetsCtrl', function($scope) {
  $scope.presets = [
    {name: 'Academic'},
    {name: 'Social'},
    {name: 'Athletic'}
  ];

  $scope.delete = function (index) {
    $scope.presets.splice(index, 1);
  };
});

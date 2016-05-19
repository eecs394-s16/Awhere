angular.module('awhere.controllers')

.controller('PresetsCtrl', function($scope, Preset) {
  $scope.presets = Preset.all();

  $scope.delete = function(index) {
    Preset.delete(index);
    $scope.presets = Preset.all();
  };
});

angular.module('awhere.controllers')

.controller('PresetsCtrl', function($scope, Preset) {
  $scope.presets = Preset.all();

  $scope.$on('$ionicView.beforeEnter', function() {
      $scope.currPreset = JSON.parse(localStorage.getItem('currPreset'));
      console.log($scope.currPreset);
  });
  

  $scope.delete = function(index) {
    Preset.delete(index);
    $scope.presets = Preset.all();
  };

  $scope.selectPreset = function(preset) {
    $scope.currPreset = preset.id;
    Preset.setCurrent($scope.currPreset);
  };


});

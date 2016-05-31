angular.module('awhere.controllers')

.controller('CardCtrl', function($scope, $stateParams, $cordovaSocialSharing) {

  $scope.shareAnywhere = function() {
    $cordovaSocialSharing
      .shareViaFacebook('Hi, check out ' + $scope.ca.title +' at '+ $scope.ca.location+ ' on '+ $scope.ca.time, '', '')
      .then(function(result) {
      // Success!
      }, function(err) {
        alert (err);
      // An error occurred. Show a message to the user
      });
    }

  $scope.cid = $stateParams.ind;

  $scope.ca = testEvents[$scope.cid];
});

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
  $scope.ca = {};

  for (var i=0; i < testEvents.length; i++)
  {
    if ($scope.cid===testEvents[i].title)
    {
      $scope.ca = testEvents[i];
      break;
    }
  }
});

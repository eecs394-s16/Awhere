angular.module('awhere.controllers')

.controller('CardCtrl', function($scope, $stateParams, $cordovaSocialSharing, Event) {

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

  var events = Event.all();
  for (var i=0; i < events.length; i++)
  {
    if ($scope.cid===events[i].title)
    {
      $scope.ca = events[i];
      break;
    }
  }
});

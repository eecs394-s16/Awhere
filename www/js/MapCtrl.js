angular.module('awhere.controllers')

.controller('MapCtrl', function($scope, $stateParams, $state, $cordovaGeolocation) {

  //Google maps stuff
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    geocoder.geocode({ 'address': $stateParams.location}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK && results[0].formatted_address.indexOf("Evanston") != -1) {
          console.log(results[0].formatted_address);
          $scope.map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: $scope.map,
            position: results[0].geometry.location
          });
        } else {
          //alert ("we couldn't find the location. Status: " + status);
        }
    });

    var person = 'img/currloc.png';

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var marker = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon: person
      });
    });

  }, function(error){
    console.log("Could not get location")
  });

});

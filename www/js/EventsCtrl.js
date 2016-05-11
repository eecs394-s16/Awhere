angular.module('awhere.controllers')

.controller('EventsCtrl', function($scope, $stateParams, $ionicScrollDelegate) {

  $scope.viewStateEnum = {
    HOT: 0,
    CATEGORIES: 1,
    CATEGORY: 2
  };

  $scope.viewState = $scope.viewStateEnum.HOT;
  $scope.category = '';
  $scope.events = testEvents;
  $scope.categories = testCategories;

  $scope.toggleView = function(state) {
    $scope.viewState = state;
    $ionicScrollDelegate.scrollTop();
  };

  $scope.changeCategory = function(category) {
    $scope.category = category;
  };

  $scope.categoryFilter = function(event) {
    if ($scope.category === '') { return true; }
    if ([event['primary category'], event['secondary category'], event['3rd category']].indexOf($scope.category) > -1) {
      return true;
    } else {
      return false;
    }
  };
});

//These will be removed when Database gets implemented.  So i put them at the bottom of the file as globals.
var testCategories =
[
  "design", "entrepreneurship", "comp. sci.", "religion", "education", "athletics", "fitness", "business", "music", "life science", "writing"
];

var testEvents =
[
  {
    "title": "Segal Seminar Series: John Bielenberg",
    "date": "4/12/2016",
    "price": "Free",
    "location": "Ford Design Studio 1.230",
    "time": "4-5 pm",
    "brief description": "how can thinking wrong be so right?",
    "primary category": "design",
    "secondary category": "entrepreneurship",
    "3rd category": ""
  },
  {
    "title": "Hack Nights",
    "date": "4/13/2016",
    "price": "Free",
    "location": "the garage",
    "time": "7-10pm",
    "brief description": "hackathon 4 fun",
    "primary category": "comp. sci.",
    "secondary category": "entrepreneurship",
    "3rd category": "design"
  },
  {
    "title": "Design Chicago",
    "date": "4/6/2016",
    "price": "Free",
    "location": "Allen Center",
    "time": "4-6:30 pm",
    "brief description": "3 major design leaders lecturing",
    "primary category": "design",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "\"Unicorn\"",
    "date": "4/7/2016",
    "price": "Free",
    "location": "Jacobs Center",
    "time": "5:15-8:15 pm",
    "brief description": "The entrepreneurial unicorn.",
    "primary category": "entrepreneurship",
    "secondary category": "design",
    "3rd category": ""
  },
  {
    "title": "\"The Master's Hand\"",
    "date": "4/13/2016",
    "price": "Free",
    "location": "Harris Hall 107",
    "time": "4:00 PM",
    "brief description": "intelligent design?",
    "primary category": "religion",
    "secondary category": "education",
    "3rd category": ""
  },
  {
    "title": "NU vs INDIANA women's tennis",
    "date": "4/10/2016",
    "price": "Free w/ card",
    "location": "South Tennis Courts",
    "time": "11/2/2016",
    "brief description": "women's tennis",
    "primary category": "athletics",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "BodyPump!",
    "date": "4/11/2016",
    "price": "$18",
    "location": "SPAC",
    "time": "6:15 - 7:15 am",
    "brief description": "barbell class",
    "primary category": "fitness",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "Workshop in industrial organization",
    "date": "4/11/2016",
    "price": "Free",
    "location": "Jacobs Center",
    "time": "3:30 - 5 pm",
    "brief description": "estimations of your organzation",
    "primary category": "business",
    "secondary category": "education",
    "3rd category": ""
  },
  {
    "title": "Bell Up!",
    "date": "4/12/2016",
    "price": "$10",
    "location": "SPAC",
    "time": "7:30 - 9 pm",
    "brief description": "intermediate belly dancing",
    "primary category": "fitness",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "Daily Mass",
    "date": "4/13/2016",
    "price": "Free",
    "location": "Sheil",
    "time": "5 -  6 pm",
    "brief description": "catholic mass @ sheil",
    "primary category": "religion",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "Harmonica 101",
    "date": "4/13/2016",
    "price": "$5",
    "location": "Norris",
    "time": "8:00 PM",
    "brief description": "learn the harmonica",
    "primary category": "music",
    "secondary category": "education",
    "3rd category": ""
  },
  {
    "title": "Neurobiology Club Intro meeting",
    "date": "4/14/0216",
    "price": "Free",
    "location": "2220 campus dr",
    "time": "12 - 1 pm",
    "brief description": "Write about neurobiology",
    "primary category": "life science",
    "secondary category": "writing",
    "3rd category": "education"
  },
  {
    "title": "Judith Kimble",
    "date": "4/14/2016",
    "price": "Free",
    "location": "Pancoe",
    "time": "1-2 pm",
    "brief description": "learn about neurobiology",
    "primary category": "life science",
    "secondary category": "education",
    "3rd category": ""
  }
  ];

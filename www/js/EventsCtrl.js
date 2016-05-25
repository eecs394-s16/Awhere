angular.module('awhere.controllers')

.controller('EventsCtrl', function($scope, $ionicScrollDelegate, Preset) {

  $scope.viewStateEnum = {
    HOT: 0,
    CATEGORIES: 1,
    CATEGORY: 2
  };

  $scope.viewState = $scope.viewStateEnum.HOT;
  $scope.category = '';
  $scope.events = testEvents;
  $scope.categories = testCategories;

  $scope.currentPreset = Preset.find(JSON.parse(localStorage.getItem('currPreset')));
  console.log($scope.currentPreset);

  $scope.toggleView = function(state) {
    $scope.viewState = state;
    $ionicScrollDelegate.scrollTop();
  };

  $scope.changeCategory = function(category) {
    $scope.category = category;
  };

  $scope.categoryFilter = function(event) {

    if ($scope.currentPreset)
    {
      var foundCategory = false;
      if ($scope.currentPreset.interests.length == 0) {
        if (event['price'].indexOf("Free") != -1 || parseInt(event['price']) <= parseInt($scope.currentPreset.price)) {
          return true;
        }
        else {
          return false;
        }
      };

      for (var i = 0; i < $scope.currentPreset.interests.length; i++){
        $scope.category = $scope.currentPreset.interests[i];
        if (event['title'] === "Segal Seminar Series: John Bielenberg"){
          console.log(event['primary category'], $scope.category);
        }

        if ([event['primary category'], event['secondary category'], event['3rd category']].indexOf($scope.category) > -1) {
          if (event['price'].indexOf("Free") != -1 || parseInt(event['price']) <= parseInt($scope.currentPreset.price)) {
            foundCategory = true;
            console.log("found category");
            break;
          }
        }
      }
      return foundCategory;
    }
    else {
      console.log("There is no preset");
      return true;
    }

  };

  $scope.printPrice = function(price) {
    if (price.indexOf("Free") != -1)
      return "Free";
    else
      return "$" + price;
  }

});

//These will be removed when Database gets implemented.  So i put them at the bottom of the file as globals.
var testCategories =
[
  "Academic:Engineering / Design", "Academic:Business / Economics", "Academic:Sciences", "Other:Unique", "Academic:Education and Organization",
   "Athletic:Varsity", "Athletic:Club", "Arts:Music", "Academic:English / Journalism / Lit"
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
    "primary category": "Academic:Engineering / Design",
    "secondary category": "Academic:Business / Economics",
    "3rd category": "",
    "img": "http://bloggingtips.moneyreigninc.netdna-cdn.com/wp-content/uploads/2014/12/Event-Blogging-Strategies.jpg"
  },
  {
    "title": "Hack Nights",
    "date": "4/13/2016",
    "price": "Free",
    "location": "the garage",
    "time": "7-10pm",
    "brief description": "hackathon 4 fun",
    "primary category": "Academic:Sciences",
    "secondary category": "Academic:Business / Economics",
    "3rd category": "Academic:Engineering / Design"
  },
  {
    "title": "Design Chicago",
    "date": "4/6/2016",
    "price": "Free",
    "location": "Allen Center",
    "time": "4-6:30 pm",
    "brief description": "3 major design leaders lecturing",
    "primary category": "Academic:Engineering / Design",
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
    "primary category": "Academic:Business / Economics",
    "secondary category": "Academic:Engineering / Design",
    "3rd category": ""
  },
  {
    "title": "\"The Master's Hand\"",
    "date": "4/13/2016",
    "price": "Free",
    "location": "Harris Hall 107",
    "time": "4:00 PM",
    "brief description": "intelligent design?",
    "primary category": "Other:Unique",
    "secondary category": "Academic:Education and Organization",
    "3rd category": ""
  },
  {
    "title": "NU vs INDIANA women's tennis",
    "date": "4/10/2016",
    "price": "Free w/ card",
    "location": "South Tennis Courts",
    "time": "11/2/2016",
    "brief description": "women's tennis",
    "primary category": "Athletic:Varsity",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "BodyPump!",
    "date": "4/11/2016",
    "price": "18",
    "location": "SPAC",
    "time": "6:15 - 7:15 am",
    "brief description": "barbell class",
    "primary category": "Athletic:Club",
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
    "primary category": "Academic:Business / Economics",
    "secondary category": "Academic:Education and Organization",
    "3rd category": ""
  },
  {
    "title": "Bell Up!",
    "date": "4/12/2016",
    "price": "10",
    "location": "SPAC",
    "time": "7:30 - 9 pm",
    "brief description": "intermediate belly dancing",
    "primary category": "Athletic:Club",
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
    "primary category": "Other:Unique",
    "secondary category": "",
    "3rd category": ""
  },
  {
    "title": "Harmonica 101",
    "date": "4/13/2016",
    "price": "5",
    "location": "Norris",
    "time": "8:00 PM",
    "brief description": "learn the harmonica",
    "primary category": "Arts:Music",
    "secondary category": "Academic:Education and Organization",
    "3rd category": ""
  },
  {
    "title": "Neurobiology Club Intro meeting",
    "date": "4/14/0216",
    "price": "Free",
    "location": "2220 campus dr",
    "time": "12 - 1 pm",
    "brief description": "Write about neurobiology",
    "primary category": "Academic:Sciences",
    "secondary category": "Academic:English / Journalism / Lit",
    "3rd category": "Academic:Education and Organization"
  },
  {
    "title": "Judith Kimble",
    "date": "4/14/2016",
    "price": "Free",
    "location": "Pancoe",
    "time": "1-2 pm",
    "brief description": "learn about neurobiology",
    "primary category": "Academic:Sciences",
    "secondary category": "Academic:Education and Organization",
    "3rd category": ""
  }
  ];

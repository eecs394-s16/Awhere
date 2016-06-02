angular.module('awhere.services')

.factory('Event', function() {

  var testEvents = 
  [
  {
    "title": "Segal Seminar Series: John Bielenberg",
    "date": "6/12/2016",
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
    "date": "6/13/2016",
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
    "date": "6/6/2016",
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
    "date": "6/7/2016",
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
    "date": "6/13/2016",
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
    "date": "6/10/2016",
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
    "date": "6/11/2016",
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
    "date": "6/11/2016",
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
    "date": "6/12/2016",
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
    "date": "6/13/2016",
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
    "date": "6/13/2016",
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
    "date": "6/14/0216",
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
    "date": "6/14/2016",
    "price": "Free",
    "location": "Pancoe",
    "time": "1-2 pm",
    "brief description": "learn about neurobiology",
    "primary category": "Academic:Sciences",
    "secondary category": "Academic:Education and Organization",
    "3rd category": ""
  }
  ];
  
  return {
  	all: function(){return testEvents;}
  }
});
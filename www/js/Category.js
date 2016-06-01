angular.module('awhere.services')

.factory('Category', function() {
  var categories = [
    {name:          "Professional / Future Schooling", 
     subcategories: ["Graduate School", 
                     "Career"]},
    {name:          "Academic", 
     subcategories: ["Engineering / Design", 
                     "Math", 
                     "Sciences", 
                     "Languages",
                     "English / Journalism / Lit",
                     "Music",
                     "Business / Economics",
                     "Social Sciences / History",
                     "Psych / Cog Sci",
                     "Education and Organization",
                     "Other"]},
    {name:           "Athletic",
     subcategories:  ["Varsity",
                      "Club",
                      "Intramural"]},
    {name:           "Social",
     subcategories:  ["Club Sponsored",
                      "Greek Life Sponsored",
                      "Other"]},
    {name:           "Arts",
     subcategories:  ["Theater",
                      "Music",
                      "Dance",
                      "Comedy",
                      "Film",
                      "Other"]},
    {name:            "Other",
     subcategories:  ["Food",
                      "Philanthropy / Service",
                      "Unique"]}
                        ];
  var concatenations = [];
  for (var i = 0; i < categories.length; i++){
    for(var j = 0; j < categories[i].subcategories.length; j++){
      concatenations.push(categories[i].name + ":" + categories[i].subcategories[j]);
    }
  }
  return {
    all: function(){ return categories; },
    concatAll: function() {
      return concatenations;
    }
  };
});
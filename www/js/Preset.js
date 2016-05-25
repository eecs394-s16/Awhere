angular.module('awhere.services')

.factory('Preset', function() {
  var presets = JSON.parse(localStorage.getItem('presets'));
  console.log(presets);

  if (!presets)
    presets = []

  var updateLocalStorage = function() {
    localStorage.setItem('presets', JSON.stringify(presets));
  };

  return {
    all: function() {
      return presets;
    },
    find: function(id) {
      for(var i=0; i<presets.length; i++){
        if (presets[i].id === id) {
          return presets[i];
        }
      }
      return null;
    },
    add: function(preset) {
      var newid;
      if (presets.length > 0) {
        newid = presets[presets.length - 1].id + 1;
      } else {
        newid = 0;
      }
      preset.id = newid;
      presets.push(preset);
      updateLocalStorage();
    },
    update: function(id, preset) {
      for(var i=0; i<presets.length; i++){
        if (presets[i].id === id) {
          presets[i] = preset;
          updateLocalStorage();
          return;
        }
      }
    },
    delete: function(id) {
      for(var i=0; i<presets.length; i++){
        if (presets[i].id === id) {
          presets.splice(i, 1);
          updateLocalStorage(); 
          return;
        }
      } 
    }
  };
});
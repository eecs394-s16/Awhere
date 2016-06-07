angular.module('awhere.services')

.factory('Preset', function() {
  var presets = JSON.parse(localStorage.getItem('presets'));
  var currentPreset = JSON.parse(localStorage.getItem('currPreset'))

  if (!presets)
    presets = []

  var updateLocalStorage = function() {
    localStorage.setItem('presets', JSON.stringify(presets));
    localStorage.setItem('currPreset', JSON.stringify(currentPreset));
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
    },
    getCurrent: function(){
      for(var i=0; i<presets.length; i++){
        if(presets[i].id === currentPreset){
          return presets[i];
        }
        console.log("Panic! Current preset not found (Is it null?)");
      }
      return null;
    },
    setCurrent: function(id){
      currentPreset = id;
      updateLocalStorage();
    }
  };
});
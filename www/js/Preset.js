angular.module('awhere.services')

.factory('Preset', function() {
  var presets = JSON.parse(localStorage.getItem('presets'));

  if (!presets)
    presets = []

  var updateLocalStorage = function() {
    localStorage.setItem('presets', JSON.stringify(presets));
  };

  return {
    all: function() {
      return presets;
    },
    find: function(index) {
      return presets[index];
    },
    add: function(preset) {
      presets.push(preset);
      updateLocalStorage();
    },
    update: function(index, preset) {
      presets[index] = preset;
      updateLocalStorage();
    },
    delete: function(index) {
      presets.splice(index, 1);
      updateLocalStorage();  
    }
  };
});
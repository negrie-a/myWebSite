"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
  	   migration.renameColumn('Projects', 'Slider', 'slider');
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

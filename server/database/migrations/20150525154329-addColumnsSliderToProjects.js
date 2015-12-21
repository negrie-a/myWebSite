"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
			'Projects',
			'slider',
			DataTypes.STRING
			)
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

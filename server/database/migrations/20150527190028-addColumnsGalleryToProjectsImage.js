"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when 
        migration.addColumn(
			'ProjectsImage',
			'gallery',
			{
				type : DataTypes.INTEGER,
				defaultValue: 0
			})
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('ProjectsVideo', {
  			id: {
  				type: DataTypes.INTEGER,
  				primaryKey: true,
  				autoIncrement: true
  			},
  			createdAt: {
  				type: DataTypes.DATE
  			},
  			updatedAt: {
  				type: DataTypes.DATE
  			},
  			'fk-id-projects': DataTypes.INTEGER,
  			video : DataTypes.STRING
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

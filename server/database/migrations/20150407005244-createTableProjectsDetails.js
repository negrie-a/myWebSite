"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
   	migration.createTable('ProjectsDetails', {
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
  			title: DataTypes.STRING,
  			section : DataTypes.STRING,
  			img1: DataTypes.STRING,
  			img2 : DataTypes.STRING
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

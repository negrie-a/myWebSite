"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
  	migration.createTable('Project', {
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
  			title: DataTypes.STRING,
  			resume: DataTypes.STRING,
  			resumeIntro: DataTypes.STRING,
  			start : DataTypes.DATE,
  			language : DataTypes.STRING,
  			team : DataTypes.INTEGER,
  			time : DataTypes.INTEGER
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
  	  migration.createTable('SkillsLanguage', {
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
  			language : DataTypes.STRING,
  			text : DataTypes.TEXT,
  			type: DataTypes.STRING,
  			degres : DataTypes.INTEGER
  		});
    // add altering commands here, calling 'done' when finished
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

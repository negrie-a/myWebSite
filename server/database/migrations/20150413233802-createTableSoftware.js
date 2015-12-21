"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
     migration.createTable('SkillsSoftware', {
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
  			software : DataTypes.STRING,
  			degres : DataTypes.INTEGER
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

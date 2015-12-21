"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Contact', {
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
  			'get-in-touch' : DataTypes.TEXT,
  			location : DataTypes.STRING,
  			phone : DataTypes.STRING,
  			email : DataTypes.STRING,
  			facebook : DataTypes.STRING,
  			linkedin : DataTypes.STRING,
  			twitter : DataTypes.STRING,
  			google : DataTypes.STRING
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

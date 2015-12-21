"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
      migration.createTable('Profil', {
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
  			name : DataTypes.STRING,
  			'date-of-birth' : DataTypes.DATE,
  			nationality : DataTypes.STRING,
  			adress : DataTypes.TEXT,
  			phone : DataTypes.STRING,
  			email : DataTypes.STRING,
  			resume : DataTypes.TEXT,
  			'cv-path' : DataTypes.STRING
  		});
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

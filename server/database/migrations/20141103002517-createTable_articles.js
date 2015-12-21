"use strict";

module.exports = {
	up: function(migration, DataTypes, done) {
		migration.createTable('Articles', {
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
			article : DataTypes.TEXT,
			img : DataTypes.STRING
		});
		done();
	},

	down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
}
};

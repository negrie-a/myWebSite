"use strict";

module.exports = {
	up: function(migration, DataTypes, done) {
		'SkillsRecognition',
		'text',
		DataTypes.TEXT
		done();
	},

	down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
}
};

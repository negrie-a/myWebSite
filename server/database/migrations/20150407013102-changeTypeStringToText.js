"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.renameTable('Project', 'Projects');

    migration.changeColumn(
    	'Projects',
    	'resume',
    	DataTypes.TEXT
    	);

    migration.changeColumn(
    	'Projects',
    	'resume-intro',
    	DataTypes.TEXT
    	);
    migration.changeColumn(
    	'ProjectsDetails',
    	'section',
    	DataTypes.TEXT
    	);
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

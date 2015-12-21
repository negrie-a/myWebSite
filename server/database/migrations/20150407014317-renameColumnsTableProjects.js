"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.renameColumn('Projects', 'resumeIntro', 'resume-intro');
    done();
  },

  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    done();
  }
};

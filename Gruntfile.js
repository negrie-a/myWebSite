module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev: {
				script: 'server/bin/server.js'
			}
		},

		concat: {
			js: {
				src: ['public/app.module.js', 'public/app.routes.js', 'public/core/*', 'public/components/**/*Service.js', 'public/components/**/*Controller.js', 'public/shared/**/*Directive.js','public/assets/libs/javascript/*.js', 'public/indexController.js'],
				dest: 'public/dist/project.js',
			},

			css: {
				src: ['public/assets/fonts/*.css', 'public/assets/libs/css/*.css', 'public/dist/project.css'],
				dest: 'public/dist/project.css',
			}
		},

		sequelize: {
			options: {
				config:     __dirname + '/server/database/config.json',
				migrations: __dirname + '/server/database/migrations',
			}
		},

		uglify: {
			js: {
				files: {
					'public/dist/project.min.js': ['public/dist/project.js']
				}
			}
		},

		less: {
			development: {
				files: {
					'public/dist/project.css': ['public/assets/less/style.less']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'public/dist/project.min.css': ['public/dist/project.css']
				}
			}
		},

		watch : {
			css : {
				files : ['public/assets/less/*/*.less', 'public/assets/libs/css/*.css'],
				tasks : ['less', 'concat:css', 'cssmin'],
				options : {spawn : false} 
			},

			js : {
				files : ['public/app.module.js', 'public/app.routes.js', 'public/core/*', 'public/components/**/*Service.js', 'public/components/**/*Controller.js', 'public/shared/**/*Directive.js', 'public/assets/libs/javascript/*.js', 'public/indexController.js'],
				tasks : ['concat:js', 'uglify'],
				options : {spawn : false} 
			}
		}

	});
	//Load Module Grunt
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sequelize');

	var builtCss = ['less', 'concat:css', 'cssmin'];
	var builtJs = ['concat:js', 'uglify'];
	var built = builtJs.concat(builtCss);

	grunt.registerTask('built:css', builtCss);
	grunt.registerTask('built:js', builtJs); 
	grunt.registerTask('built', built);

	grunt.registerTask('default', built.concat(['nodemon']));
}
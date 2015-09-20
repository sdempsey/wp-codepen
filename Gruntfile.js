var timer = require("grunt-timer");

module.exports = function(grunt) {
	timer.init(grunt, {deferLogs: true, friendlyTime: true});
  	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		autoprefixer: {
			debug: {
				options: {
					map: true,
				},
				expand: true,
				flatten: true,
				src: 'css/src/main.css',
				dest: 'css'
			}
		},
		clean: { 
			debug: {
				src: ["css/src"]
			},
		},
		concat: { 
			debug: {
				src: 'js/src/*.js',
				dest: 'js/main.js'
			}
		},
		jshint: { 
			debug: {
				options: {
					jshintrc: true
				},
				files: {
					src: ['js/src/*.js']
				}
			}
		},
		modernizr: {
		    debug: {
		        "devFile" : "remote",
		        "outputFile" : "js/vendor/modernizr-custom.min.js",
		        "uglify" : true,
		        "parseFiles" : true,
		        "files" : {
		            "src": ['js/main.js', 'css/main.css']
		        },
		        "matchCommunityTests" : false,
		    }

		},
		watch: { 
			options: {
				spawn: false
			},
			js: {
				files: ['js/src/**/*.js'],
				tasks: ['js']
			},
			css: {
				files: ['scss/**/*.scss'],
				tasks: ['css']
			}
		},
		sass: { 
			debug: {
				options: {
					sourceMap: true,
					precision: 3
				},
				files: {
					'css/src/main.css': 'scss/main.scss'
				}
			}
		},
		browserSync: {
			debug: {
				bsFiles: {
					src: [
						'js/main.js',
						'css/main.css',
						'*.html'
					]
				},
				options: {
					watchTask: true,
					proxy: 'wp-codepen.dev', 
					port: 1337 
				}
			}
		}     	
	});
	require("load-grunt-tasks")(grunt);
	require("load-grunt-tasks")(grunt);
	grunt.registerTask('js', ['jshint', 'concat']);
	grunt.registerTask('css', ['sass', 'autoprefixer', 'clean']);
	grunt.registerTask('default', ['browserSync', 'watch']);
}
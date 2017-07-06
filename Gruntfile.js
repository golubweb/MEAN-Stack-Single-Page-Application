module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'client/public/dist/style.css': 'client/public/assets/scss/style.scss'
				}
			}
		},
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass', 'watch']);
};

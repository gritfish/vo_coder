module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-csv2json');
	grunt.loadNpmTasks('grunt-exec');
	// Project configuration.
	grunt.initConfig({
		clean: ['./build'],
		
		csv2json: {
			options: {
				inputFilePath: './src/csv',
				outputFilePath: './build/data'
			}
		},
		exec: {
			fetch: 'node vocoder.js'
		}

	})


	grunt.registerTask('default',['csv2json:lines', 'exec:fetch'])
};


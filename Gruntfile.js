module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'tsc',
                options: {
                    module: 'commonjs',
                }
            }
        },
        browserify: {
            base: {
                src: ['tsc/index.js'],
                dest: 'dist/index.js'
            }
        },
        serve: {},
    });

    grunt.registerTask('build', ['typescript', 'browserify']);
    grunt.registerTask('start', ['build', 'serve']);

};

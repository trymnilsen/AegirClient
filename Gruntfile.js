module.exports = function(grunt) {
    require('time-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Typescript
        typescript: {
            base: {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                dest: 'js/app.js',
                options: {
                    removeComments: false,
                    sourceMap: true,
                    noEmitOnError: false
                }
            },
            nodebug: {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                dest: 'js/app.js',
                options: {
                    removeComments: false,
                    sourceMap: false
                }
            }
        },
        tslint: {
            options: {
              configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
              src: ['src/file1.ts', 'src/file2.ts']
            }
        },
        //Documenting the typescript
        typedoc: {
            build: {
                options: {
                    out: 'doc',
                    name: 'my-project'
                },
                src: ['ts/**/*']
            }
        },
        //Compiling the less styles
        less: {
            development: {
                options: {
                    paths: ["style"]
                },
                files: {
                    "style/style.css": "style/main.less"
                }
            }
        },
        //Inline data
        inlinedata: {
            ints: {
                expand: true,
                src: ['ts/**/*.ts'],
                dest: 'tmp/',
                cwd: ".",
                //ext: '.ts',
                options :{
                    relativeTo : false,
                    escape: true
                }
            }
        },
        clean : ['tmp/'],
        uglify: {
            prod: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'js/app.js.map', // input sourcemap from a previous compilation
                },
                files: {
                    'js/app.min.js': ['js/app.js'],
                },
            },
        },

});
    grunt.loadNpmTasks('grunt-typedoc');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-inline-data');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tslint');

    // Default task(s).
    //Runs all tasks suitable for development (Use uglify at own will)
    grunt.registerTask('default', ['clean',
                                    'inlinedata',
                                    'typescript:base',
                                    'less',
                                    'uglify']);

    //Runs all tasks but the uglify and also does not generate sourcemap
    grunt.registerTask('nodebug', ['clean',
                                    'inlinedata',
                                    'typescript:nodebug',
                                    'less']);

};
module.exports = function(grunt) {
    require('time-grunt')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        constProps: {
            "typescriptSource" : "ts/**/*.ts",
            "typescriptInlinedSource" : "tmp/ts/**/*.ts"
        },
        //Typescript
        typescript: {
            base: {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                dest: 'js/build/app.js',
                options: {
                    removeComments: false,
                    sourceMap: true,
                    noEmitOnError: false
                }
            },
            nodebug: {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                dest: 'js/build/app.js',
                options: {
                    removeComments: false,
                    sourceMap: false
                }
            },
            test : {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                dest: 'js/app.js'
            }
        },
        tslint: {
            options: {
              configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
              src: ['ts/**/*.ts', "!ts/typings/*.d.ts"]
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
        clean : {
            temp  : ['tmp/'],
            doc         : ['doc/']
        },
        uglify: {
            prod: {
                options: {
                    sourceMap: true,
                    sourceMapIncludeSources: true,
                    sourceMapIn: 'js/build/app.js.map', // input sourcemap from a previous compilation
                },
                files: {
                    'js/build/app.min.js': ['js/build/app.js'],
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
    grunt.registerTask('default',   ['clean:temp',
                                    'inlinedata',
                                    'typescript:base',
                                    'less',
                                    'tslint',
                                    'uglify',
                                    'clean:doc',
                                    'typedoc']);
    //Development tasks - does not lint atm
    grunt.registerTask('dev',       ['clean:temp',
                                    'inlinedata',
                                    'typescript:base',
                                    'less']);

    //Runs all tasks but the uglify and also does not generate sourcemap
    grunt.registerTask('nodebug',   ['clean:temp',
                                    'inlinedata',
                                    'typescript:nodebug',
                                    'less']);
    //Runs only typescript
    grunt.registerTask('min',       ['clean:temp',
                                    'inlinedata',
                                    'typescript:base',
                                    'less',
                                    'uglify']);
    //Report tasks..
    grunt.registerTask('report',    ['clean:doc',
                                    'typedoc']);
    //Run Tests only
    grunt.registerTask('test',      ['clean:temp',
                                    'inlinedata',
                                    'typescript:base',
                                    'typescript:test']);

};
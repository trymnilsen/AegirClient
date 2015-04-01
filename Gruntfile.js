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
        ts: {
            options: {
                compile: true,                 // perform compilation. [true (default) | false]
                removeComments: false,
                target: 'es5',                 // target javascript language. [es3 | es5 (grunt-ts default) | es6]
                sourceMap: true,               // generate a source map for every output js file. [true (default) | false]
                htmlModuleTemplate: 'App.Template.<%= filename %>',    // Template for module name for generated ts from html files [(default) '<%= filename %>']
                noEmitOnError: false
            },
            base: {
                //Fetch the template inlined version
                src: ["ts/**/*.ts"],
                html: ["ts/**/*.html"],
                out: "js/build/app.js"
            },
            nodebug: {
                //Fetch the template inlined version
                src: ['ts/**/*.ts'],
                html: ["ts/**/*.html"],
                out: 'js/build/app.js',
                options: {
                    sourceMap: false
                }
            },
            test : {
                //Fetch the template inlined version
                src: ['tmp/ts/**/*.ts'],
                out: 'js/app.js'
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
            options: {
                out: 'dist',
                module: 'commonjs',
                target: 'es5',
                out: 'doc/',
                name: 'App',
                mode: 'File',
                hideGenerator: true,
            },
            src: ['ts/**/*.ts']
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
        clean : {
            build       : ['js/build/'],
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
    grunt.loadNpmTasks('typedoc');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-tslint');

    // Default task(s).
    //Runs all tasks suitable for development (Use uglify at own will)
    grunt.registerTask('default',   ['clean:build',
                                    'ts:base',
                                    'less',
                                    'uglify',
                                    'clean:doc',
                                    'typedoc']);
    //Development tasks - does not lint atm
    grunt.registerTask('dev',       ['clean:build',
                                    'ts:base',
                                    'less']);

    //Runs all tasks but the uglify and also does not generate sourcemap
    grunt.registerTask('nodebug',   ['clean:build',
                                    'ts:nodebug',
                                    'less']);
    //Runs only typescript
    grunt.registerTask('min',       ['clean:build',
                                    'ts:base',
                                    'less',
                                    'uglify']);
    //Report tasks..
    grunt.registerTask('report',    ['clean:doc',
                                    'typedoc']);
    //Run Tests only
    grunt.registerTask('test',      ['clean:build',
                                    'ts:base',
                                    'ts:test']);

};
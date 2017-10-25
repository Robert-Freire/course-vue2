'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
var merge = require('webpack-merge');

build.sass.setConfig({
    sassMatch: []
});

build.configureWebpack.setConfig({
    additionalConfiguration: function(config) {
        var vueConfig = {
            module: {
                rules: [{
                    test: /\.vue$/,
                    use: [{
                        loader: 'vue-loader',
                        options: {
                            esModule: true
                        }
                    }]
                }]
            },
        };

        return merge(config, vueConfig);
    }
});

let copyWebJobSubTask = build.subTask('copy-webjob-subtask', function(gulp, buildOptions, done) {
    //    console.log(buildOptions);
    return gulp
        .src('./src/webparts/helloWorld/*.js')
        .pipe(gulp.dest(buildOptions.libFolder))
        .pipe(gulp.dest(buildOptions.tempFolder));
});

let copyWebJob = build.task('copy_webjob', copyWebJobSubTask);

build.rig.addPostTypescriptTask(copyWebJob);

build.initialize(gulp);

build.copyStaticAssets.setConfig({
    includeExtensions: ['vue', 'scss']
});

build.initialize(gulp);
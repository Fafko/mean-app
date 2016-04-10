'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./public/gulp/config');
const register = require(`./public/gulp/utils`);

register(gulp, plugins, config)([
    'build-js',
    'build-less',
    'copy',
    'watch'
]);

gulp.task('build', ['build-js', 'build-less', 'copy']);
gulp.task('default', ['build', 'watch']);
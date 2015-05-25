'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('./Content/Sass/**/*.scss')
        .pipe(sass({
            includePaths: ['styles'].concat(neat)
        }))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./Content/Styles'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./Content/Sass/**/*.scss', ['sass']);
});

//browsersync
gulp.task('browserSync', function () {
    var files = [
       'Scripts/**/*.js',
       'Content/**/*.css',
       'Views/**/*.cshtml'
    ];

    browserSync.init(files, {

        proxy: "http://localhost:4392/"
    });
});

gulp.task('default', ['sass:watch', 'browserSync']);
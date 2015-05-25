'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var browserSync = require('browser-sync');
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

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

gulp.task('js:transpile', function () {
    //return gulp.src('./Scripts/Src/**/*.js')
    //    .pipe(babel())
    //   .pipe(gulp.dest('./Scripts'));

    browserify({
        entries: './Scripts/Src/main.js',
        debug: true
    })
    
    .transform(babelify)
    .bundle()
    //.on('error', )
    .pipe(source('main.js'))
    .pipe(gulp.dest('./Scripts'));

});

gulp.task('js:watch', function () {
    gulp.watch('./Scripts/Src/**/*.js', ['js:transpile']);
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

gulp.task('default', ['sass:watch', 'browserSync', 'js:watch']);
var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var htmlMinify = require("gulp-htmlmin");
var cssMinify = require("gulp-clean-css");
var sass = require("gulp-sass");
var jsMinify = require("gulp-minify");
var imageMinify = require("gulp-smushit");

gulp.task('html-minify', function() {
	return gulp.src('./src/*.html').pipe(htmlMinify({ collapseWhitespace: true })).pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
	return gulp.src('./src/scss/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./src/css/'));
});

gulp.task('css-minify', function() {
	return gulp.src('./src/css/*.css').pipe(cssMinify({ compatibility: 'ie8' })).pipe(gulp.dest('./build/css/'));
});

gulp.task('js-minify', function() {
  return gulp.src('./src/js/*.js').pipe(jsMinify({ ext: {src: '', min: '.js'}, exclude: ['libs'], ignoreFiles: [] })).pipe(gulp.dest('./build/js/'));
});

gulp.task('image-minify', function() {
	return gulp.src('./src/img/*').pipe(imageMinify({ verbose: true })).pipe(gulp.dest('./build/img/'));
});

gulp.task('watch', function(){
	gulp.watch(['./src/*.html'], ['html-minify']);
	gulp.watch(['./src/scss/*.scss'], ['sass']);
	gulp.watch(['./src/css/*.css'], ['css-minify']);
	gulp.watch(['./src/js/*.js'], ['js-minify']);
	gulp.watch(['./src/img/*'], ['image-minify']);
})

gulp.task('default', ['watch'], function() {
	gulpUtil.log("Gulp Configured");
});

var express = require('express');
var app = express();
app.use("/", express.static(__dirname));
app.listen(8081);
console.log("Server listening on port 8081");

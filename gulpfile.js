'use strict';

var gulp 			= require('gulp');
var sass 			= require('gulp-sass');
var cssnano			= require('gulp-cssnano');
var sourcemaps 		= require('gulp-sourcemaps');
var imagemin 		= require('gulp-imagemin');
var concat 			= require('gulp-concat');
var uglify 			= require('gulp-uglify');

var pngquant 		= require('imagemin-pngquant');

///////////////////////////////////////
// SASS COMPILE
///////////////////////////////////////
gulp.task('sass', function() {
	gulp.src('./scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./css'));
});


///////////////////////////////////////
// CSS MINIFY
///////////////////////////////////////
gulp.task('cssnano', function() {
	return gulp.src('./css/main.css')
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'));
});

///////////////////////////////////////
// IMAGE MINIFY
///////////////////////////////////////
gulp.task('imagemin', function() {
	return gulp.src('./images/*')
		.pipe(imagemin({
			progressive:true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/images/'));
});


///////////////////////////////////////
// JAVASCRIPT CONCATENATE
///////////////////////////////////////
gulp.task('scripts', function() {
	return gulp.src('./scripts/src/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('./scripts/main.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'))
});

///////////////////////////////////////
// JAVASCRIPT MINIFY
///////////////////////////////////////
gulp.task('uglify', function() {
	return gulp.src('./scripts/main.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});

///////////////////////////////////////
// WATCH FOR CHANGES
///////////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', ['sass', 'cssnano', 'imagemin', 'scripts']);
	gulp.watch('./css/*.scss', ['sass', 'cssnano', 'imagemin', 'scripts']);
	gulp.watch('./images/*', ['sass', 'cssnano', 'imagemin', 'scripts']);
	gulp.watch('./scripts/*', ['sass', 'cssnano', 'imagemin', 'scripts', 'uglify']);
});

gulp.task('default', ['sass', 'imagemin', 'cssnano', 'scripts', 'uglify', 'watch']);
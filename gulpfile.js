'use strict';
//------------------- DEPENDENCIES -------------------//
var gulp 					= require('gulp');
var sass 					= require('gulp-sass');
var cssnano					= require('gulp-cssnano');
var sourcemaps 				= require('gulp-sourcemaps');
var imagemin 				= require('gulp-imagemin');
var concat 					= require('gulp-concat');
var uglify 					= require('gulp-uglify');
//var notify 					= require('gulp-notify');
var autoprefixer 			= require('gulp-autoprefixer');

var pngquant 				= require('imagemin-pngquant');
var browserSync 			= require('browser-sync');
//var reload		 			=  browserSync.reload;
//------------------- DEPENDENCIES -------------------//


///////////////////////////////////////
// BROWSER SYNC
///////////////////////////////////////
gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./app"
	});

	gulp.watch('./app/scss/**/*.scss', ['sass']);
	gulp.watch('./app/css/*.css');
	gulp.watch('./app/scripts/**/*.js', ['scripts']);
	gulp.watch('./app/html/**/*.html').on('change', browserSync.reload);
	gulp.watch('./app/*.html').on('change', browserSync.reload);
});


///////////////////////////////////////
// SASS COMPILE
///////////////////////////////////////
gulp.task('sass', function() {
	gulp.src('./app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browser: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream())
		//.pipe(notify('SASS has been compiled successfully'));
});



///////////////////////////////////////
// CSS MINIFY
///////////////////////////////////////
gulp.task('cssnano', function() {
	return gulp.src('./app/css/main.css')
		.pipe(sourcemaps.init())
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/'))
		//.pipe(notify('CSS has been minified successfully'));
});

///////////////////////////////////////
// IMAGE MINIFY
///////////////////////////////////////
gulp.task('imagemin', function() {
	return gulp.src('./app/images/*')
		.pipe(imagemin({
			progressive:true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/images/'))
		//.pipe(notify('images has been minified successfully'));
});


///////////////////////////////////////
// JAVASCRIPT CONCATENATE
///////////////////////////////////////
gulp.task('scripts', function() {
	return gulp.src('./app/scripts/src/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./app/scripts/'))
		.pipe(browserSync.stream())
		//.pipe(notify('JavaScript has been concatenated successfully'));
});

///////////////////////////////////////
// JAVASCRIPT MINIFY
///////////////////////////////////////
gulp.task('uglify', function() {
	return gulp.src('./app/scripts/main.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
		//.pipe(notify('JavaScript has been minified successfully'));
});


////////////////////////////////////////////
// WATCHES FOR SCSS + CSS + SCRIPTS CHANGES
///////////////////////////////////////////
gulp.task('watch', function() {
	gulp.watch('./app/scss/**/*.scss', ['sass']);
	gulp.watch('./app/css/*.css');
	gulp.watch('./app/scripts/src/*.js', ['scripts']);
	gulp.watch('./app/html/**/*.html');
});

////////////////////////////////////////
// BUILDS PRODUCTION FOLDER 
////////////////////////////////////////
gulp.task('dist', ['sass', 'cssnano', 'scripts', 'uglify', 'imagemin'], function() {
	console.log('SUCCESS: File fully compiled :)');
});

///////////////////////////////////////
// GULP DEFAULT
///////////////////////////////////////
gulp.task('default', ['serve', 'sass', 'scripts','watch']);
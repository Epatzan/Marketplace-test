 var gulp = require('gulp');
 var browserify = require('gulp-browserify');
 var jshint = require('gulp-jshint');
 var minify = require('gulp-uglify');
 var rename = require('gulp-rename');
 var livereload = require('gulp-livereload');
 var less = require('gulp-less');
 var minifyCss = require('gulp-minify-css');


 gulp.task('less', function(){
 	 return gulp.src('src/less/main.less')
 		.pipe(less())
 		.pipe(minifyCss())
 		.pipe(rename({
 			suffix:'.min'
 		}))
 		.pipe(gulp.dest('./public/css'))
 		.pipe(livereload());
 	
 });
 gulp.task('livereload',function(){
 	var tinylr = require('tiny-lr')();
 	tinylr.listen(4002);
 });

 gulp.task('hint',function(){
 	gulp.src('src/js/**/*.js')
 	.pipe(jshint())
 	.pipe(jshint.reporter('default'))
 	.pipe(livereload());
 });

gulp.task('browserify', function(){
	gulp.src(['src/js/app.js'])
	.pipe(browserify({
		insertGlobals : true,
		debug: true
	}))	
	.pipe(gulp.dest('./public/js'))
	.pipe(minify({
		mangle:false
	}))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('./public/js'))
	.pipe(livereload());
});


gulp.task('default',['less','livereload','browserify','hint'],function(){
	gulp.watch(['src/less/main.less','src/less/**/*.less'],['less']);
	gulp.watch(['src/js/app.js','src/js/**/*.js'],['hint','browserify']);
});

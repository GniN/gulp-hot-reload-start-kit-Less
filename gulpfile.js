var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var pixrem = require('gulp-pixrem');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cached');
gulp.task('browser-sync', function() {
    browserSync.init({
    	files: ["./**/*.html", "./**/*.png", "./**/*.js", "./**/*.css"],
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('less', function () {
	return gulp.src('./less/*.less')
	.pipe(cache('lessing'))
	.pipe(less({}))
	.pipe(pixrem({
		rootValue: '10px',
		atrules: true,
		// rootValue: '100%'
		replace: true
	}).on('error', function(err){
	        console.log(err.toString());
	        this.emit('end');
    }))
	.pipe(autoprefixer({
		browsers: ['last 5 versions']
	}))
	.pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
	gulp.watch('./**/*.less', ['less']);
});
gulp.task('bs', ['browser-sync', 'less', 'watch']);
gulp.task('default', ['bs']);
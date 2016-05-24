var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var reload = browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('src/assets/sass/**/*.scss')
		.pipe($.sourcemaps.init())
		.pipe($.sass().on('error', $.sass.logError))
		.pipe($.autoprefixer({browser: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('src/assets/css/'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src('public/js/**/*.js')
});

gulp.task('webpack', function() {
	exec('npm start', function(err, stdout, stderr) {
		console.log( stdout );
		console.log( stderr );
	});
});

gulp.task('browser-sync', function() {
	browserSync.init({
		proxy: 'localhost:1122',
		port: 1144,
        open: false,
		browser: "google chrome",
		notify: false,
		files: [
			'public/js/**/*.js',
			'public/**/*.html',
		]
	});
});

gulp.task('watch', function() {
	gulp.watch('src/assets/sass/**/*.scss', ['sass'], reload);
});

gulp.task('default', ['sass', 'watch', 'webpack', 'browser-sync']);

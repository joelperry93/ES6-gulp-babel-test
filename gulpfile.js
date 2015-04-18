var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

gulp.task("watch", function () {
    gulp.watch('./js/main.js', ['compile'])
});  

gulp.task('compile', function () {
    browserify({
        entries: './js/main.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./js/dist'))
});
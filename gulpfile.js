var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("watch", function () {
    gulp.watch('es6.js', ['modules'])
});  



gulp.task('modules', function () {
    browserify({
        entries: './es6.js',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
});
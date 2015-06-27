var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('default', ['build']);
gulp.task('build', ['js', 'css']);

gulp.task('js', function() {
    // JSX Files are bundled before transformation,
    // it is better to only apply the transform once.
    return browserify('./src/jsx/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('./src/css/app.css')
        .pipe(gulp.dest('dist'));
});

var gulp = require('gulp'),
    rename = require('gulp-rename');

gulp.task('config', function () {
    return gulp.src('./app/config/env.js.default')
        .pipe(rename('env.js'))
        .pipe(gulp.dest('./app/config'));
});
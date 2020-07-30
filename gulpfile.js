var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function () {
    return gulp.src('./styles/style.css')
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('html', function () {
    return gulp.src('index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('img', function () {
    return gulp.src('img/*')
    .pipe(gulp.dest('./build/img'));
});
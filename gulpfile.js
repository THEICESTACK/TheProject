var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');



gulp.task('sass', function () {
    return gulp.src('./dist/assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('./dist/assets/sass/*.scss', ['sass']);
});

gulp.task('minify-css', function () {
    return gulp.src('./dist/assets/css/style.css')
        .pipe(minifyCSS({ keepSpecialComments: 1 }))
        .pipe(gulp.dest('./dist/assets/minifycss'));
});

gulp.task('default', ['sass', 'watch']);
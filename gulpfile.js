var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');



gulp.task('sass', function () {
        .pipe(sass())
});

gulp.task('watch', function () {
});

gulp.task('minify-css', function () {
        .pipe(minifyCSS({ keepSpecialComments: 1 }))
});

gulp.task('default', ['sass', 'watch']);

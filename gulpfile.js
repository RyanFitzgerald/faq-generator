var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');

gulp.task('compress', function() {
    return gulp.src('faq-generator/faq-generator.js')
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('faq-generator'));
});

gulp.task('sass', function() {
    return gulp.src('faq-generator/faq-generator.scss')
        .pipe(sass())
        .pipe(autoprefix())
        .pipe(gulp.dest('faq-generator'));
});

gulp.task('watch', ['compress', 'sass'], function() {
    gulp.watch('faq-generator/*.js', ['compress']);
    gulp.watch('faq-generator/*.scss', ['sass']);
});
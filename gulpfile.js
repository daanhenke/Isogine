const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const traceur = require('gulp-traceur');
const concat = require('gulp-concat');

gulp.task('build-client', () => {

    return gulp.src('src/Client/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(traceur({modules: 'inline'}))
        .pipe(concat('game.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/javascript'))
});
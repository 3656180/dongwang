var gulp = require('gulp');
    
   
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost",
        watchTask: true
    });
});


gulp.task('styles', function(){
    gulp.src('layouts/style.sass')

        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 10%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('layouts/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
    return gulp.src(['scripts/vendor/jquery.min.js','scripts/vendor/bootstrap/bootstrap.min.js',
                        'scripts/vendor/*.js','scripts/frontend/*.js'])

        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch("layouts/**/*.scss", ['styles']);
    gulp.watch("scripts/**/*.js", ['scripts']);
});
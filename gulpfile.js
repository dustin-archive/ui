'use strict'

// node modules
var gulp = require('gulp')

// gulp plugins
var sass = require('gulp-sass')
var jade = require('gulp-jade')

// source directories
var open_sass = 'scss/**/*.scss'
var open_jade = '*.jade'

// destination directories
var save_css = 'css'
var save_html = ''

// gulp tasks
gulp.task('sass', function () {
  gulp.src(open_sass)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(save_css))
})

gulp.task('jade', function () {
  gulp.src(open_jade)
    .pipe(jade())
    .pipe(gulp.dest(save_html))
})

gulp.task('build', ['sass', 'jade'])

gulp.task('watch', function () {
  gulp.watch(open_sass, ['build'])
  gulp.watch(open_jade, ['build'])
})

var gulp = require('gulp');
var zip = require('gulp-zip');
var replace = require('gulp-replace');

var ZIP_RESOURCE_PATH = './dist/**';
var ZIP_OUT_DIR = './out';
var DEV_ZIP_NAME = 'dist-test.zip';
var PRD_ZIP_NAME = 'dist.zip';

gulp.task('build:dev', function() {
  return gulp.src(ZIP_RESOURCE_PATH)
    .pipe(zip(DEV_ZIP_NAME))
    .pipe(gulp.dest(ZIP_OUT_DIR));
});

gulp.task('build:prd', function() {
  return gulp.src(ZIP_RESOURCE_PATH)
    .pipe(zip(PRD_ZIP_NAME))
    .pipe(gulp.dest(ZIP_OUT_DIR));
});
var gulp = require('gulp'),
    inject = require("gulp-inject"),
    del = require('del'),
    jade = require('gulp-jade')
    sass = require('gulp-ruby-sass')
    autoprefixer = require('gulp-autoprefixer')
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    nodemon = require('gulp-nodemon')
    ngAnnotate = require('gulp-ng-annotate');
    // livereload = require('gulp-livereload')
    // injectReload = require('gulp-inject-reload')


// inject app js files into index.html
gulp.task('injectjs', function () {
  var target = gulp.src('./public/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./public/app/**/*.js'], {read: false});
  return target.pipe(inject(sources, { ignorePath: 'public', addRootSlash: false }))
    .pipe(gulp.dest('./public'));
});


gulp.task('injectjs:build', ['scripts'], function() {
  var target = gulp.src('./public/index.html');
  var sources = gulp.src(['./dist/app/app.min.js'], {read: false});
  return target
    .pipe(inject(sources, {ignorePath: 'dist', addRootSlash: false }))
    .pipe(gulp.dest('./dist'));
})

// gulp.task('injectreload', function(){
//   return gulp.src('./public/index.html')
//   .pipe(injectReload({ host: 'http://localhost' }))
//   .pipe(gulp.dest('./public'));
// });

// compile jade templates to html
gulp.task('jade', function() {
  var YOUR_LOCALS = { pretty: true };

  return gulp.src('./public/app/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/app'))
});

gulp.task('styles', function() {
  return gulp.src('./public/app/app.scss')
    .pipe(sass({ style: 'expanded', "sourcemap=none": true }))
    .on('error', function (err) { console.log(err.message); })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(gulp.dest('./dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/app'))
  // .pipe(notify({ message: 'Styles task complete' }));
});

  gulp.task('scripts', function() {
    return gulp.src('./public/app/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(gulp.dest('./dist/app'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/app'))
    // .pipe(notify({ message: 'Scripts task complete' }));
});

// clean
gulp.task('clean', function(cb) {
    del.sync(['dist/*', '!dist/libs', '.sass-cache']);
    cb();
});

gulp.task('nodemon', function () {
  return nodemon({ script: 'server/app.js', ext: 'js' })
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('watch', function() {
  gulp.watch('./public/app/*.scss', ['styles']);
  gulp.watch('./public/app/**/*.jade', ['jade']);
});

gulp.task('default', ['clean', 'injectjs', 'jade', 'styles', 'nodemon'], function() {
  // watch .scss files
  gulp.watch('./public/app/*.scss', ['styles']);
  gulp.watch('./public/app/**/*.jade', ['jade']);

  // create livereload server
  // livereload.listen();
  // gulp.watch(['./dist/**', './public/app/**/*.js']).on('change', livereload.changed);

  // watch .js files
  // gulp.watch('./public/app/**/*.js', ['scripts']);

});

gulp.task('build', ['clean', 'scripts', 'injectjs:build', 'jade', 'styles'], function() {
  gulp.src('./public/pics/**/*')
    .pipe(gulp.dest('./dist/pics'))
  gulp.src('./public/favicon.ico')
    .pipe(gulp.dest('./dist'))
  gulp.src('./public/robots.txt')
    .pipe(gulp.dest('./dist'))
});




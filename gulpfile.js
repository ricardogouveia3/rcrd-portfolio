/****************/
/* Dependencies */
/****************/

let gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require ('gulp-sass'),
  concat = require ('gulp-concat'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  //uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  watch = require('gulp-watch'),
  htmlbeautify = require('gulp-html-beautify'),
  browserSync = require('browser-sync').create();



/*************/
/* Dev Tasks */
/*************/

gulp.task('pugDev', () => {
  return gulp.src('pug/**/*.pug')
    .pipe(pug())
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('build/'));
});

gulp.task('sassDev', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('jsDev', () => {
  return gulp.src('js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest('build/js'));
});

// Main dev Task
gulp.task('dev', ['pugDev', 'sassDev', 'jsDev']);



/***************/
/* Build Tasks */
/***************/

gulp.task('pugBuild', () => {
  return gulp.src('pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/'));
});

gulp.task('sassBuild', () => {
  return gulp.src(['assets/sass/*.sass', 'assets/sass/partials/*.sass'])
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('build/assets/css'));
});

gulp.task('jsBuild', () => {
  return gulp.src('js/*.js')
    //.pipe(uglify())
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('imageBuild', () => {
  return gulp.src('assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/assets/img'));
});

// Main Build Task
gulp.task('build', ['pugBuild', 'sassBuild', 'jsBuild', 'imageBuild'], () => {});



/****************/
/* Server Tasks */
/****************/

gulp.task('watch', ['browserSync', 'pugDev', 'sassDev', 'jsDev'], () => {

  gulp.watch(['pug/**/*.pug'], ['pugDev', browserSync.reload]);
  gulp.watch('assets/sass/**/*.sass', ['sassDev']);
  gulp.watch('js/*.js', ['jsDev', browserSync.reload]);

});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'build',
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
  });
});



/*****************/
/* Default Tasks */
/*****************/

gulp.task('default', ['watch'], () => {});

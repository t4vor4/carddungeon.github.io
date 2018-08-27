var gulp = require('gulp'),
sass = require('gulp-sass'),
watch = require('gulp-watch'),
sourcemaps = require('gulp-sourcemaps')

// Sass Source
var source = './' //pasta base  :)

var scssDesktop = source+'sass/estilo.scss'; //caminho até arquivo desktop

// aponta para todos os arquivos da pasta sass
var scssAll = source+'sass/*.scss'; 

// CSS destination
var cssDest = source; // aponta para a pasta de destino do css

// Options for development
var sassDevOptions = {
outputStyle: 'expanded',
 // outputStyle: 'compressed',
}

// ====================================================================================

// Tasks DESKTOP
// Task 'scssDesktop' - trabalha com elementos Desktop
gulp.task('sassdesktop', function() {
        return gulp.src(scssDesktop)
        .pipe(sourcemaps.init())
        .pipe(sass(sassDevOptions).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDest));
});

// ====================================================================================

gulp.task('watch', function() {
   gulp.watch(scssAll, ['sassdesktop']);
});

// Default task - Run with command 'gulp'
gulp.task('default', ['sassdesktop','watch']); 
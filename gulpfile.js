/*pull all required gulp plugins*/
var gulp = require("gulp"),
 jsdoc = require("gulp-jsdoc"),
 uglify = require("gulp-uglify"),
 shell = require("gulp-shell"),
 connect = require('gulp-connect');

/*Used to minify js*/
gulp.task("jsdoctry", function () {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
})

/*Used to generate js documents*/
gulp.task( 'jsdoc', shell.task( [
  'jsdoc ./src/*.js .'
] ) );

/*Used to create live server*/
gulp.task('connect', function(){
    connect.server({
        root: "dist",
        livereload: true
    })
})

/*Initiate gulp default task*/
gulp.task("default", ["jsdoctry","jsdoc", "connect"]);

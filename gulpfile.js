
var gulp = require("gulp"),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify-css'),
    csslint = require('gulp-csslint');
    jslint = require('gulp-jslint'),
    open = require('gulp-open'),
    watch = require('gulp-watch');


gulp.task('css:lint', function() {
   gulp.src('app.css')
    .pipe(csslint())
});
gulp.task('js:lint', function() {
   gulp.src('app.js')
    .pipe(jslint({
    	globals: ["document"],
    	predef: ["$", "document"]
    }))
});
gulp.task('js:uglify', function() {
   gulp.src('app.js')
    .pipe(uglify())
    .pipe(gulp.dest('min'));
});

gulp.task("css:minify", function(){
  gulp.src("app.css")
    .pipe(minify())
    .pipe(gulp.dest("min"));
});
gulp.task("watch", function(){
  gulp.watch("app.js",["js:uglify"]);
});

gulp.task("default",['css:lint','js:lint','css:minify','js:uglify'])

gulp.task('build', ['default'])

gulp.task('serve', function () {
    gulp.src('app.html')
        .pipe(open());
})

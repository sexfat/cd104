var gulp = require('gulp');
var cssUrls = require('gulp-css-urls');
 
gulp.task('cssUrls', function() {
  return gulp.src('./src/*.css')
    .pipe(cssUrls({
      prepend: 'http://cd103.com',
      append: '?version=3',
    }))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('css', ['cssUrls'])
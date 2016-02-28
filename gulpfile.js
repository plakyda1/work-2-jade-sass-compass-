var gulp = require('gulp'),
    jade = require('gulp-jade'),
    compass = require('gulp-compass');
  	//browserSync = require('browser-sync');

  // gulp.task('server', function () {
  // 	browserSync({
  // 		port: 9000,
  // 		server: {
  // 			baseDir: 'app'
  // 		}
  // 	});
  // });

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('app/jade/*.jade')
    .pipe(jade({
      pretty: '\t'
    }))
    .pipe(gulp.dest('app/dist'))
});

gulp.task('compass', function() {
  gulp.src('app/scss/main.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: 'app/dist/css',
      sass: 'app/scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('watch', function(){
		gulp.watch('app/jade/**/*.jade',['jade']);
    gulp.watch('app/scss/**/*.scss',['compass']);
	});

// gulp.task('watchin', function (){
// 	gulp.watch([
//     'app/*',
// 		'app/dist/*.html',
// 		'app/dist/css/**/*.css'
// 		]).on('change', browserSync.reload);
// });

gulp.task('default', ['watch']);

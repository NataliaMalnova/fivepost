'use strict';

import gulp from 'gulp';
import { paths } from '../gulpfile.js';


// -------------------------------------
//   Task: settings
// -------------------------------------

gulp.task('settings', function () {
  return gulp.src(paths.settings.src, {dot:true})
    .pipe(gulp.dest(paths.settings.dist));
});

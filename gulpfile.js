'use strict';

import gulp from 'gulp';
import yargs from 'yargs';

import {
  resolve
} from 'path';

const __dirname = resolve();

const argv = yargs().argv;
const production = !!argv.production;

if (production) {
  console.log('Production mode');
} else {
  console.log('Development mode');
}

const paths = {
  dist: './dist/',
  views: {
    src: './src/templates/**/*.html',
    pages: './src/templates/',
    components: './src/components/',
    helpers: './src/helpers/',
    data: './src/data/',
    dist: './dist/',
    watch: './src/**/*.{html,hbs}',
  },
  styles: {
    src: './src/styles/*.{scss,sass}',
    dist: './dist/assets/styles/',
    watch: './src/**/*.{scss,sass}',
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2,eot,ttf,svg}',
    dist: './dist/assets/fonts/',
    watch: './src/fonts/**/*.{woff,woff2,eot,ttf,svg}',
  },
  settings: {
    src: "./src/settings/*",
    dist: './dist/',
  },
  sprites: {
    src: "./src/img/svg-sprite/*.svg",
    dist: "./dist/assets/img/svg-sprite/",
    watch: "./src/img/svg-sprite/*.svg"
  },
  images: {
    src: [
      './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      '!./src/img/svg-sprite/*',
    ],
    dist: './dist/assets/img/',
    watch: './src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}',
  },
  scripts: {
    src: './src/js/main.js',
    dist: './dist/assets/js/',
    srcOther: './src/js/other/*.js',
    distOther: './dist/assets/js/other/',
    watch: './src/**/*.js',
  },
  vendors: {
    src: './src/vendors/**/*.*',
    dist: './dist/assets/vendors/'
  },
  assets: {
    dist: './dist/assets/',
  },
};

const config = {
  production: production,
  plumber: {
    errorHandler: function (error) {
      this.emit('end');
    }
  },
  fileInclude: {
    prefix: '@@',
    basepath: __dirname,
    context: {},
  }
};

// -------------------------------------
//   All tasks
// -------------------------------------

import './tasks/clean.js';
import './tasks/fonts.js';
import './tasks/images.js';
import './tasks/scripts.js';
import './tasks/sprites.js';
import './tasks/styles.js';
import './tasks/vendors.js';
import './tasks/views.js';
import './tasks/webserver.js';
import './tasks/settings.js';

// -------------------------------------
//   Task: default
// -------------------------------------

gulp.task('default',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'images', 'fonts', 'views', 'sprites', 'vendors', 'settings'), 'server'));


// -------------------------------------
//   Task: build
// -------------------------------------

gulp.task(
  'build',
  gulp.series('clean', gulp.parallel('styles', 'scripts', 'images', 'fonts', 'views', 'sprites', 'vendors', 'settings')));

export {
  paths,
  config
};
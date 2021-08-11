const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const autoprefixer = require( 'gulp-autoprefixer' );
const cssmin = require( 'gulp-cssmin' );
const rename = require( 'gulp-rename' );
const ghPages = require( 'gulp-gh-pages' );
const concat = require( 'gulp-concat' );
const webpack = require( 'webpack' );
const devServer = require( 'webpack-dev-server' );

const path = {
    build: {
        html: 'dist',
        js: 'dist/js',
        css: 'dist/css',
        fonts: 'dist/fonts',
        images: 'dist/images',
        data: 'dist/data'
    },
    src: {
        html: 'src/index.html',
        scss: 'src/scss/base.scss',
        js: 'src/js/*.js',
        fonts: 'src/fonts/*.woff',
        images: 'src/images/**',
        data: 'src/data/**'
    }
};

gulp.task( 'sass', function() {
    return gulp.src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.css))
});

gulp.task( 'html:build', function() {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html));
});

gulp.task( 'js:build', function() {
    return gulp.src(path.src.js)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.build.js));
});

gulp.task( 'fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task( 'images', function() {
    return gulp.src(path.src.images)
        .pipe(gulp.dest(path.build.images))
});

gulp.task( 'data', function() {
    return gulp.src(path.src.data)
        .pipe(gulp.dest(path.build.data))
});

gulp.task( 'build', gulp.series ('html:build', 'sass', 'js:build', 'fonts', 'images', 'data'));

gulp.task( 'deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});
const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const babel = require('gulp-babel');
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const bemValidator = require("gulp-html-bem-validator");

gulp.task('libs', () => {
    return gulp.src([
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./public/js/'))
});
gulp.task('scripts', () => {
    return gulp.src('./dist/js/index.js')
        .pipe(plumber())
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'))
});
gulp.task('styles', () => {
    return gulp.src("./dist/sass/style.+(scss|sass)")
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            overrideBrowserslist:['last 4 versions'],
            cascade:false
            }
        ))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./public/style"))
});
gulp.task('pug', () => {
    return gulp.src('./dist/pug/**/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(bemValidator())
        .pipe(gulp.dest('./public/'))
});
gulp.task('watch', () => {
    gulp.watch("./dist/sass/*.+(scss|sass)", gulp.parallel('styles')),
    gulp.watch("./dist/js/*.js", gulp.parallel('scripts')),
    gulp.watch("./dist/pug/*.pug", gulp.parallel('pug'));
});
gulp.task('server', () => {
    browserSync.init(["./public/style/*.css", "./public/js/*.js" , "./public"], {
        server: {
            baseDir: "./public/"
        }
    });
});
gulp.task('default', gulp.parallel('watch', 'libs', 'scripts','pug', 'styles', 'server'));
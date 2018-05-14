// 该文件用于放置开发环境下gulp调用的任务
var gulp = require('gulp');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
// less编译成css
var less = require('gulp-less');
// sass 编译成css
var sass = require('gulp-sass');
// 处理css中浏览器兼容的前缀
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var reload = browserSync.reload;
var Config = require('./gulpfile.config.js');

// gulp dev 开发环境
var dev = function () {
    // HTML文件
    gulp.task('html:dev', function () {
        return gulp.src(Config.html.src).pipe(gulp.dest(Config.html.dist)).pipe(reload({
            stream: true
        }));
    });


    /*assets 文件夹下的所用文件*/
    gulp.task('assets:dev', function () {
        return gulp.src(Config.assets.src).pipe(gulp.dest(Config.assets.dist)).pipe(reload({
            stream: true
        }));

    });

    /*css文件处理*/
    gulp.task('css:dev', function () {
        return gulp.src(Config.css.src).pipe(gulp.dest(Config.css.dist)).pipe(reload({
            stream: true
        }));
    });


    /*less文件处理*/
    gulp.task('less:dev', function () {
        return gulp.src(Config.less.src)
            .pipe(autoprefixer('last 2 version'))
            .pipe(less()).pipe(gulp.dest(Config.less.dist))
            .pipe(reload({
                stream: true
            }));
    });


    /*sass文件处理*/
    gulp.task('sass:dev', function () {
        return gulp.src(Config.sass.src)
            .pipe(autoprefixer('last 2 version'))
            .pipe(sass()).pipe(gulp.dest(Config.sass.dist))
            .pipe(reload({
                stream: true
            }));
    });
    /** 
     * 图片处理 
     */
    gulp.task('images', function () {
        return gulp.src(Config.img.src).pipe(gulp.dest(Config.img.dist));
    });


    // js输出
    gulp.task('js:dev', function () {
        return gulp.src(Config.js.src)
        //babel编译
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(Config.js.dist));
    });


    gulp.task('dev', ['html:dev', 'css:dev', 'less:dev', 'assets:dev', 'js:dev', 'images'], function () {
        browserSync.init({
            server: {
                baseDir: Config.dist
            },
            // notify: false
        });
        //Watch src 目录
        // gulp.watch(Config.html.src, ['src:dev']).on('change', reload);
        // Watch .html files  
        gulp.watch(Config.html.src, ['html:dev']).on('change', reload);
        // Watch .css files  
        gulp.watch(Config.css.src, ['css:dev']).on('change', reload);
        // Watch .scss files  
        gulp.watch(Config.less.src, ['less:dev']).on('change', reload);
        // Watch assets files  
        gulp.watch(Config.assets.src, ['assets:dev']).on('change', reload);
        // Watch .js files  
        gulp.watch(Config.js.src, ['js:dev']).on('change', reload);
        // Watch image files  
        gulp.watch(Config.img.src, ['images']).on('change', reload);
    });
}

//======= gulp dev 开发环境下 ===============
module.exports = dev;
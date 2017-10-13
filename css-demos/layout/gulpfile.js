// 引入gulp
var gulp = require('gulp');
// 引入gulpl-ess组件
var less = require('gulp-less');
// var cssmin=require('gulp-clean-css');
// var sourcemaps=require('gulp-sourcemaps');
// 浏览器同步
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// 静态服务器 + 监听 less/html 文件
gulp.task('serve', ['less'], function() {
    browserSync.init({
        // 静态服务器
        server: "./"
            // 代理
            // proxy:'localhost/gulptest'
    });
    gulp.watch("./less/*.less", ['less']);
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("./css/*.css").on('change', reload);
    gulp.watch("./js/*.js").on('change', reload);
});

// less编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("./css"))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);

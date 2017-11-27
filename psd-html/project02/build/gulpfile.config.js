// 源文件路径
var SRC_DIR = 'src/';
// 生成静态文件路径
var DIST_DIR = 'dist/';
var DIST_FILES = DIST_DIR + '**';

// 路径配置
var Config = {
    src: SRC_DIR,
    dist: DIST_DIR,
    dist_file: DIST_FILES,
    // html文件的路径
    html: {
        src: SRC_DIR + '*.html',
        dist: DIST_DIR
    },
    // assets文件的路径
    assets: {
        src: SRC_DIR + 'assets/**/*',
        dist: DIST_DIR + 'assets'
    },
    // css文件路径
    css: {
        src: SRC_DIR + 'css/*.css',
        dist: DIST_DIR + 'css'
    },
    // less文件路径
    less: {
        src: SRC_DIR + 'less/*.less',
        dist: DIST_DIR + 'css'
    },
    // js文件路径
    js: {
        src: SRC_DIR + 'js/**/*.js',
        dist: DIST_DIR + 'js',
        bulid_name: 'bulld.js'
    },
    // 图片文件路径
    img: {
        src: SRC_DIR + 'images/**/*',
        dist: DIST_DIR + 'images'
    }
};
// 暴露config变量
module.exports = Config;

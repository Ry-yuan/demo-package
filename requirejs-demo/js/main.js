// require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，
// 比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，本地的js我们也可以这样配置
require.config({
    //设置根路径
    baseUrl:"js",
    // 设置各个简称
    paths:{
        'hello' :'hello.js',
        'jquery' : ["http://code.jquery.com/jquery-2.2.4.min.js", "jquery-3.2.1.min"]
    }
})

// 这个文件在data-main中引用
# requirejs入门使用介绍
## （1）什么是requirejs
RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一。

## （2）requirejs好处
1.防止js加载阻塞页面，实现异步加载js文件  
2.采用调用的方式加载js，使得不用写一大堆script标签

## （3）使用
1.先引入requirejs，通过script标签
```html
<script data-main = "js/main.js" src ="js/require.js"></script>
```
2.data-main 是引入配置的js： main.js

```js
// require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，
// 比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，本地的js我们也可以这样配置
require.config({
    //设置根路径
    baseUrl:"js",
    // 设置各个简称
    paths:{
        'hello' :'hello',
        'jquery' : ["http://code.jquery.com/jquery-2.2.4.min.js", "jquery-3.2.1.min"]
    }
})
// 这个文件在data-main中引用
```

3.定义模块的方式：使用define，创建一个模块hello.js
```js
//使用define定义模块，AMD规范
define(function(){
    function hello(){
        alert('hello!');
    }
    hello();
}())
```
4.调用的js
```js
//通过require来引入模块：  
//第一个参数是一个数组，可以接受许多的模块。  
//第二个参数是一个callback函数，意思是在加载完模块之后所做的事情  
//callback函数接受参数，参数按顺序表示对应模块代表的变量
    require(["jquery","hello"],function($){
            $('#span').css('color','red');
        });
```        

[参考链接](http://www.runoob.com/w3cnote/requirejs-tutorial-1.html)
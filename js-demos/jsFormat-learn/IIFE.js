/*IIFE作用：
　　1.实现立即执行，不需要先声明再调用。

　　2.匿名函数自身不污染全局环境，同时为内部变量提供作用于环境空间。（现在主流的框架都是用这个方式来初始化命名空间的）

　　3.缩写形参有利于内部代码的压缩

　　4.提供闭包环境，可以做闭包想做的事情
*/

// 1.空间命名
var app = {};
(function(APP, undefined) {
    var i = 0;
    APP.say = function() {
        console.log('hi');

    }

}(app));

// 执行
app.say();


// 2.普通的IIFE
(function() {
    console.log('hello');
}());

//测试
(function() {
    var i = 0;
    var sayHello = function() {
        return console.log(i++);
    }
    sayHello();
    sayHello();
    sayHello();
    sayHello();

    function f() {
        console.log(i);
    }
    f();

}())

// console.log(i);

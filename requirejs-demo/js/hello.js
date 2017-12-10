//使用define定义模块，AMD规范
define(function(){
    function hello(){
        alert('hello!');
    }
    hello();
}())
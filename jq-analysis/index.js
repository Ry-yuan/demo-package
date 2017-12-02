// $.Deferred 异步管理的 简单的例子。
var d = $.Deferred();
setTimeout(function(){
    console.log('异步1');
    d.resolve();
},1000);
alert(2);
d.done(function(){console.log('异步2')});


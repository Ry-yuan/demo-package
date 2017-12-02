# 读jquery源码的笔记，在文件中有注释
## 1.立即执行函数形式，防止全局污染
> 整体构架
```js
(function(window, undefined) {
   // jQuery 代码
})(window);
```
### a.最后这里传入window ：
一方面方便查找，我们知道，在函数内部查找变量如果找不到就去外部找，这里直接传进去可以减少变量的查找范围。
另一方面是对于压缩代码有好处，压缩代码时可以对形参进行压缩，以至于里面直接使用一个w就可以了。
### b.在形参里面定义undefind，为了防止undefined在外面被修改。比如在ie6,78就可以被修改。在形参定义了undefined在函数内部会先找这个undefined。


## 2.无new构造
```js
//jquery的构造函数 通过new一个对象实例进行返回。
 jQuery = function(selector, context) {
        // 看这里，实例化方法 jQuery() 实际上是调用了其拓展的原型方法 jQuery.fn.init
        return new jQuery.fn.init(selector, context, rootjQuery);
    }


//jQuery.fn就是jQuery的原型对象。jQuery.fn = jQuery.prototype 
// jQuery.prototype 即是 jQuery 的原型，挂载在上面的方法，即可让所有生成的 jQuery 对象使用
    jQuery.fn = jQuery.prototype = {
        // 实例化化方法，这个方法可以称作 jQuery 对象构造器
        init: function(selector, context, rootjQuery) {
            // ...
        }
    }

//关键这一句话。
//这里将init这个构造函数的原型对象指向了jquery的原型对象
//也就是说，通过new init生成的实例可以调用jquery原型对象的方法了，所以用init所生成的实例相当于jquery的实例。
jQuery.fn.init.prototype = jQuery.fn;

//当我们创建一个jquery对象时：
$('div')  == new $.fn.init('div');  //init的实例，共享着jquery的原型对象中的方法。

```
## 3.jQuery链式调用
举例子：  
```js
$('input[type="button"]')  
   .eq(0).click(function() {  
       alert('点击我!');  
}).end().eq(1)  
.click(function() {  
    $('input[type="button"]:eq(0)').trigger('click');  
}).end().eq(2)  
.toggle(function() {  
    $('.aa').hide('slow');  
}, function() {  
    $('.aa').show('slow');  
});  
```

解析：
type类型为button的input元素
找到第一个按钮，并绑定click事件处理函数
返回所有按钮，再找到第二个
为第二个按钮绑定click事件处理函数
为第三个按钮绑定toggle事件处理函数

jquery 的链式调用：通过每一次调用对象方法后返回this对象，来实现链式的调用。
//当使用JQ中的方法取值是一般都无法进行链式调用,
//原因是方法内部return的已经不是JQ实例本身了
jquery的回溯：可以看到每一次的找到按钮后都使用了end() 函数进行回溯，为了把当前的this指向$('input[type="button"]') 对象。


一个链式调用的例子：
```js
 var MyJQ = function(){
       }
        MyJQ.prototype = {
            css:function(){
               console.log("设置css样式");
                return this;
            },
           show:function(){
                console.log("将元素显示");
               return this;
            },
           hide:function(){
                console.log("将元素隐藏");
           }
       };
    var myjq = new MyJQ();
    myjq.css().css().show().hide();

```
pushStack()方法，主要是保存前一个对象  
end() 进行回溯到前一个this.



# 4.extend方法，用于扩展jq的插件和对象的复制
jQuery.extend = jQuery.fn.extend = function(){。。。。}  
这样写相当于：jQuery.extend = function(){}    和 jQuery.fn.extend = function(){}
 
为什么可以连着写，也就是说实现同样的方法。因为this的指向不同，所以函数的执行效果也就不同了。  
第一个是指向的是jQuery函数，第二个是指向jQuery的实例对象。  

使用 jQuery.extend() 拓展的静态方法，我们可以直接使用 $.xxx 进行调用（xxx是拓展的方法名），
而使用 jQuery.fn.extend() 拓展的实例方法，需要使用 $().xxx 调用。  


### a.当只是传入一个对象字面量的时候就是对jq的一个拓展，也就是插件的拓展。
比如：注意名字取特殊点
$.extend({
aaa: "ry"
});

### b.也可以用于对象的继承，浅拷贝和深拷贝
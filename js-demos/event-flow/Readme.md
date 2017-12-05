# DOM的事件流问题

## 1.什么是DOM的事件流问题
DOM的事件流是分为三个步骤： 事件捕获阶段，处于目标阶段，事件冒泡阶段。  
对于每一个事件的触发执行都会进过这三个流程，除非阻止了执行。  

## 2.具体的三个步骤
1.事件捕获阶段：指的是你点击某一个元素时，其事件从最顶层的document，这个元素的父级元素，最后到这个元素的过程。  
2.处于目标阶段：指的是到达了你这个目标了，这是一个转折点。  
3.事件冒泡阶段：指的是从这个目标元素出发，又一层层的放回去，相当于逆向的事件捕获。

## 3.这个事件流有什么用
举个例子：  
```html
<html>
<body>
    <div class="box">
        I am div
        <p>
            I am p
            <span>
                I am span
            </span>
        </p>
    </div>
    <script>
        var box = document.querySelector('.box');
        var ele_p = document.getElementsByTagName('p')[0];
        var ele_span = document.getElementsByTagName('span')[0];
        box.addEventListener('click',function(){console.log('i am box')},true);
        ele_p.addEventListener('click',function(){console.log('i am p')});
        ele_span.addEventListener('click',function(){console.log(' i am span')});
    </script>
</body>
</html>
```

1.关系：我为div ，span，p都添加了点击的方法， div是span的父元素，span又是p的父元素。  
2.事件触发在什么时候由你说的算（默认在事件冒泡）：当我点击p时，会默认在事件冒泡时执行各个点击方法。当然可以通过设置  
addEventListener的第三个参数 为true来改变（改成在事件捕获时触发）。  
3.什么时候用：当你想为很多父元素添加事件是可以通过设置子元素了使得全部父元素得到事件的触发。当然如果发现事件冒泡机制导致程序出现不良的情况，也可以设置阻止。


## 总结：
就是说你在某个A元素中添加了某个事件，又在其父级元素添加相同的事件的话，那个触发A元素的事件时，其父元素也会被触发。默认再事件冒泡时触发，可以通过设置addEventListener的第三个参数来觉得在事件冒泡阶段触发还是在事件捕获阶段触发。 ok 就这样 。

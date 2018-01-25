
# let 和 const
### 1.let只在其块级内有效
```js
{
    let a = 'hello';
    var b = 'hahaha';
}
console.log(a);  //报错
console.log(b);  'hahaha'

```

### 2.let 不存在变量提升，所以必须先声明在使用
```js
console.log(x);  //报错
let x =  12;
```

### 3.暂时性死区：  
在代码块内，使用let命令声明变量之前，该变量都是不可用的。  
这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```js
//即使在外面定义了
var a = 'hello';
{
    console.log(a);  //报错
    //因为我在块中有let，那么a就被let锁定，在let前使用变量就报错
    let a;
}
```
#### 4.let 不能重复声明，注意一下


#### 5.es6中支持在块中声明函数，es5或前在块中声明函数是可能报错的

#### 6.do表达式：在块级作用域之前加上do，使它变为do表达式，然后就会返回内部最后执行的表达式的值
```js
//会返回b给x
let x = do {
    let t = 123;
    let b = 123+t;
}

```

#### 7.const声明一个只读的常量。一旦声明，常量的值就不能改变。const和let也是支持块级


# 解构：  
变量数组解构，对象解构，字符串解构，数值布尔值解构，函数参数解构

### （1）变量数组解构：
```js
//在数组中，按照一定的模式匹配到对应的变量，即可对其赋值
let [a,b,c] = [1,2,3];  //a=1,b=2,c=3
let [foo,[[bar],baz]  = [21,[[31],41]];  //foo=21 bar=31 baz=41
let [head,...tail] = [1,23,4,,124,2]; //head=1  tail=[23,4,124,2]
//没有解构成功
let [x,y] = [1] //x=1 y没有值，默认为undefined
//注意：等号两边必须是相同的解构，比如都是数组，右边的值如果不是数组，则解构失败，报错
//比如：以下都报错
let [foo] = false;
let [foo] = 1;
let [foo] = null;
let [foo] = {};

//解构可以设置默认值
let [x , y=1] = [3];  //x=3 y=1
```

### （2）对象的解构：



# 扩展：  
对常用的引用类型进行了扩展： 字符串，数值，数值，正则，函数，对象

### 扩展部分举例： 
#### 1.String对象扩展：
```js
//includes()某个字符串是否包含另一个字符串
var s = 'hello';
s.includes('he');  //true
//startsWith()某个字符串是否一另一个字符串开头
s.startsWith('hell');  //true
//endsWith()是否已某个字符串结尾 
s.endsWith('l');  //false
//repeat 将某个字符串重复n次,小于0或非数字都是0次
s.repeat(3);   //hellohellohello
//padStart()， padEnd() 在头或尾部补全长度
'ss'.padStart(6,'a');  //'aaaass'  用a从头部开始补全到6长度
//模板字符串${val}
//反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
var num = 12;
`the num is ${num*2} `  //"the num is 24"   大括号中可以放表达式

//还有模板编译没搞懂
```

#### 2.正则对象扩展

#### 3.函数对象扩展
```js
//1.允许默认值：es5时用的是||来变通，表示默认值：如y = y || 'world';
//es6允许了默认：
function fn(x, y = ' world'){
    console.log(x+y);
}
fn('hello');  //'hello world'

//2.rest参数  形式： ...变量名
//获取函数的多余参数，这样就不需要使用arguments对象
function a (...val){
    for(var i of val){
        console.log(i);
    }
}
a(12,2,1,21,1);  //12,2,1,21,1

//3.ES2016 做了一点修改，规定只要函数参数使用了
//默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式,否则会报错


//4.name 属性获得函数名
function foo(){
}
fn.name;  //"foo"


//5.箭头函数
//ES6 允许使用“箭头”（=>）定义函数。
function sum (n1,n2){
    return n1+n2;
}
//箭头函数表示
var sum = (n1,n2) => n1+n2;

//如果箭头函数的函数体多于一条语句 ， 用花括号括起来
var fn = (n1,n2) => {var n = 100; return n1+n2+n;}

//如果返回的是对象，用圆括号括起来
let getObj = (id)  => ({id:id,name:'jack'});


//箭头函数的一个用处是简化回调函数
[1,2,3].map(function(x){
        return x*2;
    }
)
//箭头写法
[1,2,3].map(x => x*2);

// 正常函数写法
var result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);

//箭头函数的this指向的是它外层函数的this，也就是说它的没有自己的this
```


数组扩展运算符：...  , 用于将数组转成用逗号分隔的参数列表：主要用于函数传递参数
```js
console.log(...[1,2,3]);   //1,2,3
```

# 新的数据结构：Set 和 Map
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```

#### 1.数组去重，用Set
```js
[...new Set(arr)];
```

# promise对象  
#### 1.Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

#### 2.用法：
```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
})
```

#### 3.Promise可以看做一个容器，里面写异步执行的代码，代码执行成功就执行resolve的回调函数，失败就执行reject的回调函数。


#### 4.Promise 新建后就会立即执行。
```js
let promise = new Promise(function(resolve, reject) {
  console.log('Promise');
  //成功执行后执行resolve方法
  resolve();
});
//这里用then来声明成功后的执行的函数
promise.then(function() {
  console.log('resolved.');
});

console.log('Hi!');

// Promise
// Hi!
// resolved
```




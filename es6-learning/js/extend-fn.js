// 函数对象扩展


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
);
//箭头写法
[1,2,3].map(x => x*2);

// 正常函数写法
// var result = values.sort(function (a, b) {
//   return a - b;
// });

// 箭头函数写法
// var result = values.sort((a, b) => a - b);

//箭头函数的this指向的是它外层函数的this，也就是说它的没有自己的this


// 6.函数参数解构
let json ={
    x:1,
    y:2
};
function fun({x,y}){
    console.log(x,y);
}
fun(json);


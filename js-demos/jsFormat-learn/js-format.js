// 1.变量的声明。多个变量同时声明使用一个var
var name = "jack",
    sex = "male",
    age = 22,
    i,
    j;

// 2.合理的注释
var myName = 'ry';
if (myName) {

    /*
     * 注释前有空行
     * 星号后有空格
     */
}


//3.合理命名,动词为前缀，get，set，can，has，is等等
function getName() {
    console.log("jack");
}
// getName();

//4.结尾使用分号，不省略分号,大括号后不用分号
function sayHello() {
    console.log("hello");
}
// sayHello();



//5.避免全局命名空间污染，IIFE,对象字面量
// 对象字面量
var app = {
    name: "jack",
    id: "123",
    getName: function() {
        console.log(name);
    }
};

console.log(app.id);
app.getName();



// 6.比较参数，使用恒等=== 代替 == ，！== 代替 ！=
// 因为==还进行类型的转换，如
function conp() {
    if ('123' == 123) {
        return true;
    } else {
        return false;
    }
}

console.log(conp()); //true


// 7.判断类型
// 不推荐的写法：用typeof来判断构造函数创建的对象
var str = new String('劳卜');

console.log(typeof str); // 'object'

// 推荐的写法：用instanceof来判断构造函数创建的对象
var str = new String('劳卜');

console.log(str instanceof String); // true



// 8.检测属性
// 不推荐的写法：使用undefined和null来检测一个属性是否存在
if (obj['name'] !== undefined) {
    console.log('name属性存在'); // 若obj.name为undefined时则会导致判断出错
}

if (obj['name'] !== null) {
    console.log('name属性存在'); // 若obj.name为null时则会导致判断出错
}

// 推荐的写法：使用in运算符来检测对象属性是否存在，使用hasOwnProperty方法来检测不包含原型链上的对象属性是否存在
if ('name' in obj) {
    console.log('name属性存在');
}

if (obj.hasOwnProperty('name')) {
    console.log('name属性存在');
}

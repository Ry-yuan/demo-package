// es6中对象拓展
// is()方法 比较对象
let obj1 = {name:'ry'};
let obj2 = {name:'ry'};
console.log(Object.is(obj1.name,obj2.name));


// assign合并对象
let a = {a:1};
let b = {b:2};
let c = {c:3};
let d = Object.assign(a,b,c);
console.log(d);
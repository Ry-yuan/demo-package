// 箭头函数arrow使用


// 函数思想；输入到输出的转变，一种映射的存在
// 箭头函数更加直接的表达了这种思想

// 例子1：
// es5时书写函数
function fn (n1,n2){
    return n1 + n2;
}
var sum = fn(12,33);   //45
console.log(sum);
// es6推出的箭头函数，当只有一句语句时不用花括号
var fn2 = (n1,n2) => n1 + n2;
console.log(fn2(12,100));


// 例子2，如果只有一个参数，参数中可以不用括号.一个简单的平方函数
var squareFn = n => n*n;
console.log(squareFn(2));

// 例子3： 函数体中有多句语句,使用花括号
var fn3 = (name,age)  => {console.log(`I am ${name}`);console.log(`I am ${age}`)};

fn3('ry',21);
// 1.let const拥有块级作用域
{
    let a = 21;
    var b = 32;
}
// 报错
// console.log(a);  

// 不报错
// console.log(b);


//2.不存在变量提升
//报错
// console.log(x);
// let x =  12;


// 3.不能够重复声明变量 ,报错
// let x = 12;
// let x = 1;


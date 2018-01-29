// 数值类型扩展


// 声明二进制binary  0b开头
let binary = 0b010101;
console.log(binary);
// 声明八进制Octal  0o开头
let octal = 0o666;
console.log(octal);

//判断一个数Number.isFinite()
let a = 12;
console.log(Number.isFinite(a));
// console.log(Number.isFinite('S'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(false));

// 判断是否非数字Number.isNaN()
console.log('是否NaN：'+Number.isNaN(12));


// 判断是否是整数 Number.isIteger()
console.log('是否整数'+Number.isInteger(123));


// 转换Number.parseInt
Number.parseInt(12.2);
console.log(Number.parseFloat('123.33$'));  //123.33

// 最大安全整数 最小安全整数 判断是否安全整数
// 通常一些比较大的数时判断 超出的建议转为字符串
console.log(Number.MAX_SAFE_INTEGER+1); 
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));  //true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));  //false





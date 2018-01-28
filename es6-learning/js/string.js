//String对象扩展：


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
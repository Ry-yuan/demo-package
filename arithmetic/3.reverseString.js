//翻转字符串
// 输入一条字符串str
// 输出翻转的字符串
// 1.简单的从后输出
function resverString1(str){
    var i= 0;
    var  result_str = "";
    for(i=str.length-1;i>=0;i--){
        result_str += str.charAt(i);
    }
    return result_str;
}

console.log(resverString1('afasgfewqr123'));


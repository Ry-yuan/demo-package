// 统计字符串中次数最多字母
// 输入的是字符串
// 输出出现次数最多的字母
// 思路：和数组去重的思路差不多，通过一个对象的，把每个字符作为对象的属性添加进去，并为其添加值（此处作为统计的值）

var s = "aqwerqweqwqqwerqwre";
// console.log(str.charAt(0));
function mostChar(str){
    // 一个对象obj
    var obj = {};
    var i = 0 ;
    for(i = 0 ; i<str.length; i++){
        //string也可以像数组一样使用下标来找值
        // 如果没有，就添加进去
        if(!obj[str.charAt(i)]){
            //赋值为1
            obj[str.charAt(i)] = 1;
        }
        // 如果已经存在了，值加一
        else{
            obj[str.charAt(i)] += 1;
        }
    }
    //最后比较得到最多出现的那个字符
    var max = 0;
    // 用于保存出现最多的字符
    var char = '';
    for(val in obj){
        // console.log(obj[val]);
        if(obj[val] > max) {
            max = obj[val];
            char = val;
        }
    }
    return char;
}
console.log("出现最多的字符是："+mostChar(s));
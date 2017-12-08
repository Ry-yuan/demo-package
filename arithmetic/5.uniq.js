// 数组去重：
// 输入一个数组arr
// 输出出重的数组result_arr
// 思路：创建一个对象obj，将数组的值作为对象的属性赋值为true（以此作为判断是否重复的条件，若已有该属性就跳过，从而达到去重目的）

function uniq(arr) {
    var i = 0;
    // 对象
    var obj = {};
    // 结果数组
    var result_arr = [];
    // 遍历arr的每一个值
    for (i = 0; i < arr.length; i++) {
        //1.一开始没有属性时，obj[arr[i]]为undefined，!undefined 的值是true，可以进入if中
        //2.如果已经存在了，!obj[arr[i]] == !true == flase  不可进入if
        if (!obj[arr[i]]) {
            // 进入就赋值为true
            obj[arr[i]] = true;
            //放到新数组中
            result_arr.push(arr[i]);
        }
    }
    return result_arr;
}
var a = ["12", 23, 14, 12, 23, 14, 1, 122, 1, 12];
console.log(uniq(a).toString());

function uniq2(arr){
}
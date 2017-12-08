// 冒泡算法:bubble
// 输入参数：一个数组arr
// 输出：排好序的数组
//  实现：
// 1.数组中两两比较，如果前一个数比后一个数大就交换位置，一直比较直到最大一个数到最后，这是一轮。
// 2.最大的已经排好序，下一轮重复比较，大的向上冒泡，不用再和排好序的数比较

function bubble(arr) {
    var i = 0,
        j = 0;
    var temp;
    //外层表示循环次数
    for (i = 1; i < arr.length; i++) {
        // 内圈比较
        for (j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

var a = [1, 23, 41, 51, 24,213,12,123,1111111];
console.log(bubble(a).toString());
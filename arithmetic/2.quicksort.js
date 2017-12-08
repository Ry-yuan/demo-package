// 快速排序quicksort
function quicksort(arr, low, high) {
    // 递归出口
    if (low < high) {
        var i = low,
            j = high,
            x = arr[i];

        while (i < j) {
            // 最右边的arr[j]开始和基准比较，如果arr[j]比基准大就向左移动
            while (i < j && arr[j] > x) {
                j--;
            }
            // 当右边的数比基准小，和左边基准为对调
            if (i < j) {
                arr[i] = arr[j];
                i++;
            }
            while (i < j && arr[i] < x) {
                i++;
            }
            if (i < j) {
                arr[j] = arr[i];
                j--;
            }
        }
        //基准回位
        arr[i] = x;
        // 左边递归
        quicksort(arr, low, i - 1);
        // 右边递归
        quicksort(arr, i + 1, high);
    }
}
var a = [1, 2, 341, 1, 123, 7, 777, 85, 3, 1, 12, 87, 8, 2];
quicksort(a, 0, a.length - 1);
console.log(a);
// set数据解构 不会有重复的值
// 使用方法new Set()
let setArr = new Set([1,2,3,4]);
// 添加add
setArr.add('a');
console.log(setArr);
setArr.add(1);
console.log(setArr);

// has查找
console.log(setArr.has(1));

// delete删除
setArr.delete(1);
console.log(setArr);

// 遍历set和arr一样
setArr.forEach(val=>console.log(val));
for(item of setArr){
    console.log(item);
}

// 长度
console.log('长度：'+setArr.size);


// WeakSet 参数是对象
let weakObj = new WeakSet();
let obj  =  {a:'ry',b:'yuan'};
weakObj.add(obj); 
console.log(weakObj);
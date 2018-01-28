// array-extend数组拓展

// 1.Array.form();  类数组转换成数组

let json = {
    0:1,
    1:'12',
    2:'ry',
    length : 3
};
console.log('from:  '+Array.from(json));  //[ 1, '12', 'ry' ]


// 2.Array.of() 将一组值转换成数组
console.log("of:  "+Array.of(2,3,4,5,5));  //[2,3,4,,5,5]



// 3.find()实例方法  查找
let arr = [1,2,3,4,5];
// find传入回调， function(){}  val代表当前值，index当前下标，arr当前数组
// 用于查找某满足条件的一个值
arr.find(function(val,index,arr){
    return val >5;
});


// 4.fill()替换
let arrFill = ['ry',1,2];
arrFill.fill('yuan',1,2);  //1参数是要替换成值，2参数是开始位置，3参数是结束位置但不包含
console.log('fill:  '+arrFill);


// 5.数组循环 for of
let arr5 = ['ry','元','yuan'];
console.log('输出值:')
for(let val of arr5){
    console.log(val);
}
//输出值时，用实例方法keys
console.log('输出下标：');
for(let key of arr5.keys()){
    console.log(key);
}
//都要输出时使用entries
console.log('值和下标都输出：');
for(let [vals, keys] of arr5.entries()){
    console.log(keys+ ' :'+ vals);
}

// 6.entries可以使得数组变成ArrayInterator
let list = arr5.entries();
//就可以这样用
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 7.in判断数组的值
let arr7 = [1,,3,4,5];
console.log('--------------in的使用----------');
//判断0位有没有值
console.log(0 in arr7);  //true
// 判断1位有没有值
console.log(1 in arr7);  //false


// 8.数组遍历的方法
console.log('----------数组遍历方式------------')
// forEach
let arr8 = ['ry','yuan','元'];
arr8.forEach((val,index)=>console.log(val,index));

//filter
arr8.filter((x)=>console.log(x));

//map 将会替换成1
console.log(arr8.map(x=>'1'));


// 9.数组转为字符串
console.log('---------数组转字符串--------');
let arr9 = [1,2,3];
console.log(arr9.toString());
console.log(arr9.join(''));
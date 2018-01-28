// proxy 代理
// es6 增强函数和对象方面 在真正方法处理之前预处理
let obj = {
    add:function(val){
        return val+1;
    },
    name : 'ry'
}

let pro = new Proxy({
    add:function(val){
        return val+1;
    },
    name : 'ry'
},{
    // get
    get:function(target,key,property){
        // console.log('hello get');
        console.log(target);
        // 要返回
        return target[key];
    },
    // set
    set:function(target,key,value,receiver){
        // 在改变某个值时
        console.log(`setting ${key} = ${value}` );
        // 一定要返回
        return target[key] = value;
    }
})

// 设置
pro.name = 'yuan';
console.log(pro.name);
// console.log(pro);
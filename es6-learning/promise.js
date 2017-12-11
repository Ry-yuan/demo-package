// promise 代表一个异步操作
// 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
// 此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

// 主要使用方法：将异步的代码放在promise的对象中（new 一个promise），然后返回这个promise对象，就可以调用该对象的方法then，catch，all，race等等。

// 例子
//fn1中将异步的代码放在了promise对象中（虽然只是在对象中，但是代码会被立即执行。异步代码执行成功调用resolve，失败调用reject）
//最后在函数中返回promise对象即可
function fn1 (){
    //异步代码放在promise对象中。promise接受一个函数作为对象，对象接受两个参数
    //一个resolve，一个reject，表示两个状态
    var p = new Promise(function(resolve,reject){
        //这里写一个定时器，一个异步代码
        setTimeout(function(){
            console.log('fn1异步代码执行了！');
            //调用resolve表示异步执行成功，并且可以传参数
            resolve('ok啦');
        },1000);
    });
    // 在这里返回一个这个promise对象
    return p;
}

//1.这里直接执行看上去promise没什么用。
// fn1();

//2.调用一下then，异步执行成功的回调函数
// fn1().then(function(data){
//     console.log(data);
// });

// 异步代码fn2
function fn2 (){
    var p = new Promise(function(resolve,reject){
        setTimeout(() =>{ console.log('fn2异步代码执行了');resolve('ok2啦')},2000);
    });
    return p;
}
// 异步代码fn3
function fn3(){
    var p = new Promise(function(resolve,reject){
        setTimeout(() => {console.log('fn3异步代码执行了');resolve('ok3啦')},3000);
    });
    return p;
}

// 3.正常使用promise的例子，使用链式的调用了，每个异步程序按照顺序进行。正确的打开方式
// fn1()
// .then(
//     function(data){
//         console.log(data);
//         return fn2();
//     }
// )
// .then(function(data){
//     console.log(data);
//     return fn3();
// })
// .then(function(data){
//     console.log(data);
// });


//4.失败reject的使用
function getNum(){
    var p = new Promise(function(resolve,reject){
        // 定时生成一个随机数
        setTimeout(function(){
            // 随机一个1-10的数
            var num  = Math.ceil(Math.random()*10);
            // 如果小于5的数就表示调用成功
            if(num<5) {
                resolve('success');
            }
            // 如果大于5表示失败
            else{
                reject('no success');
            }
        },1000);
    });
    return p;
}
 
// getNum().then(
//     // 第一个fuc处理成功，resolve后的情况，也就是reolve的回调
//     function (data){
//         console.log(data);
//     },
//     // 第二个func处理的是失败的情况，也就是是reject的回调函数
//     function (data){
//         console.log(data);
//     }
// );
// 这里的异步代码使用了setTimeout来模拟，真实的可能有ajax请求，或者是其他的异步操作


// 5.catch的使用,相当于then的第二个函数，指定reject的回调.
// 不同的是如果then中报错了，不会叫停整js程序，而是把错误传给catch执行
// getNum().then(function(data){
//     console.log(data);
//     console.log(a);
// }).catch(function(reason){
//     console.log(reason);
// });

// 6.promise.all的用法
// all接收一个数组参数，里面的值最终都算返回Promise对象。这样，三个异步操作的并行执行的
// Promise
// .all([fn1(), fn2(), fn3()])
// .then(function(results){
//     console.log(results);
// });


// 7.Promise.rece()用法
Promise
.race([fn1(), fn2(), fn3()])
.then(function(results){
    console.log(results);
});
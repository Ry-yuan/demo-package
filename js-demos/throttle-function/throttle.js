// 节流函数使用
// 1.什么是节流函数：
// 有一些事件会随着用户的操作不间断触发。比如：重新调整浏览器窗口大小（resize），浏览器页面滚动（scroll），鼠标移动（mousemove）
// 我们期望的是，比如在窗口调节完后才触发函数，而不是一直触发，一直触发会给浏览器带来压力，所以为了解决这个问题引入节流函数throttle


// 2.可能的影响：如果DOM 操作比如复杂，还不断的触发此类事件就会造成性能上的损失，导致用户体验下降（UI 反映慢、浏览器卡死等）


// a.不节流的情况下就会一直触发
// window.onresize = function(){
//     console.log('我被触发了，哈哈哈');
// }

//b.第一个节流函数：使用setTimeout 定时器实现节流函数
function throttle (delay){
    var timer = null;
    return function (){
        clearTimeout(timer);
        timer = setTimeout(function(){
            outfn();
        },delay);
    }
}
window.onmousemove = throttle(200);



// 第一个不能满足这种情况：比如用户一直触发事件，那么上面的节流就不会被运行，所以可以设置一个至少执行时间来定时执行
// c.第二个节流函数
var throttle2 = function (fn, delay, atleast) {
    var timer = null;
    var previous = null;

    return function () {
        var now = +new Date();

        if ( !previous ) previous = now;
        if ( atleast && now - previous > atleast ) {
            fn();
            // 重置上一次开始时间为本次结束时间
            previous = now;
            clearTimeout(timer);
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn();
                previous = null;
            }, delay);
        }
    }
};
function outfn(){
    console.log('我被触发了，呀呀呀');
}
window.onresize = throttle2(outfn,200,1000);
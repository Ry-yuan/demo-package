var vm = new Vue({
    // el绑定实例对象
    el: '#app1',
    // 数据data
    data: {
        items: []
    },
    // 页面加载完后处理里面的函数
    mounted: function() {
        this.get();
    },
    // 方法的绑定methods，一般在里面写函数
    methods: {
        // 定义了一个get的方法，用于请求数据
        get: function() {
            // 先保存vue实例的this
            _this = this;
            //发送get请求，在内部使用this.$http.get(url)
            // then函数是处理请求的两个参数，一个成功请求的函数，一个失败请求的参数
            this.$http.get('../assets/index.json').then(function(res) {
                // 将数据赋予items
                _this.items = res.body;
                console.log(res.body);
            }, function() {
                alert('请求失败处理'); //失败处理
            });
        },
    }
});

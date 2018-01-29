// map数据类型

let map = new Map();
// 表示a为key指向ry
// 添加值set
map.set('a','ry');
map.set('b','yuan');
console.log(map);

//取值get
console.log(map.get('a'));

// 删除delete
map.delete('a');
console.log(map);  //Map { 'b' => 'yuan' }

// size长度
console.log(map.size);

// has查找

console.log(map.has('b'));   //true

// clear全部删除
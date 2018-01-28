//class 

class Person{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.name = 'ry';
    }
    //class 里面方法直接写
    setName(name){
        return this.name = name;
    }

    skill(val){
        console.log(this.name + val);
    }

    add(){
        return this.x + this.y;
    }
}

// 使用new来实例化
let person1 = new Person(2,3);
// 方法使用
console.log(person1.add());
// person1.setName();
person1.skill(' skill:Font-End');


// 类的继承extends
class Student extends Person{

}
// 继承能够使用父类的属性和方法
let student = new Student();
student.setName('stu-ry');
student.skill(' skill:study');

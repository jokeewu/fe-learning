// 继承
// 1.原型链继承
// 2.构造函数继承（经典继承）

// 出现什么问题？解决什么问题？


// 原型链继承
// 缺点：
// 1.引用类型属性被所有实例共享
// 2.在创建子类实例时，不能向父类传递参数
function Parent () {
  this.name = '';
}

Parent.prototype.getName = function () {
  return this.name;
}

function Child () {
}

Child.prototype = new Parent();

// 引用类型属性被所有实例共享(父类形式)
// function Parent () {
//   this.names = ['jacky', 'jokee'];
// }


// 借助构造函数（经典继承）
// 优点：
// 1.避免引用类型被共享
// 2.可以向父类传递参数
// 缺点：
// 1.方法必须写在构造函数里面，且每次创建实例时，也会被创建
function Parent(name) {
  this.name = name;
}

function Child() {
  Parent.call(this, 'Jacky');
}


// 组合继承（原型链继承+经典继承）
function Parent (name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child () {
  Parent.call(this, 'Jacky');
}

Child.prototype = new Parent(); 
// 为什么不直接等于Parent.prototype？
// 等于Parent.prototype会在下面修改prototype中导致父类prototype发生变法（其本身是同一个对象）

Child.prototype.constructor = Child;


// 原型式继承
// 1.引用类型属性始终会共享

// ES5 Object.create 模拟实现
function createObj(o) {
  var F = function() {};
  F.prototype = o;
  return new F();
}


// 寄生式继承
// 1.同样存在引用类型被共享问题
// 2.方法被多次创建
function createObj(o) {
  var clone = Object.create(o);
  clone.getName = function () {
    console.log('hi');
  };
  return clone;
}


// 寄生组合式继承
function Parent () {
  this.name = '';
  this.colors = ['red', 'white', 'blue'];
}

Parent.prototype.getName = function () {
  return this.name;
};

function Child () {
  Parent.call(this); // 把属性"复制"过来
}

// Child.prototype = Parent.prototype; // 子类改变prototype父类也会跟着改变
// Child.prototype = new Parent(); // 导致子类原型上多了父类的属性

// 借助一个三者，解决以上问题
var F = function () {};
F.prototype = Parent.prototype;
Child.prototype = new F();
Child.prototype.constructor = Child;


// 对以上第三者的封装
function object(o) {
  var F = function () {};
  F.prototype = o.prototype;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent);
  prototype.constructor = child;
  child.prototype = prototype;
}
// 对象创建方式
// 1. 对象字面量
// 2. 构造函数
// 对象字面量 与 new 优缺点

// 参见：https://github.com/mqyqingfeng/Blog/issues/15

// 对象字面量
// 优点：简洁
// 缺点：单个对象
var jacky = {
  name: 'Jacky',
  age: 27
};

// 工厂模式
// 缺点:对象无法识别，所有实例指向一个原型
function createPerson (name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
    return this.name;
  };
  return o;
}

// 构造函数
// 优点：可以识别为一个特定的类型
// 缺点：每次实例创建，其方法都会创建（更大的内存消耗）
function Person (name) {
  this.name = name;
  this.getName = function () {
    console.log(this.name);
  };
}

// 构造函数优化
// 解决了以上构造函数每次创建实例，其方法也会创建的问题
// 缺点：不具有封装性
function Person (name) {
  this.name = name;
  this.getName = getName;
}

function getName () {
  return this.name;
}

// 原型模式（所有属性/方法挂在prototype对象上）
// 缺点：所有方法/属性共享；不能初始化参数
function Person (name) {
}

Person.prototype.name = 'Jacky';
Person.prototype.getName = function () {
  return this.name;
};

// 比以上有更好的封装
Person.prototype = {
  constructor: Person,
  name: 'Jacky',
  getName: function () {
    return this.name;
  }
};

// 组合构造函数+原型模式（属性/方法按需共享）
// 被广泛使用形式
// 缺点：封装不够完全
function Person (name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

// 动态原型模式
function Person(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype.getName = function () {
      return this.name;
    };
  }
}

// 不能用对象字面量修改原型
function Person(name) {
  this.name = name;
  if (typeof this.getName !== 'function') {
    Person.prototype = {
      constructor: Person,
      getName: function () {
        return this.name;
      }
    };
  }
}

var person1 = new Person('Jacky');
var person2 = new Person('Jokee');

person1.getName(); // TypeError: person1.getName is not a function

// 理解new执行过程是怎样的？
// 1.创建一个对象
// 2.设置原型
// 3.设置属性/方法
// 4.返回对象

// 寄生构造函数模式
function Person (name) {
  var o = new Object();
  o.name = name;
  o.getName = function () {
    return this.name;
  }
  return o;
}

// 稳妥构造函数模式
// 无法识别对象类型
// 不引用this
// 不使用new
function person (name) {
  var o = new Object();
  o.getName = function () {
    return name;
  };
  return o;
}
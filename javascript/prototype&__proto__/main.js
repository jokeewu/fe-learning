// 每个函数又一个prototype属性

// Function.__proto__
// Function.prototype

console.log(Function.prototype === Function.__proto__) // true

// 1.构造函数原型
// 2.实例对象原型
// 3.实例对象构造器

function Person (name, age) {
  this.name = name;
  this.age = age;
}

console.log(Person.prototype, Person.prototype.__proto__);
console.log(Person.prototype.constructor === Person); // true
console.log(Person.__proto__ === Function.prototype); // true
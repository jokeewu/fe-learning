// 参见：https://github.com/mqyqingfeng/Blog/issues/4
// 参见：https://github.com/mqyqingfeng/Blog/issues/5

// 变量提升
// 函数提升
// 谁的优先级更高？

// TODO：
// b未定义情况下
// 为什么console.log(typeof b)不报错？
// 为什么console.log(b)报错

// 变量提升
// 1.可被提前访问，但是其值为undefined
// 2.let/const定义的变量不具有该特性

console.log('typeof foo === ', typeof foo); // undefined
console.log('foo = ', foo); // undefined

// console.log(bar) // ReferenceError
// let bar = 1;

var foo = function () {};
console.log(typeof foo); // function

var foo = 10;
console.log(typeof foo); // number

// 函数提升
// 1.可在定义代码前调用

bar();

console.log('dd', bar);

var bar = 2;

function bar () {
  console.log('First bar was called');
}

function bar () {
  console.log('Last bar was called');
}

console.log(bar);

var bar = 1;

console.log(bar);

// 可执行代码
// 类型：全局代码/函数代码/eval代码

// 执行上下文栈（exception context stack, ECS）
// 当执行一个函数时，才会创建执行上下文，并压入执行上下文栈，当函数执行完毕就会弹出栈

console.log('===============================');

// ============================================== \\
// ============================================== \\
// ============================================== \\

// 执行上下文3个重要属性
// 1.变量对象
// 2.作用域链
// 3.this

// ==================== 执行上下文变量对象 =================== \\

// 变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明

// 全局上下文中的变量对象就是全局对象

// 函数上下文
// 活动对象（activation object, AO）表示变量对象

// 执行过程：分析/执行
// 1.进入执行上下文（分析），是否变量提升/函数提升在这一步完成？是的
// 2.代码执行

// 进入执行上下文（分析阶段）
//
// 函数所有形参（函数执行上下文）
// 1.由名称和对应值组成的变量对象被创建(以名称和对应值作为变量对象的属性及值)
// 2.没有实参，属性值设为undefined
// 3.如果未声明形参，函数执行调用时传入多个实参，参数放在arguments中
// 函数声明
// 1.由函数名及对应值作为变量对象的属性
// 2.如果变量对象存在相同的名称属性，覆盖
// 变量声明
// 1.由名称和对应值(undefined)作为变量对象的属性
// 2.如果变量名与形参名或函数名相同，不对其进行覆盖

function baz (a) {
  var b = 2;
  function c() {}
  var d = function () {};
  b = 3;
}

baz(2, 3);

AO = {
  arguments: {
    0: 2,
    1: 3,
    length: 2,
    // ...
  },
  a: 2,
  b: undefined,
  c: function c() {}, // reference to function c() {}
  d: undefined
}

// 代码执行
// 按顺序执行，根据代码修改变量对象的值

AO = {
  arguments: {
    // ...
  },
  a: 2, 
  b: 3,
  c: function c() {}, // reference to function c() {}
  d: function () {} // reference to function () {}
}

// 总结：
// 全局上下文的变量对象初始化是全局对象
// 函数上下文的变量对象初始化只包括 Arguments 对象（什么情况下？分析开始时）
// 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值
// 在代码执行阶段，会再次修改变量对象的属性值


// 未进入执行阶段之前，变量对象(VO)中的属性都不能访问！但是进入执行阶段之后，变量对象(VO)转变为了活动对象(AO)，里面的属性都能被访问了，然后开始进行执行阶段的操作。
// 它们其实都是同一个对象，只是处于执行上下文的不同生命周期。

// ===================== 执行上下文 作用域链 ================ \\

// 参考:https://github.com/mqyqingfeng/Blog/issues/6

// 查找变量过程：当前上下文变量对象->父级（词法层面）执行上下文变量对象->...->全局上下文变量对象（全局对象）
// 有多个变量对象构成的链表，就是作用域链
// 函数的作用域在定义时就确定了（词法作用域（静态作用域））
// 函数有个[[scope]]内部属性，函数创建时，就会保存所有父变量对象到其中
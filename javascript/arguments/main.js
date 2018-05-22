// arguments 类数组
// arguments 转数组
// arguments 属性
// arguments 对应参数绑定

function foo (name, age, sex) {
  'use strict';

  console.log(arguments)

  // ================================================
  // 类数组，拥有与数组相似的某些特性（长度/可遍历）
  // ================================================

  console.log('length:', arguments.length); // 具有长度
  // 可以遍历
  for(var i = 0, l = arguments.length; i < l; i++) {
    console.log(`参数${i+1}:`, arguments[i]);
  }
  // arguments.push(1) // TypeError

  // ================================================
  // 类数组转数组
  // ================================================

  var args1 = Array.prototype.slice.call(arguments, 0); // apply/call
  // var args11 = Array.prototype.splice.call(arguments, 0); // 会对原arguments进行修改
  var args12 = Array.prototype.concat.apply([], arguments);
  var args2 = [...arguments]; // 也可定义函数不定参数 function foo (...args) {}
  var args21 = Array.from(arguments);

  // ================================================
  // arguments属性
  // ================================================

  // length
  console.log('实参个数:', arguments.length)
  console.log('形参个数:', foo.length);

  // callee
  // 被调用函数本身，递归
  // 注：严格模式下报错
  // var selfFunc = arguments.callee;
  // console.log(selfFunc)

  // ================================================
  // arguments 同步问题
  // 非严格模式下:
  // 1.参数被传递，修改其值，修改arguments会同步，包括参数为undefined,null
  // 2.未传递参数，修改其值，arguments不会同步
  // 严格模式下
  // 均不会同步
  // 
  // ================================================

  name = 'hokee';
  console.log('name=hokee', name, arguments); // 解释 1.

  sex = '男';
  console.log('sex=男', sex, arguments); // 解释 2.

}

foo('jacky', 27);

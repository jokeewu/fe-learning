/**
 * 单例模式
 */

// 方法1:
// 构造器/函数执行
function Singlone() {
  if (Singlone._instance) {
    return Singlone._instance
  }
  // 使用new创建对象
  if (this.constructor === Singlone) {
    Singlone._instance = this
  } else {
    // 采用函数调用方式
    return new Singlone()
  }
}

// new Singlone() === Singlone()

// 方法2:
// 类静态方法
class Singlone {
  static getInstance() {
    if (!Singlone._instance) {
      Singlone._instance = new Singlone()
    }
    return Singlone._instance
  }

  // 闭包实现
  // static getInstance = (() {
  //   let _instance
  //   return () => {
  //     if (!_instance) {
  //       _instance = new Singlone()
  //     }
  //     return _instance
  //   }
  // })()
}

// Singlone.getInstance()

// 方法3:
// 闭包
let singlone = (function() {
  const prop = 'xxx'
  const method = function() {}
  return {
    prop,
    method
  }
})()

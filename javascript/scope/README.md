# 词法（静态）作用域和动态作用域

作用域是指程序源代码中定义变量的区域

JavaScript采用词法作用域，又叫做静态作用域

要点:

* 词法作用域，在函数定义时确定
* 动态作用域，在函数调用时确定

```javascript
var value = 123;

function foo () {
  console.log(value);
}

function bar () {
  var value = 456;
  foo();
}

bar(); // 123, JavaScript是静态作用域
```
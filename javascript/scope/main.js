// 词法作用域（静态作用域）:代码编写时确定
// 动态作用域：函数被调用时确定

// JavaScript是静态作用域
// 函数的作用域基于其创建位置

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // 'local scope'

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope

// 以上两段代码有什么不同？考虑执行上下文栈
/*
    skill：1--------------------------------
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i)
        }, 1000)
    }   
    输出结果：3 3 3
    变量提升
    var i
    for (i = 0; i < 3; i++)
    setTimeout 使用了闭包，访问外部变量

    解决办法：1，使用es6
    直接
        for (let i = 0; i < 3; i++)

    解决办法：2，产生一个新的作用域，保存一个与本次i相同的值

    for (var i = 0; i < 3; i++) {
        help(i)
    }

    function help(a) {
        setTimeout(function() {
            console.log(a)
        }, 1000)
    }
    输出结果：0 1 2
    简化为立即执行函数，改变作用域的都可以用
    for (var i = 0; i < 3; i++) {
        (function(a) {
            setTimeout(function() {
                console.log(a)
            }, 1000)
        })(i)
    }


*/

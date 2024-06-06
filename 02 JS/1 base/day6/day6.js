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

/*
    skill: 2--------------------------------
    正则
    创建正则对象
        // 构造函数
        new RegExp('规则', '标识')
        // 字面量书写
        /规则/标识

        

        // 构造, 标识可传可不传，有几种，如i，i标识不区分大小写，如g全局匹配，所有的，m，多行匹配
        var reg = new RegExp('a') // 是否包含a
        console.log(reg.test('12321za434'))
        
        var reg = new RegExp('a', 'i') // 是否包含a
        console.log(reg.test('12321zA434'))

        
        // 字变量
        var reg = /a/i
        console.log(reg.test('12321zA434'))

        替换可以正则匹配
        
        var reg = /a/g
        var str = 'fdsf123qwefafdffafdaa'
        var newStr = str.replace(reg, '111')
        console.log(newStr);

        // 写法2
        var newStr = str.replace(reg, function (s) {
            return '111'
        })
*/

var reg = /a/g
var str = 'fdsf123qwefafdffafdaa'
var newStr = str.replace(reg, function (s) {
    return '111'
})
console.log(newStr)

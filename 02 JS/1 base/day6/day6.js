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

/*
    skill: 3--------------------------------
    浏览器渲染流程

        浏览器从网络或本地文件中获取到HTML源代码，然后从上到下的解析源代码，若过程中读取到CSS或JS，则会停止解析（阻塞），转而解析CSS或执行JS
            重点：
            1. 浏览器解析HTML时，遇到script标签，会暂停解析，直到script执行完毕，才会继续解析HTML
            2. 浏览器解析CSS时，遇到link标签，会暂停解析，直到link执行完毕，才会继续解析CSS
        
        流程：
            1：读取HTML
            2：解析HTML
            3：读取CSS
            4：解析CSS
            5：解析HTML
            6：读取JS
            7：执行JS
            8：解析HTML

        由此可发现，为和将CSS写到页面的开头，JS写在最后
            将CSS写在开头，是为了让浏览器尽快读取并解析样式，避免给用户看到丑陋的页面，也是为了避免页面闪烁
            将JS写在最后，是为了让浏览器尽快呈现页面给用户，然后再执行JS完成交互


        生成DOM树
            浏览器会一边解析HTML，一边生成DOM树，我们在JS中获取到的DOM就是DOM树中的DOM
            当DOM树完全生成好后，会触发`DOMContentLoaded`事件
            document.addEventListener("DOMContentLoaded", function() {
                console.log("DOM树已全部生成完毕")
            })

            当页面中的所有外部资源全部加载完毕后，会触发`load`事件，load事件也可以针对单个外部资源使用，资源加载完成后触发
            window.onload = function(){
                console.log("所有资源已加载完成");
            }


            DOMContentLoaded与onload
                DOMContentLoaded是当dom生成完毕就会触发
                load是当所有资源加载完毕后才会触发，不仅仅是dom，包括img，video等外部资源


        生成渲染树
            浏览器一边生成DOM树，一边计算DOM树中每个节点的样式规则，最终形成渲染树
            由DOM树和CSS生成渲染树，渲染树只包含可见元素，不可见元素不在渲染树中，如display:none的元素
            CSS属性计算过程，发生在这个步骤

        布局layout/重排
            这个步骤又称之为**reflow（回流、重排）**，是指浏览器一边生成渲染树，一边计算每个元素最终的尺寸和位置
            完成后，页面中的所有元素的位置和尺寸就确定下来了，即将被渲染到页面
            这个步骤会在页面之后的运行过程中不断的重复
            **下面的JS操作均会导致reflow**：
                获取元素的尺寸和位置
                直接或间接改变元素的尺寸和位置：width，height,left,top,right,bottom,margin等

            reflow非常耗时，浏览器为了提升性能，对JS中**连续**导致reflow的代码，把reflow的时间点延迟到结束后进行，
            但在此过程中，如果遇到了获取尺寸和位置的代码，浏览器会迫不得已立即reflow
                dom.style.width = '100px'
                dom.style.height = '100px'
                    改变宽度 ===》 改变高度 ===》 reflow

                dom.style.width = '100px
                dom.clientHeight // 读取高度，导致强行reflow
                dom.style.height = '100px'
                    改变宽度 ===》 reflow ===》 改变高度  ===》 reflow

        重绘 repaint
            浏览器一边reflow，一边进行生成对应的图形绘制到页面，绘制的过程称之为repaint
            所有会导致reflow的代码，均会导致repaint
            绘制的过程是靠GPU完成的，速度非常快，因此，相对于导致reflow的代码，仅会导致repaint的代码效率会高出很多

            凡是不会影响盒子排列，仅影响盒子外观的代码都不会导致reflow，仅导致repaint，例如：
                改变背景颜色，改变字体颜色，圆角边框，背景图，...
*/

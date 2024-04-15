console.log('webapi================================================================================')

/*
和标准库不同，WebApi是浏览器提供的一套API，用于操作浏览器窗口和页面

WebAPI中包含两个部分：
    BOM：Browser Object Model，浏览器模型，提供和浏览器相关的操作
    DOM：Document Object Model，文档模型，提供和页面相关的操作

JS 包括两部分
    EcmaScript：官方提供的标准
        语言规范
        标准库
    WebAPI：浏览器提供的API，不同的浏览器可能会有些许不同
        BOM
        DOM

BOM
BOM提供了一系列的对象和函数，提供和浏览器本身相关的操作
    
    window：全局对象
    MDN链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Window/window

    api                             含义                                备注
    open()                          打开一个新的浏览器窗口                返回新窗口的window对象
    close()                         关闭浏览器窗口                       只能关闭使用 open 打开的浏览器窗口
    setTimeout()                    在一段时间后自动执行某个函数          参数 1：函数，无参，this 指向 window。参数 2：时间，毫秒。返回：计时器的 ID
    clearTimeout()                  清除指定 ID 的计时器                 传入计时器的 ID
    setInterval()                   每隔一段时间自动执行某个函数          参数 1：函数，无参，this 指向 window 参数 2：时间，毫秒  返回：计时器的 ID
    clearInterval()                 清除指定 ID 的计时器                 传入计时器的 ID
    alert()                         弹出提示框                           不同的操作系统外观有差异
    confirm()                       弹出确认框                           不同的操作系统外观有差异

    window.location：提供地址栏的相关操作
    MDN链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Location

    api                             含义                                备注
    Location.href                   获取或设置页面当前地址                设置地址回导致页面跳转
    Location.protocol               获取或设置地址中的协议部分
    Location.host                   获取或设置地址中的主机名和端口号
    Location.hostname               获取或设置地址中的主机名
    Location.port                   获取或设置地址中的端口号
    Location.pathname               获取或设置地址中的路径部分
    Location.search                 获取或设置地址中的参数部分
    Location.hash                   获取或设置地址中的 hash 部分
    Location.reload()               重新加载当前页面

    window.history：提供当前窗口历史记录的操作
    MDN链接：https://developer.mozilla.org/zh-CN/docs/Web/API/History
    
    api                             含义                                备注
    History.back()                  后退
    History.forward()               前进
    History.go()                    跳转到指定位置
    History.pushState()             改变当前页面的历史记录                页面不刷新
    History.replaceState()          替换当前记录                         页面不刷新


    DOM：DOM 是一个对象，它对应到 HTML 中的节点

    获取 dom
    api                               含义                                备注
    document.getElementById()         获取指定 id 的元素                   得到单个 dom
    document.getElementsByTagName()   根据元素名称获取 dom                  得到 dom 的伪数组
    dom.getElementsByTagName()        同上一条
    document.getElementsByClassName() 根据元素类样式获取 dom                得到 dom 的伪数组
    dom.getElementsByClassName()      同上一条
    document.querySelector()          根据 CSS 选择器获取 dom               得到第一个匹配的 dom
    dom.querySelector()               同上一条
    document.querySelectorAll()       根据 CSS 选择器获取 dom               得到所有匹配的 dom
    dom.querySelectorAll()            同上一条
    document.documentElement          获取 html 元素
    document.body                     获取 body
    document.head                     获取 head
    dom.children                      获取 dom 的子元素                     得到 dom 的伪数组
    dom.childNodes                    获取 dom 的子节点                     得到 dom 节点的伪数组
    dom.previousElementSibling        得到 dom 前一个兄弟元素
    dom.nextElementSibling            得到 dom 后一个兄弟元素
    dom.parentElement                 得到 dom 的父元素

    创建dom
    api                               含义                                 备注
    document.createElement()          创建一个 dom 并返回                   传入元素名称

    更改 dom 结构：这里是指更改文档树（DOM 树）
    api                         含义                                                备注
    dom.remove()                从文档树中删除 dom                                   不是删除对象
    dom.removeChild()           删除 dom 的某个子节点                                传入 dom 对象
    dom.insertBefore()          在 dom 的子节点中，添加一个新节点到另一个节点之前
    dom.appendChild()           添加一个新节点到 dom 的子节点末尾                     传入 dom 对象

    dom内容
    api                         含义                                   备注
    dom.innerText               获取 dom 的文本内容                      设置时会自动进行 HTML 实体编码
    dom.innerHtml               获取或设置元素的 HTML 内容


dom属性：指 HTML 元素的「属性」
    标准属性：HTML本身用于的属性
        a的href,title
        input的value
        img的src
        ......
    自定义属性：HTML元素标准中未定义的属性

    所有标准属性均可通过dom.属性名得到，其中：
        布尔属性会被自动转换为boolean
        路径类属性会被转换为绝对路径
        标准属性始终都是存在的
        class与关键字重名，因此需要用className
    
    所有自定义属性均可通过下面的方式操作
        dom.setAttribute('name', value)，设置属性键值对
        dom.getAttribute('name')，获取属性值
    
    自定义属性和元素属性源码书写是对应的，可以尝试获取a元素的href属性对比标准属性，看看有何不同


dom样式
    在JS中有两种样式：
        内联样式：元素的style属性中书写的样式
        计算样式（最终样式）：元素最终计算出来的样式
    
    JS可以获取内联样式和计算样式，但只能设置最终样式

    部分常见样式操作：
        dom.style：获取元素的内联样式，得到样式对象
            对象中的所有样式均可以被赋值，复制后既可以应用样式到元素的style中
        getComputedStyle(dom)：获取元素的计算样式，得到一个样式对象
            该对象中的属性是只读的，无法被重新赋值

    样式对象
        给样式赋值为空字符串，相当于删除内联样式
        给样式的赋值不合法时，赋值语句无效，不会报错
        CSS的短横线命名法，在属性名中表现为驼峰命名法


监听dom事件
    监听事件可以描述为一句话：
    某个DOM发生了某件事之后，我需要做某些处理
        - 某个 DOM：监听谁？
        - 某件事（事件类型）：它发生了什么？
        - 某些处理（处理函数）：我要做什么？

    下面是一段事件监听代码：
    // 为dom注册点击事件，当被点击时，自动运行事件处理函数
    dom.onclick = function () {
        console.log('dom 被点击了');
    };

    事件类型MDN链接：https://developer.mozilla.org/zh-CN/docs/Web/Events

    表单类事件
        | 事件名称   | 触发时机                                                     | 备注                              |
        | ---------- | ------------------------------------------------------------ | --------------------------------- |
        | ==submit== | 表单被提交时触发                                             | 注册到 form 元素上                |
        | ==input==  | 文本框改变后立即出发                                         | 注册到 input、textarea 上         |
        | ==change== | 文本框改变后、失去焦点时触发                                  | 注册到 input、select、textarea 上 |
                        下拉列表、多选框、单选框改变后立即触发
        | reset      | 表单被重置时触发                                             | 注册到 form 元素上                |
        | focus      | 元素聚焦时触发                                               |                                   |
        | blur       | 元素失去焦点时触发                                           |                                   |

    鼠标类事件
        | 事件名称       | 触发时机                     | 备注 |
        | -------------- | ---------------------------- | ---- |
        | ==click==      | 鼠标按下抬起后触发           |      |
        | contextmenu    | 右键菜单显示前触发           |      |
        | ==mousedown==  | 鼠标按下时触发               |      |
        | ==mouseup==    | 鼠标抬起时触发               |      |
        | ==mousemove==  | 鼠标在元素上移动时触发       |      |
        | ==mouseenter== | 鼠标进入元素时触发（不冒泡） |      |
        | ==mouseleave== | 鼠标离开元素时触发（不冒泡） |      |
        | mouseover      | 鼠标进入元素时触发（冒泡）   |      |
        | mouseout       | 鼠标离开元素时触发（冒泡）   |      |
        | wheel          | 鼠标滚轮滚动时触发           |      |

    键盘事件
        | 事件名称 | 触发时机           | 备注 |
        | -------- | ------------------ | ---- |
        | keydown  | 某个键被按下时触发 |      |
        | keyup    | 某个键被抬起时触发 |      |


    注册事件
    JS 提供了三种方式注册事件

    方式 1：将事件注册写到元素上，这种方式基本被弃用
        <button onclick="js代码">按钮</button>
    
    方式 2：使用 dom 属性注册事件
        属性名为`on+事件类型
        // 监听事件
        dom.onclick = function () {
            // 处理函数
        };
        // 移除监听事件
        dom.onclick = null;

        这种方式的特点是：
            - 优点：易于监听、覆盖、移除
            - 缺点：只能注册一个处理函数
            - 缺点：某些事件不支持用这种方式注册

    方式 3：使用 addEventListener 方法注册事件
        dom.addEventListener('click', function () {
            // 处理函数1
        });
        dom.addEventListener('click', function () {
            // 处理函数2
        });
        这是最完美的事件注册方式，如果要移除用这种方式注册的事件，需要改写代码

        function handler1() {
            // 处理函数1
        }
        function handler2() {
            // 处理函数2
        }

        dom.addEventListener('click', handler1);
        dom.addEventListener('click', handler2);

        dom.removeEventListener('click', handler1); // 移除监听函数1

    事件处理函数
        当事件发生时，会自动调用事件处理函数，并向函数传递一个参数，该参数称之为事件对象，
        里面包含了事件发生的相关信息，比如鼠标位置、键盘按键等等
        dom.addEventListener('click', function (e) {
            console.log(e.clientX); //打印鼠标的横坐标
        }); 
        常见的事件对象有：[鼠标事件对象]、[键盘事件对象]
        另外，在事件处理函数中，`this`始终指向注册事件的 dom


dom 进阶
    事件默认行为
        某些元素的某些事件，浏览器会有自己的默认行为
        比如：
            - a 元素的 click 事件，浏览器会跳转页面
            - form 元素的 submit 事件，浏览器会提交表单，最终导致页面刷新
            - 文本框的 keydown 事件，浏览器会将按键文本显示到文本框中
            - ......
        如果我们要阻止浏览器的默认行为，就需要在对应时间中加入以下代码：
            // e为事件对象
        e.preventDefault();
*/


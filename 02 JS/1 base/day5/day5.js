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
*/
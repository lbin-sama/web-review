var imgWidth = 220 // 每张图片的宽度
var container = document.getElementById('container') // 获取图片容器

var timeId
window.onresize = function () {
    // 该事件会在窗体大小发生改变的时候触发
    // 触发该事件，我们就需要重新对图片进行排列
    if (timeId) {
        clearTimeout(timeId)
    }
    timeId = setTimeout(function () {
        container.innerHTML = ''
        init()
    }, 500)
}

// 创建图片，并且对图片的位置进行归位
function createImgs(cols) {
    var index = 0
    for (var i = 0; i <= 40; i++) {
        if (index === cols) index = 0
        var src = '../img/' + i + '.jpg' // 生成图片的 src 路径

        var img = document.createElement('img') // 创建一个 img 元素
        img.src = src // 设置图片的 src
        img.style.marginTop = '10px'
        img.style.width = imgWidth // 设置图片的宽度

        container.children[index].appendChild(img)
        index++
    }
}

function init() {
    var boxW = container.clientWidth
    var cols = Math.floor(boxW / imgWidth)
    container.style.display = 'flex'
    container.style.justifyContent = 'space-around'

    for (var i = 0; i < cols; i++) {
        var divDom = document.createElement('div')
        divDom.style.width = imgWidth + 'px'
        container.appendChild(divDom)
    }

    createImgs(cols)
}

init()

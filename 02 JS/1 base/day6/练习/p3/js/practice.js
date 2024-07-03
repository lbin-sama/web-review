// 防抖
function debounce(fn, delay) {
    var timer

    return function () {
        clearTimeout(timer)
        var curThis = this
        var args = Array.from(arguments)
        timer = setTimeout(function () {
            fn.apply(curThis, args)
        }, delay)
    }
}

const newHandler = debounce(function (e) {
    console.log('resize', e)
    layout()
}, 1000)
// 当窗口尺寸变化后，调用layout函数
window.addEventListener('resize', newHandler)

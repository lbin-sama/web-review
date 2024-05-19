// 让便签可被拖动，但不能超出视口
var note = document.querySelector('.note');
var bar = document.querySelector('.note .move-bar')
var doW = document.documentElement.clientWidth
var doH = document.documentElement.clientHeight
var noteW = note.offsetWidth
var noteH = note.offsetHeight

bar.addEventListener('mousedown', function (downE) {
    var offsetX = downE.offsetX
    var offsetY = downE.offsetY
    console.log('mousedown', downE)

    window.onmousemove = function (e) {
        console.log('mousemove')
        let left = e.pageX - offsetX
        let top = e.pageY - offsetY
        left = (left < 0 ? 0 : left)
        top = (top < 0 ? 0 : top)
        left = (left > doW - noteW? doW - noteW : left)
        top = (top > doH - noteH? doH - noteH : top)
        note.style.left = left + 'px';
        note.style.top = top + 'px';
    }

    window.onmouseup = function (upE) {
        console.log('mouseup', upE)
        window.onmousemove = null;
        bar.onmouseup = null;
    }
})
// 让小球向右下运动，遇到边缘后反弹

let ball = document.querySelector(".ball")
var doW = document.documentElement.clientWidth
var doH = document.documentElement.clientHeight
var ballW = ball.offsetWidth
var ballH = ball.offsetHeight
let moveTop = 5
let moveLeft = 5

setInterval(() => {
    let left = ball.offsetLeft + moveLeft
    let top = ball.offsetTop + moveTop

    if (left + ballW >= doW || left <= 0) {
        moveLeft = -moveLeft
    }
    if (top + ballH >= doH || top <= 0) {
        moveTop = -moveTop
    }

    ball.style.left = left + "px"
    ball.style.top = top + "px"
    
}, 20)
// 每隔一段时间，切换英雄的图片，让英雄动起来

var runTimer = null
var runIndex = 1
var hero = document.querySelector('img')
function heroRun() {
    if (runTimer) return

    runTimer = setInterval(function () {
        hero.src = `./img/${runIndex}.png`
        runIndex++
        if (runIndex > 4) runIndex = 1
    }, 200)
}

function heroRunStop() {
    clearInterval(runTimer)
    runTimer = null
}

heroRun()

// 每隔一段时间，改变英雄的位置，让英雄向右移动

var width = document.documentElement.clientWidth
var moveWidth = 20
var moveTimer = null
var moveIndex = 1
function heroMove() {
    if (moveTimer) return

    moveTimer = setInterval(function () {
        hero.style.marginLeft = (moveIndex * moveWidth) + 'px'
        moveIndex++

        if ((moveIndex * moveWidth) > width) {
            moveIndex = 1
        }
    }, 200)
}

function heroMoveStop() {
    clearInterval(moveTimer)
    moveTimer = null
}

heroMove()

console.log(hero, runIndex, runTimer)
console.log(getComputedStyle(hero).width, moveTimer, moveIndex)
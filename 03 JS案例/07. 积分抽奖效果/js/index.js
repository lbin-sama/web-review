var numDom = document.querySelector('.prize-number')
var prizeBtn = document.querySelector('.handler-container-btn')
var dialog = document.querySelector('.dialog-container')
var dialogBtn = dialog.querySelector('.button')
var closeBtn = dialog.querySelector('.close')
var prizeList = Array.from(document.querySelectorAll('.prize-list'))

var timer = null
var num = 5
numDom.innerHTML = num

function showDialog() {
    dialog.style.display = 'block'
}

function hideDialog() {
    dialog.style.display = 'none'
}

function startLottery(e) {
    if (num === 0 || timer) {
        if (num) console.log('次数为零')
        if (timer) console.log('正在抽奖')
        return
    }
    num--
    numDom.innerHTML = num

    var moveNum = Math.floor(Math.random() * (30 + 1 - 15)) + 15
    var index = -1
    var activeIndex = -1
    timer = setInterval(() => {
        index++

        if (activeIndex > -1) prizeList[activeIndex].classList.remove('active')
        activeIndex = index % 8
        console.log('index', index, activeIndex)
        prizeList[activeIndex].classList.add('active')
        if (index === moveNum) {
            clearInterval(timer)
            timer = null
            showDialog()
        }
    }, 100)
}

prizeBtn.addEventListener('click', startLottery)

closeBtn.addEventListener('click', hideDialog)
dialogBtn.addEventListener('click', function (e) {
    hideDialog()
    startLottery()
})

console.log(num, numDom, prizeBtn, dialog, dialogBtn, prizeList)

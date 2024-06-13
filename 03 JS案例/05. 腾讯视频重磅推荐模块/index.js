var imgADomArr = []
var titleDomArr = []
var index = 0
var imgContainer = document.querySelector('#imgs')
var sideBar = document.querySelector('#side-bar')

for (var i = 0; i < data.length; i++) {
    ;(function (i) {
        var item = data[i]
        var imgADom = document.createElement('a')
        imgADom.style.backgroundColor = item.bg
        imgADom.style.backgroundImage = `url("${item.img}")`
        imgADomArr.push(imgADom)
        imgContainer.appendChild(imgADom)

        var titleDom = document.createElement('a')
        titleDom.innerHTML = `<span>${item.title}</span>${item.desc}`
        titleDom.classList.add('nav')
        titleDomArr.push(titleDom)
        sideBar.appendChild(titleDom)

        titleDom.addEventListener('mouseenter', enterTitle)
        titleDom.addEventListener('mouseleave', leaveTitle)
    })(i)
}

function enterTitle(e) {
    var val = titleDomArr.indexOf(e.target)
    change(val)
    clearInterval(timer)
}
function leaveTitle(e) {
  clearInterval(timer)
  timer = setInterval(intervalFun, 2000)
}

function change(val) {
    imgADomArr[index].style.display = 'none'
    imgADomArr[val].style.display = 'block'
    titleDomArr[index].classList.remove('active')
    titleDomArr[val].classList.add('active')

    index = val
}

change(0)

function intervalFun() {
    if (index === imgADomArr.length - 1) {
        change(0)
    } else {
        change(index + 1)
    }
}
var timer = setInterval(intervalFun, 2000)

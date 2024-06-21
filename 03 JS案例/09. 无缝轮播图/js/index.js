var urls = ['./img/Wallpaper1.jpg', './img/Wallpaper2.jpg', './img/Wallpaper3.jpg', './img/Wallpaper4.jpg', './img/Wallpaper5.jpg']

function $(selector) {
    return document.querySelector(selector)
}

var doms = {
    container: $('.carousel-container'),
    carouselList: $('.carousel-list'),
    indicator: $('.indicator'),
    arrowLeft: $('.arrow-left'),
    arrowRight: $('.arrow-right'),
    carousels: []
}
var activeIndex = 0
var timer
var tempItem
var duration = 0.3
var isAnim = false

function createImg(url, index) {
    var img = document.createElement('img')
    img.src = url
    img.className = 'carousel-item'
    doms.carouselList.appendChild(img)
    doms.carousels.push(img)
}

function init() {
    urls.forEach((item, index) => {
        var dot = document.createElement('div')
        dot.className = 'indicator-item'
        if (index === 0) dot.classList.add('active')
        doms.indicator.appendChild(dot)

        createImg(item, index)
        if (index === urls.length - 1) {
            tempItem = doms.carouselList.children[0].cloneNode(true)
            doms.carouselList.appendChild(tempItem)
        }
    })

    doms.carouselList.style.transition = `all ${duration}s ease-in-out`
    doms.carouselList.style.width = doms.carousels[0].offsetWidth * doms.carouselList.children.length + 'px'
}

init()

function change(index) {
    if (isAnim) return
    isAnim = true

    setTimeout(() => {
        isAnim = false
    }, duration * 1000)
    var i = index
    if (i > doms.carousels.length - 1) {
        i = 0
    }
    if (i < 0) {
        i = doms.carousels.length - 1
    }

    var move = i * doms.carousels[0].offsetWidth

    if (i === 0 && activeIndex === doms.carousels.length - 1) {
        console.log('移动到最后一位', index, i, doms.carouselList.children)
        move = index * doms.carousels[0].offsetWidth

        setTimeout(() => {
            doms.carouselList.style.transition = `none`
            doms.carouselList.style.transform = `translateX(-${0}px)`
        }, duration * 1000)
    }

    if (i === doms.carousels.length - 1 && index < 0) {
        console.log('移动到首位', index, i, doms.carouselList.children)
        var step = (doms.carouselList.children.length - 1) * doms.carousels[0].offsetWidth

        doms.carouselList.style.transition = `none`
        doms.carouselList.style.transform = `translateX(-${step}px)`

        doms.carouselList.clientWidth
    }
    setTimeout(() => {
        doms.carouselList.style.transition = `all ${duration}s ease-in-out`
        doms.carouselList.style.transform = `translateX(-${move}px)`
        doms.indicator.children[activeIndex].classList.remove('active')
        doms.indicator.children[i].classList.add('active')
        activeIndex = i
    })
}

function stop() {
    clearInterval(timer)
    timer = null
}

function start() {
    timer = setInterval(() => {
        change(activeIndex - 1)
    }, 1000)
}

start()

doms.container.addEventListener('mouseenter', function (e) {
    stop()
})
doms.container.addEventListener('mouseleave', function (e) {
    start()
})

doms.arrowLeft.addEventListener('click', function (e) {
    change(activeIndex - 1)
})
doms.arrowRight.addEventListener('click', function (e) {
    change(activeIndex + 1)
})
doms.indicator.addEventListener('click', function (e) {
    if (e.target.tagName === 'DIV') {
        var index = [].indexOf.call(doms.indicator.children, e.target)
        change(index)
    }
})

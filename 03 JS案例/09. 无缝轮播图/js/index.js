var urls = [
  './img/Wallpaper1.jpg',
  './img/Wallpaper2.jpg',
  './img/Wallpaper3.jpg',
  './img/Wallpaper4.jpg',
  './img/Wallpaper5.jpg',
]


function $(selector) {
  return document.querySelector(selector);
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

function createImg(url) {
  var img = document.createElement('img');
  img.src = url;
  img.className = 'carousel-item';
  doms.carouselList.appendChild(img)
  doms.carousels.push(img)
}

function init() {
  urls.forEach((item, index) => {
    
    createImg(item)

    var dot = document.createElement('div')
    dot.className = 'indicator-item'
    if (index === 0) dot.classList.add('active')
    doms.indicator.appendChild(dot)
  })
}

init()

function change(i) {
  if (i > doms.carousels.length - 1) {
    i = 0
  }
  if (i < 0) {
    i = doms.carousels.length - 1
  }
  doms.carousels[0].offsetWidth
  doms.carouselList.style.transform = `translateX(-${i * doms.carousels[0].offsetWidth}px)`
  doms.indicator.children[activeIndex].classList.remove('active')
  doms.indicator.children[i].classList.add('active')
  activeIndex = i
}

function stop () {
  clearInterval(timer)
  timer = null
}

function start() {
  timer = setInterval(() => {
    change(activeIndex + 1)
  }, 1000)
}

start()

doms.container.addEventListener('mouseenter', function(e) {
  stop()
})
doms.container.addEventListener('mouseleave', function(e) {
  start()
})


doms.arrowLeft.addEventListener('click', function(e) {
  change(activeIndex - 1)
})
doms.arrowRight.addEventListener('click', function(e) {
  change(activeIndex + 1)
})
doms.indicator.addEventListener('click', function(e) {
  if (e.target.tagName === 'DIV') {
    var index = [].indexOf.call(doms.indicator.children, e.target)
    change(index)
  }
})
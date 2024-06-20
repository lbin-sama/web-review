var menus = document.querySelector('.img-list')
var sImg = document.querySelector('.left-img')
var lImg = document.querySelector('.right-img')
var mask = document.querySelector('.mask')

// 初始化数据图片
var imgs = {
    // 小图
    small: ['imgA_1.jpg', 'imgB_1.jpg', 'imgC_1.jpg'],
    // 中图
    middle: ['imgA_2.jpg', 'imgB_2.jpg', 'imgC_2.jpg'],
    // 大图
    large: ['imgA_3.jpg', 'imgB_3.jpg', 'imgC_3.jpg']
}

function initImg() {
    imgs.small.forEach(function (img, index) {
        var li = document.createElement('li')
        li.style.backgroundImage = 'url(./images/' + img + ')'
        menus.appendChild(li)

        if (index === 0) {
            li.style.border = '2px solid #000'
            lImg.style.backgroundImage = 'url(./images/' + imgs.large[index] + ')'
        }
    })
}

initImg()

menus.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        var index = [].indexOf.call(menus.children, e.target)
        sImg.style.backgroundImage = 'url(./images/' + imgs.middle[index] + ')'
        lImg.style.backgroundImage = 'url(./images/' + imgs.large[index] + ')'

        var li = Array.from(this.querySelectorAll('li'))
        li.forEach(function (item, i) {
            item.style.border = index === i ? '2px solid #000' : 'none'
        })
    }
})

sImg.addEventListener('mousemove', function (e) {
  mask.style.opacity = 1
  lImg.style.opacity = 1


  
    // 根据鼠标位置计算遮罩层的位置
    var left = e.clientX - this.offsetLeft -( mask.offsetWidth / 2);
    // 同理
    var top = e.clientY - this.offsetTop - mask.offsetHeight / 2;

    // 边界条件
    if (left <= 0) {
      left = 0;
    }
    if (top <= 0) {
      top = 0;
    }
    if (left >= this.offsetWidth - mask.offsetWidth) {
      left = this.offsetWidth - mask.offsetWidth
    }
    if (top >= this.offsetHeight - mask.offsetHeight) {
      top = this.offsetHeight - mask.offsetHeight
    }
    // 根据top和left调整mask的位置
    mask.style.left = left + 'px';
    mask.style.top = top + 'px';

    // 根据top 和 left，修改大图的位置，background-position-x
    lImg.style.backgroundPositionX = -left + 'px';
    lImg.style.backgroundPositionY = -top + 'px';
})

sImg.addEventListener('mouseleave', function (e) {
  mask.style.opacity = 0
  lImg.style.opacity = 0
})
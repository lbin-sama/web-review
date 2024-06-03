;(function () {
    // 完成横幅区的图片切换
    // 横幅区数据
    var datas = [
        {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920',
            link: 'https://www.mi.com/mi11le-5g-ne'
        },
        {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90',
            link: 'https://www.mi.com/xiaomipad5'
        },
        {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
            link: 'https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75'
        },
        {
            img: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90',
            link: 'https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6'
        }
    ]

    var index = -1
    var left = document.querySelector('.banner-pointer-left')
    var right = document.querySelector('.banner-pointer-right')
    var img = document.querySelector('.banner-cover img')
    var aLink = document.querySelector('.banner-cover')
    var dots = document.querySelectorAll('.banner-dots .fl')
    dots = Array.from(dots)

    // banner-dots-selected
    const leftClick = (e)=> {
      console.log('left')
      if (index === 0) {
          index = 2
      } else {
          index--
      }

      dots.forEach((dot, i) => {
          dot.classList.remove('banner-dots-selected')
          if (i === index) {
              dot.classList.add('banner-dots-selected')
          }
      })

      img.src = datas[index].img
      aLink.href = datas[index].link
  }

  const rightClick = (e)=> {
      console.log('right')
      if (index === 2) {
          index = 0
      } else {
          index++
      }

      dots.forEach((dot, i) => {
          dot.classList.remove('banner-dots-selected')
          if (i === index) {
              dot.classList.add('banner-dots-selected')
          }
      })

      img.src = datas[index].img
      aLink.href = datas[index].link
  }
  
    left.addEventListener('click', leftClick)
    right.addEventListener('click', rightClick)



    console.log('111111', img, dots)

    rightClick()
})()

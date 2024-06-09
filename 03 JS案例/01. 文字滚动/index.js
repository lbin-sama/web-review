(function () {
    var listDom = document.querySelector('.container .list')
    var btnDom = document.querySelector('button')
    var children = Array.from(listDom.children)
    var height = listDom.clientHeight
    var index = 1
    var length = children.length
    var timer = null

    btnDom.addEventListener('click', function () {
        if (timer) {
            clearInterval(timer)
            timer = null
            this.innerHTML = '开始'
        } else {
            timer = setInterval(scrollFun, 1000)
            this.innerHTML = '暂停'
        }
    })

    function scrollFun() {
        children[0].style.marginTop = -(height * index) + 'px'
        children[0].style.transition = 'all .4s'

        if (index === length) {
            setTimeout(() => {
                children[0].style.transition = 'none'
                children[0].style.marginTop = 0 + 'px'
            }, 400)

            index = 0
        }

        index++
    }

    timer = setInterval(scrollFun, 1000)

    var copyDom = children[0].cloneNode(true)
    listDom.appendChild(copyDom)
})()

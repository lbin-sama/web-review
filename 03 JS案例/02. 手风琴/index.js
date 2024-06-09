var menuContainer = document.querySelector('.menu-container')
var menuList = document.querySelectorAll('.menu-container .menu')
var h = 30
var activeNum = -1
menuList = Array.from(menuList)


menuContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'H2') {
        var i = menuList.indexOf(e.target.parentNode)
        openMenu(i)
    }
})

function openMenu(index) {
    var ulDom = menuList[index].querySelector('.submenu')
    var liDoms = menuList[index].querySelectorAll('.submenu li')
    var length = Array.from(liDoms).length

    if (activeNum > -1) {
        var preActiveDom = menuList[activeNum].querySelector('.submenu')
        preActiveDom.style.height = 0
    }

    if (index !== activeNum) {
        ulDom.style.transition = 'height .3s'
        ulDom.style.height =(h * length)+ 'px'
        activeNum = index
    } else {
        activeNum = -1
    }
    
}

console.log("🚀 ~ menuList:", menuList)


// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

// console.log(heros)

const container = document.querySelector('.container')
console.log(container)

const aTarget = '_blank'
const aClassName = 'item'
function getImage (ename) {
    return `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`
}
function getHref (ename) {
    return `https://pvp.qq.com/web201605/herodetail/${ename}.shtml`
}


function createDom(name, ename) {
    const a = document.createElement('a')
    a.href = getHref(ename)
    a.target = aTarget
    a.className = aClassName
    a.innerHTML = `
        <img src="${getImage(ename)}" alt="">
        <span>${name}</span>
    `
    return a
}

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    const dom = createDom(element.cname, element.ename)
    container.appendChild(dom)
}
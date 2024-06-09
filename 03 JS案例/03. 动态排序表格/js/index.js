var headers = Array.from(document.querySelectorAll('thead tr th')).splice(1)
var header = document.querySelector('thead')
var body = document.querySelector('tbody')
var domList = Array.from(document.querySelectorAll('tbody tr'))
var checkAllDom = document.querySelector('.checkAll')
var checkList = []
var iMap = { 0: 'id', 1: 'name', 2: 'age', 3: 'post' }
var list = domList.map((item, index) => {
    var item = domList[index]
    var tds = Array.from(item.children)
    var checkDom = tds[0].querySelector('input')

    checkDom.setAttribute('index', index)
    checkDom.addEventListener('change', checkOne)

    return {
        checkDom,
        index,
        id: tds[1].innerHTML,
        name: tds[2].innerHTML,
        age: tds[3].innerHTML,
        post: tds[4].innerHTML
    }
})

checkAllDom.addEventListener('change', function (e) {
    list.forEach((item) => {
        item.checkDom.checked = this.checked
    })
})

function checkOne(e) {
    var val = +this.getAttribute('index')
    if (this.checked) {
        checkList.push(val)
    } else {
        checkList = checkList.filter((item) => item !== val)
    }

    checkAllDom.checked = list.length === checkList.length
}

header.addEventListener('click', function (e) {
    if (e.target.tagName === 'TH') {
        var i = headers.indexOf(e.target)
        sortTable(iMap[i])
    }
})

function sortTable (key) {
  // body.innerHTML = ''
  if (key === 'id' || key === 'age') {
    var arr = list.sort((a, b) => +a[key] - +b[key]).map(item => item.index)
    arr.forEach(item => {
      body.appendChild(domList[item])
    })
  } else {
    var arr = list.sort((a, b) => a[key].localeCompare(b[key], 'zh-Hans-CN', { sensitivity: 'accent' })).map(item => item.index)
    arr.forEach(item => {
      body.appendChild(domList[item])
    })
  }
}


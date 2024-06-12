var provinceDom = document.querySelector('#province')
var cityDom = document.querySelector('#city')
var schoolDom = document.querySelector('#school')

function initProvince() {
    for (const key in province) {
        if (Object.hasOwnProperty.call(province, key)) {
            const item = province[key]

            var option = document.createElement('option')
            option.innerText = item
            option.value = key
            provinceDom.appendChild(option)
        }
    }
}

function initCity() {
    cityDom.options[0].selected = true
}
function initSchool() {
    schoolDom.options[0].selected = true
}

// 初始化
initProvince()

provinceDom.addEventListener('change', function (e) {
    var val = this.options[this.selectedIndex].value
    var provinceCity = city[val]
    cityDom.innerHTML = ''

    for (const key in provinceCity) {
        if (Object.hasOwnProperty.call(provinceCity, key)) {
            const item = provinceCity[key]

            var option = document.createElement('option')
            option.innerText = item
            option.value = key
            cityDom.appendChild(option)
        }
    }

    initCity()
    changeCity()
})

cityDom.addEventListener('change', changeCity)

function changeCity() {
    var val = cityDom.options[cityDom.selectedIndex].value
    var citySchool = allschool[val]
    schoolDom.innerHTML = ''

    for (const key in citySchool) {
        if (Object.hasOwnProperty.call(citySchool, key)) {
            const item = citySchool[key]

            var option = document.createElement('option')
            option.innerText = item
            option.value = key
            schoolDom.appendChild(option)
        }
    }

    initSchool()
}

schoolDom.addEventListener('change', function (e) {
    var val = this.options[this.selectedIndex].value
    console.log(333333, this.selectedIndex, this.options[this.selectedIndex].value)
})

console.log('🚀 ~ schoolDom:', provinceDom)
console.log('🚀 ~ schoolDom:', cityDom)
console.log('🚀 ~ schoolDom:', schoolDom)

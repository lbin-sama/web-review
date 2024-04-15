/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
    const checkboxs = document.querySelector('.form-item input[type="checkbox"]')
    const btn = document.querySelector('.form-item .register')

    checkboxs.addEventListener('change', () => {
        btn.disabled = !checkboxs.checked
    })
    btn.disabled = !checkboxs.checked

    console.log(btn, checkboxs.checked)
}

setSubmitButtonStatus()

/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
    const input = document.querySelector('.form-item .phone')
    const btn = document.querySelector('.form-item .code-btn')

    input.addEventListener('input', () => {
        btn.disabled = input.value.length !== 11 || !Number.isInteger(+input.value)
    })
    btn.disabled = input.value.length !== 11 || !Number.isInteger(+input.value)

    console.log(btn, input)
}
setSendCodeButtonStatus()

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
    const select = document.querySelector('.form-item select')
    const hobby = document.querySelector('.hobby')

    select.addEventListener('change', () => {
        // console.log(select.selectedIndex, select.multiple)
        hobby.innerHTML = '已选择的爱好：' + select.children[select.selectedIndex].innerText
    })

    console.log(select, hobby)
}
setSelectedLoves()
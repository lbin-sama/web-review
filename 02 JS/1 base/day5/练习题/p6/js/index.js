// 完成表单验证
let btn = document.querySelector("button");

function checkInput() {
    let nameInput = document.querySelector('input[type="text"]');
    if (!nameInput.value) {
        nameInput.parentNode.classList.add("err");
        return false;
    }

    let passwordInput = document.querySelector('input[type="password"]');

    if (!passwordInput.value) {
        passwordInput.parentNode.classList.add("err");
        return false;
    }
    return true;
}

btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (!checkInput()) {
        return;
    }

    console.log("登录成功");
});

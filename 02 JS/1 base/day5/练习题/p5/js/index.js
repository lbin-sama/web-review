// 输入待办事项，按下回车后，添加事项到列表

// 点击删除后，删除对应的待办事项

let inputDom = document.querySelector("input");
let ulDom = document.querySelector("ul");
inputDom.onkeydown = function (e) {
    if (e.key === "Enter" && !!inputDom.value) {
        let li = document.createElement("li")
        let span = document.createElement("span")
        span.innerText = inputDom.value
        li.appendChild(span)
        let btn = document.createElement("button")
        btn.innerText = "删除"
        btn.onclick = removeLi
        li.appendChild(btn)

        ulDom.appendChild(li)
        inputDom.value = "";
    }
}

let btnDom = document.querySelectorAll("button");
 btnDom.forEach(btn => {
     btn.onclick = removeLi
 })
 
 function removeLi () {
    this.parentNode.remove()
 }

// 每隔1秒自动切换图片

// 当鼠标移动到元素上时停止切换，移出后开始切换

let dom = document.querySelector("img");
let index = 1;
let isIn = false;
setInterval(() => {
    if (!isIn) {
        index++;
        if (index > 4) {
            index = 1;
        }
        dom.src = `./img/${index}.jpeg`;
    }
    console.log(dom);
}, 1000);

dom.addEventListener("mouseenter", mouseInImg);

function mouseInImg() {
    isIn = true;
    console.log("mouseInImg");
}

dom.addEventListener("mouseleave", mouseOutImg);

function mouseOutImg() {
    isIn = false;
    console.log("mouseOutImg");
}

// 根据下面的调用和注释，完成函数 createOptions

function createOptions(options) {
    return {
        time: (options && options.time) || 1000,
        speed: (options && options.speed) || 50,
        text: (options && options.text) || ''
    }
}

console.log(createOptions()) // { time: 1000, speed: 50, text: '' }
console.log(createOptions({
    time: 500
})) // { time: 500, speed: 50, text: '' }

console.log(createOptions({
    time: 500,
    text: 'hello world'
})) // { time: 500, speed: 50, text: 'hello world' }

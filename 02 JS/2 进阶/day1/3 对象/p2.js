const obj = {
    a: 1,
    b: 2,
    c: 3
}
// 遍历对象的所有属性名
// for (let key of Object.keys(obj)) {
//   console.log(key);
// }

// 遍历对象的所有属性值
// for (let val of Object.values(obj)) {
//   console.log(val);
// }

// 遍历对象的所有属性名和属性值
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// 复制obj的所有属性到一个新的对象
let newObj = {}
for (let [key, value] of Object.entries(obj)) {
    newObj[key] = value
}

console.log(newObj)

// 复制obj除a以外的所有属性到一个新的对象
delete newObj.a

console.log(newObj)
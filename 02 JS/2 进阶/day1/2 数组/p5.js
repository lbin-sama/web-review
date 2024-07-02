// 得到一个随机数组成的数组，数组长度为10，随机数的范围在0-1之间
// 结果类似于：[0.262, 0.167, 0.841, ...]
const list1 = Array(10).fill(0)
  .map(() => Math.random())
console.log("🚀 ~ list1:", list1)

// 得到一个随机数组成的数组，数组长度为10，随机数的范围在10-100之间
// 结果类似于：[35, 66, 45, ...]
const list2 = Array(10).fill(0)
  .map(() => Math.floor(Math.random() * 90 + 10))
console.log("🚀 ~ list2:", list2)

// 判断某个字符串s是否为 .jpg、.png、.bmp、.gif 中的一个

const str = '.jpg'
const list3 = ['.jpg', '.png', '.bmp', '.gif']

console.log(list3.includes(str))

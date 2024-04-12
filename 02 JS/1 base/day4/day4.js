/**
 * 标准库
 */

console.log('数字和字符串================================================================')

/*

库（Library）api

包装类
    如果将原始类型（number, string, boolean）当做对象来使用，JS会自动的将其转化为对应包装类的实例


Number
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number

    API                                 含义                                        备注
    Number.NaN                          表示一个数学书并不存在的数字                  可以直接书写为NaN
    Number.isNaN()                      判断传入的值是否是NaN                        可以直接书写为isNaN
    Number.isInteger()                  判断传入的值是否是整数
    Number.parseInt()                   把传入的值转为整数形式返回                    可以直接书写为parseInt()
    Number.parseFloat()                 把传入的值转为小数形式返回                    可以直接书写为parseFloat()
    Number.prototype.toFixed()          将当前数字保留指定位数的小数返回               传入小数位数
    Number.prototype.toString()         将当前数字转换为字符串返回                    可以传入进制2-36（二进制，八进制...）


String
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String

    API                                 含义                                          备注
    String.fromCharCode()               根据编码值得到一个字符                          传入一个或多个编码值 ASCII、Unicode等编码
    String.prototype.charCodeAt()       得到某个下标的字符编码                          传入下标
    String.prototype.includes()         判断当前字符串是否包含某个子串                   传入子串
    String.prototype.indexOf()          判断某个字符串在当前字符串中的第一个下标位置      如果没有，返回-1
    String.prototype.lastIndexOf()      判断某个字符串在当前字符串中的最后一个下标位置
    String.prototype.endsWith()         判断某个字符串是否以指定的字符串结束
    String.prototype.startsWith()       判断某个字符串是否以指定的字符串开头
    String.prototype.padStart()         将当前的字符串按照指定的字符在字符串开始位置填充到指定的位数，返回填充后的字符串
    String.prototype.padEnd()           将当前的字符串按照指定的字符在字符串结束位置填充到指定的位数，返回填充后的字符串
    String.prototype.split()            把当前字符串按照某个字符串分割成一个字符串数组返回
    String.prototype.substring()        返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
    String.prototype.trim()             从字符串的两端删除空白字符，返回新字符串
    String.prototype.trimStart()        从字符串的开头删除空白字符，返回新字符串
    String.prototype.trimEnd()          从字符串的末端删除空白字符，返回新字符串
    String.prototype.toUpperCase()      将调用该方法的字符串转为大写形式并返回
    String.prototype.toLowerCase()      将调用该方法的字符串转为小写形式并返回
    String.prototype.replace()          替换字符串中的第一个对应字符为新字符
    String.prototype.replaceAll()       替换字符串中的所有对应字符为新字符


Math(数学)
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math

    
    API                                  含义                                         备注
    Math.PI                              得到圆周率
    Math.abs()                           返回一个数的绝对值                            传入一个数
    Math.acos()                          返回一个数的反余弦值
    Math.asin()                          返回一个数的反正弦值
    Math.atan()                          返回一个数的反正切值
    Math.atan2()                         返回两个数的反正切值
    Math.ceil()                          返回一个数的向上取整
    Math.cos()                           返回一个数的余弦值
    Math.exp()                           返回一个数的指数值
    Math.floor()                         返回一个数的向下取整
    Math.log()                           返回一个数的对数值
    Math.max()                           返回一个数的最大值                            把数列依次传入
    Math.min()                           返回一个数的最小值                            把数列依次传入
    Math.pow()                           返回一个数的幂值
    Math.random()                        返回一个0到1之间的随机数
    Math.round()                         返回一个数的四舍五入值

Date(日期)
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date

    构造函数：
    new Date(); // 得到一个当前日期对象
    new Date(value); // 根据时间戳得到一个日期对象
    new Date(dateString); // 根据一个标准日期字符串得到一个日期对象
    // 根据年、月、日、小时、分钟、秒、毫秒得到一个日期对象
    new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]); 


    API                                  含义                                         备注
    Date.now()                           得到当前时间戳
    Date.prototype.getFullYear()         返回当前日期的年份
    Date.prototype.getMonth()            返回当前日期的月份
    Date.prototype.getDate()             返回当前日期的日期
    Date.prototype.getHours()            返回当前日期的小时数
    Date.prototype.getMinutes()          返回当前日期的分钟数
    Date.prototype.getSeconds()          返回当前日期的秒数
    Date.prototype.getMilliseconds()     返回当前日期的毫秒数
    Date.prototype.getTime()             返回当前日期的时间戳
    Date.prototype.toLocaleString()      得到日期本地的表达方式
    

Object(对象)
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

    API                                  含义                                         备注
    Object.create()                      创建一个新的对象，同时设置新对象的隐式原型
    Object.keys()                        得到一个对象的可枚举属性的数组
    Object.values()                      得到一个对象的可枚举属性的值的数组
    Object.assign()                      将多个对象的属性混合到一起(后面覆盖前面)
    Object.getPrototypeOf()              获取一个对象的隐式原型
    Object.setPrototypeOf()              设置一个对象的隐式原型


Array(数组)
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array

    API                                  含义                                         备注
    Array.isArray()                      判断一个值是否是数组
    Array.from()                         将一个数组转换为一个新数组
    Array.of()                           将一个数组转换为一个新数组
    Array.prototype.concat()             把多个数组拼接成一个
    Array.prototype.every()              判断数组中是否存在某个值
    Array.prototype.includes()           判断数组中是否存在某个值
    Array.prototype.indexOf()            得到数组中某个值的第一个下标
    Array.prototype.lastIndexOf()        得到数组中某个值的最后一个下标
    Array.prototype.join()               把数组中每一项使用某个字符连接起来，形成一个字符串返回
    Array.prototype.push()               向数组的末尾添加一项
    Array.prototype.unshift()            向数组的开头添加一项
    Array.prototype.reverse()            将数组中的元素顺序颠倒
    Array.prototype.shift()              删除数组的第一个项
    Array.prototype.slice()              对数组进行切割，返回一个新的数组
    Array.prototype.pop()                删除数组最后一项 返回被删除的值
    Array.prototype.sort()               对数组进行排序，传入比较函数：0-位置不变，<0-前者在前，>0-前者在后
    Array.prototype.splice()             删除、修改、插入任何位置的值
    Array.prototype.shift()              删除数组第一项 返回被删除的值


Function(函数)
    MDN链接： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function

    API                                   含义                                         备注
    Function.prototype.bind()             绑定一个函数到一个对象上，并返回一个新的函数
    Function.prototype.apply()            执行函数，绑定this 参数列表以数组的形式传递
    Function.prototype.call()             执行函数，绑定this 参数列表依次传递
    Function.prototype.toString()         返回一个函数的字符串表达形式

*/

// 练习 1
// 生成一个a-z的字符串
// var strAToZ = ''
// for (var i = 97; i <= 122; i++) {
//     strAToZ += String.fromCharCode(i)
// }

// console.log(strAToZ);

// 练习 2
// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.
// var str =
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.'
// var arr = str.split(' ')
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replaceAll(',', '').replaceAll('.', '')
// }
// console.log(arr);

// 练习 3
// 得到下面字符串中第一个i和最后一个i之间的子串

// var str =
//   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.';

// var firstIndex = str.indexOf('i') + 1;
// var lastIndex = str.lastIndexOf('i')
// console.log(str.substring(firstIndex, lastIndex))

// 练习 4
// 将下面的rgb格式转换成为HEX格式，把内容转成16进制拼接  // 16进制 #000000
// var rgb = 'rgb(255, 255, 255)'
// var arr = rgb.replace('rgb', '').replace('(', '').replace(')', '').split(', ')
// let hex = '#'

// for (var i = 0; i < arr.length; i++) {
//     hex += parseInt(arr[i]).toString(16)
// }

// console.log(arr, hex)

// 练习 5
// name转换成驼峰命名
// var name1 = 'has own property'; // --> hasOwnProperty

// var str2 = ''
// var arr = name1.split(' ')

// for (var i = 0; i < arr.length; i++) {
//     var str3 = i === 0 ? arr[i] : (arr[i].charAt(0).toUpperCase() + arr[i].substring(1))
//     str2 += str3
// }
// console.log(str2);

// 练习 6
/**
 * 得到一个指定范围内的随机整数
 * @param {number} min 范围的最小值
 * @param {number} max 范围的最大值（无法取到最大值）
 * @return {number} 范围内的随机整数
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min // （无法取到最大值）
    // return Math.floor(Math.random() * ((max + 1) - min)) + min // （可以取到最大值）
}
// for (var i = 0; i < 50; i++) {
//     console.log(getRandom(0, 2))
// }

// 练习 7
/**
 * 得到一个指定长度的随机字符串
 * 字符串包含：数字、字母
 * @param {number} length 字符串的长度
 * @return {number} 随机字符串
 */
// function getRandomString(length) {
//     let str = ''
//     for (var i = 0; i < length; i++) {
//         let letter = getRandom('a'.charCodeAt(0), 'z'.charCodeAt(0) + 1)
//         let num = getRandom('0'.charCodeAt(0), '9'.charCodeAt(0) + 1)
//         let randomNum = getRandom(0, 2)
//         str += String.fromCharCode(randomNum ? letter : num)
//     }

//     return str
// }

// console.log(getRandomString(20))

// 练习 8
/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
    return arr[getRandom(0, arr.length)]
}

console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8]));

// 练习 9

// 练习 10

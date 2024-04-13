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
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min // （无法取到最大值）
//     // return Math.floor(Math.random() * ((max + 1) - min)) + min // （可以取到最大值）
// }
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
// function getRandomItem(arr) {
//     return arr[getRandom(0, arr.length)]
// }

// console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8]));

// 练习 9
/**
 * 将日期格式化为字符串
 * @param {Date} date 要格式化的日期对象
 * @param {string} format 格式化字符串 yyyy-年  MM-月  dd-日 HH-小时 mm-分钟 ss-秒 ms-毫秒
 * @return {string} 日期字符串
//  */
// function formatDate(date, format) {
//     var year = date.getFullYear().toString().padStart(4, '0');
//     var month = (date.getMonth() + 1).toString().padStart(2, '0');
//     var day = date.getDate().toString().padStart(2, '0');

//     var hour = date.getHours().toString().padStart(2, '0');
//     var minute = date.getMinutes().toString().padStart(2, '0');
//     var second = date.getSeconds().toString().padStart(2, '0');
//     var millisecond = date.getMilliseconds();

//     return format
//       .replace('yyyy', year)
//       .replace('MM', month)
//       .replace('dd', day)
//       .replace('HH', hour)
//       .replace('mm', minute)
//       .replace('ss', second)
//       .replace('ms', millisecond);
//   }

//   var d = new Date();
//   console.log(formatDate(d, 'yyyy-MM-dd HH:mm:ss'));

// // 练习 10
// 将下面多个数组拼接成一个数组

// var nums1 = [1, 2, 3]
// var nums2 = [4, 5, 6]
// var nums3 = [7, 8, 9]

// var arr = nums1.concat(nums2).concat(nums3)
// console.log(arr);

// 练习 12
// 删除数组中的所有字符串
// var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7]
// for (var i = 0; i < nums.length; i++) {
//     if (typeof nums[i] === 'string') {
//         nums.splice(i, 1)
//         i--
//     }
// }

// console.log(nums)

// 练习 13
// 数组去重
// var nums = [1, 1, '1', 'a', 'b', 'a', 3, 5, 3, 7]
// var arr = []
// for (var i = 0; i < nums.length; i++){
//     if (!arr.includes(nums[i])) {
//         arr.push(nums[i])
//         continue
//     }
//     nums.splice(i, 1)
//     i--
// }

// console.log(nums)

// 练习 14
// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

// var filename = 'd://files/mymap/3.png'
// var arr = ['.jpg', '.bmp', '.webp', '.png']

// function checkSuf(name) {
//     var str = name.substring(name.lastIndexOf('.'))
//     return arr.includes(str)
// }

// console.log(checkSuf(filename));

// 练习 15
// 将下面的伪数组转换为真数组
// var fakeArr = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
// }

// fakeArr = Array.prototype.slice.call(fakeArr)
// console.log(fakeArr)

// 练习 16
// 进一步完善下面的扑克牌程序
// 给牌堆添加一个shuffle方法，该方法可以打乱牌堆中扑克牌的顺序

/**
 * 创建一张扑克牌
 * @param {number} number 1-1, ..., 11-J，12-Q，13-K，14-小王，15-大王
 * @param {number} color 1-黑桃  2-红桃  3-梅花  4-方片
 */
// function Poker(number, color) {
//     this.number = number
//     this.color = color
// }

// Poker.prototype.print = function () {
//     if (this.number === 14) {
//         console.log('joker')
//         return
//     }
//     if (this.number === 15) {
//         console.log('JOKER')
//         return
//     }
//     // 其他情况
//     // 得到花色
//     var colors = ['♠', '♥', '♣', '♦']
//     var color = colors[this.color - 1]
//     // 点数
//     var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
//     var number = numbers[this.number - 1]

//     console.log(color + number)
// }

// /*
//     一碟扑克牌
//   */
// function Deck() {
//     this.pokers = []
//     for (var i = 1; i <= 13; i++) {
//         for (var j = 1; j <= 4; j++) {
//             this.pokers.push(new Poker(i, j))
//         }
//     }
//     this.pokers.push(new Poker(14, 0))
//     this.pokers.push(new Poker(15, 0))
// }

// Deck.prototype.print = function () {
//     for (var i = 0; i < this.pokers.length; i++) {
//         this.pokers[i].print()
//     }
// }

// /**
//  * 洗牌，打乱牌堆中的扑克牌顺序
//  */
// Deck.prototype.shuffle = function () {
//     this.pokers.sort(function () {
//         return 0.5 - Math.random()
//     })
// }

// var deck = new Deck()
// deck.shuffle()
// console.log(deck);

// 练习 17
// var students = [
//     {
//         id: 988985,
//         name: '梁平',
//         sex: '女',
//         age: 15,
//         address: '安徽省 淮南市',
//         tel: '12957961008'
//     },
//     {
//         id: 299422,
//         name: '邱杰',
//         sex: '男',
//         age: 25,
//         address: '辽宁省 本溪市',
//         tel: '12685726676'
//     },
//     {
//         id: 723972,
//         name: '王超',
//         sex: '女',
//         age: 14,
//         address: '新疆维吾尔自治区 阿克苏地区',
//         tel: '15277794541'
//     },
//     {
//         id: 723768,
//         name: '冯秀兰',
//         sex: '女',
//         age: 29,
//         address: '辽宁省 丹东市',
//         tel: '13014888148'
//     },
//     {
//         id: 536273,
//         name: '赖军',
//         sex: '男',
//         age: 19,
//         address: '重庆 重庆市',
//         tel: '15152658611'
//     },
//     {
//         id: 940136,
//         name: '顾强',
//         sex: '男',
//         age: 20,
//         address: '吉林省 松原市',
//         tel: '18562759588'
//     },
//     {
//         id: 489462,
//         name: '戴敏',
//         sex: '男',
//         age: 25,
//         address: '湖南省 长沙市',
//         tel: '11513562318'
//     },
//     {
//         id: 863594,
//         name: '吕涛',
//         sex: '女',
//         age: 16,
//         address: '湖北省 襄阳市',
//         tel: '16246419558'
//     },
//     {
//         id: 718313,
//         name: '冯静',
//         sex: '女',
//         age: 28,
//         address: '黑龙江省 牡丹江市',
//         tel: '18243767800'
//     },
//     {
//         id: 262068,
//         name: '蔡明',
//         sex: '男',
//         age: 20,
//         address: '黑龙江省 七台河市',
//         tel: '14185862227'
//     },
//     {
//         id: 900366,
//         name: '廖磊',
//         sex: '女',
//         age: 23,
//         address: '青海省 海南藏族自治州',
//         tel: '19469661693'
//     },
//     {
//         id: 316019,
//         name: '冯洋',
//         sex: '男',
//         age: 16,
//         address: '江西省 新余市',
//         tel: '18842832768'
//     },
//     {
//         id: 773536,
//         name: '韩杰',
//         sex: '男',
//         age: 23,
//         address: '云南省 丽江市',
//         tel: '18560747335'
//     },
//     {
//         id: 494398,
//         name: '江涛',
//         sex: '男',
//         age: 24,
//         address: '山西省 大同市',
//         tel: '12774658592'
//     },
//     {
//         id: 177459,
//         name: '文艳',
//         sex: '男',
//         age: 27,
//         address: '山东省 青岛市',
//         tel: '16233511417'
//     },
//     {
//         id: 979439,
//         name: '杜秀英',
//         sex: '男',
//         age: 22,
//         address: '甘肃省 张掖市',
//         tel: '14723781356'
//     },
//     {
//         id: 142762,
//         name: '丁艳',
//         sex: '男',
//         age: 28,
//         address: '澳门特别行政区 澳门半岛',
//         tel: '13157638539'
//     },
//     {
//         id: 157141,
//         name: '邓静',
//         sex: '女',
//         age: 19,
//         address: '海南省 三亚市',
//         tel: '17658672240'
//     },
//     {
//         id: 243063,
//         name: '江刚',
//         sex: '女',
//         age: 15,
//         address: '安徽省 六安市',
//         tel: '18205383748'
//     },
//     {
//         id: 351709,
//         name: '乔刚',
//         sex: '女',
//         age: 12,
//         address: '安徽省 蚌埠市',
//         tel: '14143838021'
//     },
//     {
//         id: 236140,
//         name: '史平',
//         sex: '男',
//         age: 24,
//         address: '广西壮族自治区 百色市',
//         tel: '11895866733'
//     },
//     {
//         id: 254260,
//         name: '康娜',
//         sex: '男',
//         age: 29,
//         address: '辽宁省 铁岭市',
//         tel: '18783219853'
//     },
//     {
//         id: 387769,
//         name: '袁磊',
//         sex: '男',
//         age: 28,
//         address: '重庆 重庆市',
//         tel: '15243676922'
//     },
//     {
//         id: 692436,
//         name: '龙秀英',
//         sex: '男',
//         age: 18,
//         address: '吉林省 延边朝鲜族自治州',
//         tel: '18667285569'
//     },
//     {
//         id: 304202,
//         name: '姚静',
//         sex: '男',
//         age: 21,
//         address: '吉林省 松原市',
//         tel: '17962179634'
//     },
//     {
//         id: 533032,
//         name: '潘娜',
//         sex: '男',
//         age: 13,
//         address: '湖北省 孝感市',
//         tel: '14132684173'
//     },
//     {
//         id: 773792,
//         name: '萧磊',
//         sex: '男',
//         age: 29,
//         address: '河南省 焦作市',
//         tel: '13865617456'
//     },
//     {
//         id: 171440,
//         name: '邵勇',
//         sex: '男',
//         age: 16,
//         address: '宁夏回族自治区 固原市',
//         tel: '19454444332'
//     },
//     {
//         id: 428587,
//         name: '李芳',
//         sex: '男',
//         age: 29,
//         address: '四川省 宜宾市',
//         tel: '14751601674'
//     },
//     {
//         id: 926156,
//         name: '谭芳',
//         sex: '女',
//         age: 27,
//         address: '湖南省 长沙市',
//         tel: '18683429563'
//     },
//     {
//         id: 171494,
//         name: '夏秀英',
//         sex: '男',
//         age: 14,
//         address: '陕西省 安康市',
//         tel: '17732967642'
//     },
//     {
//         id: 549517,
//         name: '程娜',
//         sex: '女',
//         age: 24,
//         address: '内蒙古自治区 锡林郭勒盟',
//         tel: '18927839708'
//     },
//     {
//         id: 999121,
//         name: '武杰',
//         sex: '女',
//         age: 21,
//         address: '新疆维吾尔自治区 博尔塔拉蒙古自治州',
//         tel: '15349698338'
//     },
//     {
//         id: 440785,
//         name: '崔军',
//         sex: '男',
//         age: 26,
//         address: '山西省 临汾市',
//         tel: '14863312346'
//     },
//     {
//         id: 113636,
//         name: '廖勇',
//         sex: '女',
//         age: 19,
//         address: '重庆 重庆市',
//         tel: '18152536541'
//     },
//     {
//         id: 109280,
//         name: '崔强',
//         sex: '女',
//         age: 25,
//         address: '河南省 安阳市',
//         tel: '12838860122'
//     },
//     {
//         id: 988885,
//         name: '康秀英',
//         sex: '女',
//         age: 29,
//         address: '广东省 佛山市',
//         tel: '12637161150'
//     },
//     {
//         id: 751542,
//         name: '余磊',
//         sex: '女',
//         age: 15,
//         address: '香港特别行政区 九龙',
//         tel: '16716667565'
//     },
//     {
//         id: 821693,
//         name: '邵勇',
//         sex: '女',
//         age: 27,
//         address: '内蒙古自治区 鄂尔多斯市',
//         tel: '11869733772'
//     },
//     {
//         id: 595152,
//         name: '贺涛',
//         sex: '女',
//         age: 12,
//         address: '吉林省 通化市',
//         tel: '18172684836'
//     },
//     {
//         id: 209059,
//         name: '万勇',
//         sex: '男',
//         age: 27,
//         address: '江苏省 淮安市',
//         tel: '13523350881'
//     },
//     {
//         id: 331199,
//         name: '江艳',
//         sex: '男',
//         age: 29,
//         address: '内蒙古自治区 包头市',
//         tel: '14357786637'
//     },
//     {
//         id: 597029,
//         name: '廖磊',
//         sex: '女',
//         age: 22,
//         address: '新疆维吾尔自治区 伊犁哈萨克自治州',
//         tel: '14343812715'
//     },
//     {
//         id: 243965,
//         name: '马芳',
//         sex: '女',
//         age: 29,
//         address: '湖南省 长沙市',
//         tel: '12226278003'
//     },
//     {
//         id: 796997,
//         name: '郝霞',
//         sex: '女',
//         age: 29,
//         address: '辽宁省 锦州市',
//         tel: '15734778439'
//     },
//     {
//         id: 735045,
//         name: '吴娜',
//         sex: '男',
//         age: 18,
//         address: '江西省 鹰潭市',
//         tel: '12550200851'
//     },
//     {
//         id: 858934,
//         name: '石秀英',
//         sex: '男',
//         age: 21,
//         address: '福建省 南平市',
//         tel: '14296454005'
//     },
//     {
//         id: 646003,
//         name: '苏静',
//         sex: '女',
//         age: 17,
//         address: '澳门特别行政区 澳门半岛',
//         tel: '11456865751'
//     },
//     {
//         id: 607537,
//         name: '于磊',
//         sex: '女',
//         age: 25,
//         address: '海南省 海口市',
//         tel: '14742847575'
//     },
//     {
//         id: 817410,
//         name: '胡超',
//         sex: '女',
//         age: 19,
//         address: '海外 海外',
//         tel: '16875962137'
//     },
//     {
//         id: 985064,
//         name: '任杰',
//         sex: '男',
//         age: 17,
//         address: '云南省 迪庆藏族自治州',
//         tel: '17548787335'
//     },
//     {
//         id: 644060,
//         name: '汪秀英',
//         sex: '男',
//         age: 19,
//         address: '香港特别行政区 九龙',
//         tel: '10278533538'
//     },
//     {
//         id: 755803,
//         name: '徐磊',
//         sex: '女',
//         age: 26,
//         address: '江苏省 徐州市',
//         tel: '18721465794'
//     },
//     {
//         id: 538130,
//         name: '熊洋',
//         sex: '男',
//         age: 13,
//         address: '吉林省 白城市',
//         tel: '13491345641'
//     },
//     {
//         id: 977696,
//         name: '孟磊',
//         sex: '男',
//         age: 24,
//         address: '香港特别行政区 香港岛',
//         tel: '10541964547'
//     },
//     {
//         id: 683438,
//         name: '赵霞',
//         sex: '男',
//         age: 28,
//         address: '重庆 重庆市',
//         tel: '13085741830'
//     },
//     {
//         id: 342123,
//         name: '曾芳',
//         sex: '女',
//         age: 15,
//         address: '湖南省 邵阳市',
//         tel: '11645124878'
//     },
//     {
//         id: 261733,
//         name: '马芳',
//         sex: '女',
//         age: 22,
//         address: '台湾 新北市',
//         tel: '10255722846'
//     },
//     {
//         id: 303578,
//         name: '姜杰',
//         sex: '女',
//         age: 17,
//         address: '黑龙江省 齐齐哈尔市',
//         tel: '12581543256'
//     },
//     {
//         id: 907392,
//         name: '熊杰',
//         sex: '男',
//         age: 16,
//         address: '广西壮族自治区 北海市',
//         tel: '18941398494'
//     }
// ]

// // 得到所有学生的姓名形成的字符串：张三,李四,王五,老邓...
// var nameArr = []
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     nameArr.push(element.name)
// }
// var names = nameArr.join(',');
// console.log(names);

// // 将学生数组按照年龄的升序排序

// var sortAge = students.sort(function (a, b) {
//     return a.age - b.age;
// });
// console.log(sortAge)

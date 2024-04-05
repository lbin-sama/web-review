// // 变量：a，字变量：2
// var a = 2

// // 表达式：a * 2
// var b = a * 2

// console.log(a, b, b * 5);

/**
 * 转义符
 * \' = '
 * \" = "
 * \n = 换行
 * \r = 回车
 *
 * \r\n通常连一起用
 */

// ---------------------------------------------------------------------------

/**
 *
 * 数据类型：
 *  原始类型：number string boolean null undefined
 *      undefined 未定义
 *      null 未设值
 *  引用类型：对象（包含普通对象，数组，函数）
 *      复合型的数据
 *
 */

/**
 * 对象最终转换
 *
 * var obj = {
 *  name: 'zs',
 *  age: 12
 * }
 *
 *  ==> 转换 原始写法
 * var obj = {
 *  'name': 'zs',
 *  'age': 12
 * }
 *
 * obj.name == 转换 obj['name']
 *
 * obj.name：语法糖
 */

/**
 * 数组
 *
 * let list = [2, 4, 5]
 * =====
 * let list = {
 *  0: 2,
 *  1: 4,
 *  2: 5,
 *  length: 3
 * }
 *
 * 特殊对象，即属性名为下标
 *
 */

/**
 * =================================================================
 * 运算
 *
 * 类型的隐式运算
 *
 * 例：+ - * / ：期望两端都是数字，一旦类型不符合，将会进行转换，再运算
 * 该转换为临时转换，不会对原数据造成影响
 *      var n = +a // 不管a是什么类型，都会转换为数字，存入n
 *      var s = a + '' // 不管a是什么类型，都会转换为字符串，存入s
 *      var b = !!a // 不管a是什么类型，都会转换为boolean，存入b
 *
 * + 号遇到字符串，会以字符串为主
 *
 * a *= 2 + 1  => a = a * (2 + 1)
 * 即 a += xxx => a = a + (xxx), *= += -=都一样
 *
 *
 * && 返回最后一个的结果，除非第一个判断为false
 *
 * 1 && 2  => 2
 * 0 && 1  => 0
 *
 * if (1 && 2) => if (2) =>隐私转换 if (true)
 *
 *
 * 故此可以利用这一规则
 * if (flag) {
 *  console.log(flag)
 * }
 *
 * =
 *
 * flag && console.log(flag)
 *
 *
 */

/* 
    练习1
    编写一个完美的求和函数：
    1. 若两个数据都是普通数字，求和即可
    2. NaN的数据需要变为0
    3. 其他类型的数据需要转换为数字
*/

console.log(
  "数据运算============================================================"
);

// function sum(a, b) {
//     let sum = (+a || 0) + (+b || 0);
//     console.log('sum', sum);
// }
// sum('', 'f32')

/* 
    练习2
    不使用if，判断一个年份是否是闰年

    闰年规则：
    1. 4年一闰，百年不闰
    2. 400年必闰
    上述两点满足其一即可
*/
// 判断变量year是否是闰年
// var year = 1900
// console.log('闰年', (!(year % 4) && !!(year % 100)) || !(year % 400))

/* 
    练习三
    不使用if
    根据身高、体重，计算健康状况

    健康状况取决于BMI   BMI = 体重 ÷ 身高的平方。（体重单位：千克；身高单位：米。）
    BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

    输出 正常、偏瘦、偏胖
*/
// var height = 185, // 身高（厘米）
//     weight = 100; // 体重（千克）

// let bmi = (weight / ((height / 100) ** 2))

// console.log(bmi, bmi < 20 ? '偏瘦' : bmi > 25 ? '偏胖' : '正常');

/**
 * =============================================
 * 数据的流程
 *
 */

console.log(
  "数据流程============================================================"
);
/* 
1. 输出100个hello world
*/

// for (let index = 0; index < 100; index++) {
//     console.log('hello world ' + (index + 1));
// }

/* 
2. 输出100~200
*/

// for (let index = 0; index < 101; index++) {
//     console.log((index + 100));
// }

/* 
3. 创建一个包含1~100的数组
*/

// const arr = []
// for (let index = 0; index < 100; index++) {
//     arr.push((index + 1));
// }
// console.log(arr);

/* 
4. 定义一个数组，遍历输出它的每一项
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

/* 
1. 输出1-100的所有奇数
*/

// for (let index = 1; index <= 100; index++) {
//     index % 2 !== 0 && console.log(index)
// }

/* 
2. 定义一个数组，输出数组中所有的奇数
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element % 2 !== 0 && console.log(element)
// }

/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// const newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element % 2 !== 0 && newArr.push(element)
// }

// console.log(newArr);

/* 
1. 1~100求和
*/

// let sum = 0;
// for (let index = 1; index <= 100; index++) {
//     sum += index
// }

// console.log(sum)

/* 
2. 求某个数的阶乘
*/

// let num = 5
// let sum = 1
// for (let index = 1; index <= num; index++) {
//     sum *= index
// }

// console.log(sum)

/* 
3. 数组求和
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     sum += element
// }

// console.log(sum)

/* 
4. 求数组中的奇数的个数
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// let num = 0

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element % 2 !== 0 && num++
// }

// console.log(num)

/* 
5. 求数组中的奇数和
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// let sum = 0

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element % 2 !== 0 && (sum += element)
// }

// console.log(sum)

/* 
1. 数组中是否存在某个数，输出 是 或 否
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// let num = 5
// let isIn = false
// for (let index = 0; index < arr.length; index++) {
//    if (arr[index] === num) {
//     isIn = true
//     break
//    }
// }
// console.log(isIn);

/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num = 91
// let i = -1

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     element === num && (i = index)
// }

// console.log(i)

/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 155]

// let tempArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if (element % 2 !== 0) {
//         tempArr.push(element)
//     }
// }

// let result = 0
// if ((tempArr && tempArr.length > 0)) {
//     result = tempArr[0] + tempArr[tempArr.length - 1]
// }

// console.log(result)

/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/

// const arr1 = [0, 2, 4, 6, 8, 1]

// const arr2 = [0, 2, 4, 6, 8, 9]

// let hasNum

// // console.log(hasNum === undefined)

// for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index] % 2 !== 0) {
//         hasNum = true
//         break
//     }
// }

// if (hasNum !== undefined) {
//     for (let index = 0; index < arr2.length; index++) {
//         if (arr2[index] % 2 !== 0) {
//             hasNum = true
//             break
//         }
//         hasNum = false
//     }
// } else {
//     hasNum = false
// }

// console.log(hasNum)

/* 
1. 输出一个对象的所有键值对
*/

// const obj = {
//     name: "xxx",
//     age: 18,
//     city: "shanghai"
// }

// for (let key in obj) {
//     console.log(key, obj[key])
// }

/* 
2. 计算对象中字符串属性的数量
*/

// const obj = {
//     name: "xxx",
//     age: 18,
//     city: "shanghai"
// }

// let num = 0

// for (let key in obj) {
//     if (typeof obj[key] === "string") {
//         num++
//     }
// }

// console.log(num)

/* 
3. 将一个对象所有的数字属性，转换为字符串，并在其前面加上￥
例如：
{
    name:"xxx",
    balance: 199.8, //余额
    taken: 3000 //消费
}
-->
{
    name:"xxx",
    balance: '￥199.8', //余额
    taken: '￥3000' //消费
}
*/

// const obj = {
//     name:"xxx",
//     balance: 199.8, //余额
//     taken: 3000 //消费
// }

// let newObj = {}

// for (let key in obj) {
//     if (typeof obj[key] === "number") {
//         newObj[key] = `￥${obj[key]}`
//     } else {
//         newObj[key] = obj[key]
//     }
// }

// console.log(newObj)

/* 
4. 按照下面的要求进行转换
[1, 2, 3]  
-->
[
    {number:1, doubleNumber: 2},
    {number:2, doubleNumber: 4},
    {number:3, doubleNumber: 6},
]
*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push({
//         number: element,
//         doubleNumber: element * 2
//     })
// }

// console.log(newArr)

var studentArr = [
  {
    id: 23123213,
    name: "陈梁平",
    sex: "女",
    age: 15,
    address: "安徽省 淮南市",
    tel: "12955561008",
  },
  {
    id: 988985,
    name: "梁平",
    sex: "女",
    age: 15,
    address: "安徽省 淮南市",
    tel: "12957961008",
  },
  {
    id: 299422,
    name: "邱杰",
    sex: "男",
    age: 25,
    address: "辽宁省 本溪市",
    tel: "12685726676",
  },
  {
    id: 723972,
    name: "王超",
    sex: "女",
    age: 14,
    address: "新疆维吾尔自治区 阿克苏地区",
    tel: "15277794541",
  },
  {
    id: 723768,
    name: "冯秀兰",
    sex: "女",
    age: 29,
    address: "辽宁省 丹东市",
    tel: "13014888148",
  },
  {
    id: 536273,
    name: "赖军",
    sex: "男",
    age: 19,
    address: "重庆 重庆市",
    tel: "15152658611",
  },
  {
    id: 940136,
    name: "顾强",
    sex: "男",
    age: 20,
    address: "吉林省 松原市",
    tel: "18562759588",
  },
  {
    id: 489462,
    name: "戴敏",
    sex: "男",
    age: 25,
    address: "湖南省 长沙市",
    tel: "11513562318",
  },
  {
    id: 863594,
    name: "吕涛",
    sex: "女",
    age: 16,
    address: "湖北省 襄阳市",
    tel: "16246419558",
  },
  {
    id: 718313,
    name: "冯静",
    sex: "女",
    age: 28,
    address: "黑龙江省 牡丹江市",
    tel: "18243767800",
  },
  {
    id: 262068,
    name: "蔡明",
    sex: "男",
    age: 20,
    address: "黑龙江省 七台河市",
    tel: "14185862227",
  },
  {
    id: 900366,
    name: "廖磊",
    sex: "女",
    age: 23,
    address: "青海省 海南藏族自治州",
    tel: "19469661693",
  },
  {
    id: 316019,
    name: "冯洋",
    sex: "男",
    age: 16,
    address: "江西省 新余市",
    tel: "18842832768",
  },
  {
    id: 773536,
    name: "韩杰",
    sex: "男",
    age: 23,
    address: "云南省 丽江市",
    tel: "18560747335",
  },
  {
    id: 494398,
    name: "江涛",
    sex: "男",
    age: 24,
    address: "山西省 大同市",
    tel: "12774658592",
  },
  {
    id: 177459,
    name: "文艳",
    sex: "男",
    age: 27,
    address: "山东省 青岛市",
    tel: "16233511417",
  },
  {
    id: 979439,
    name: "杜秀英",
    sex: "男",
    age: 22,
    address: "甘肃省 张掖市",
    tel: "14723781356",
  },
  {
    id: 142762,
    name: "丁艳",
    sex: "男",
    age: 28,
    address: "澳门特别行政区 澳门半岛",
    tel: "13157638539",
  },
  {
    id: 157141,
    name: "邓静",
    sex: "女",
    age: 19,
    address: "海南省 三亚市",
    tel: "17658672240",
  },
  {
    id: 243063,
    name: "江刚",
    sex: "女",
    age: 15,
    address: "安徽省 六安市",
    tel: "18205383748",
  },
  {
    id: 351709,
    name: "乔刚",
    sex: "女",
    age: 12,
    address: "安徽省 蚌埠市",
    tel: "14143838021",
  },
  {
    id: 236140,
    name: "史平",
    sex: "男",
    age: 24,
    address: "广西壮族自治区 百色市",
    tel: "11895866733",
  },
  {
    id: 254260,
    name: "康娜",
    sex: "男",
    age: 29,
    address: "辽宁省 铁岭市",
    tel: "18783219853",
  },
  {
    id: 387769,
    name: "袁磊",
    sex: "男",
    age: 28,
    address: "重庆 重庆市",
    tel: "15243676922",
  },
  {
    id: 692436,
    name: "龙秀英",
    sex: "男",
    age: 18,
    address: "吉林省 延边朝鲜族自治州",
    tel: "18667285569",
  },
  {
    id: 304202,
    name: "姚静",
    sex: "男",
    age: 21,
    address: "吉林省 松原市",
    tel: "17962179634",
  },
  {
    id: 533032,
    name: "潘娜",
    sex: "男",
    age: 13,
    address: "湖北省 孝感市",
    tel: "14132684173",
  },
  {
    id: 773792,
    name: "萧磊",
    sex: "男",
    age: 29,
    address: "河南省 焦作市",
    tel: "13865617456",
  },
  {
    id: 171440,
    name: "邵勇",
    sex: "男",
    age: 16,
    address: "宁夏回族自治区 固原市",
    tel: "19454444332",
  },
  {
    id: 428587,
    name: "李芳",
    sex: "男",
    age: 29,
    address: "四川省 宜宾市",
    tel: "14751601674",
  },
  {
    id: 926156,
    name: "谭芳",
    sex: "女",
    age: 27,
    address: "湖南省 长沙市",
    tel: "18683429563",
  },
  {
    id: 171494,
    name: "夏秀英",
    sex: "男",
    age: 14,
    address: "陕西省 安康市",
    tel: "17732967642",
  },
  {
    id: 549517,
    name: "程娜",
    sex: "女",
    age: 24,
    address: "内蒙古自治区 锡林郭勒盟",
    tel: "18927839708",
  },
  {
    id: 999121,
    name: "武杰",
    sex: "女",
    age: 21,
    address: "新疆维吾尔自治区 博尔塔拉蒙古自治州",
    tel: "15349698338",
  },
  {
    id: 440785,
    name: "崔军",
    sex: "男",
    age: 26,
    address: "山西省 临汾市",
    tel: "14863312346",
  },
  {
    id: 113636,
    name: "廖勇",
    sex: "女",
    age: 19,
    address: "重庆 重庆市",
    tel: "18152536541",
  },
  {
    id: 109280,
    name: "崔强",
    sex: "女",
    age: 25,
    address: "河南省 安阳市",
    tel: "12838860122",
  },
  {
    id: 988885,
    name: "康秀英",
    sex: "女",
    age: 29,
    address: "广东省 佛山市",
    tel: "12637161150",
  },
  {
    id: 751542,
    name: "余磊",
    sex: "女",
    age: 15,
    address: "香港特别行政区 九龙",
    tel: "16716667565",
  },
  {
    id: 821693,
    name: "邵勇",
    sex: "女",
    age: 27,
    address: "内蒙古自治区 鄂尔多斯市",
    tel: "11869733772",
  },
  {
    id: 595152,
    name: "贺涛",
    sex: "女",
    age: 12,
    address: "吉林省 通化市",
    tel: "18172684836",
  },
  {
    id: 209059,
    name: "万勇",
    sex: "男",
    age: 27,
    address: "江苏省 淮安市",
    tel: "13523350881",
  },
  {
    id: 331199,
    name: "江艳",
    sex: "男",
    age: 29,
    address: "内蒙古自治区 包头市",
    tel: "14357786637",
  },
  {
    id: 597029,
    name: "廖磊",
    sex: "女",
    age: 22,
    address: "新疆维吾尔自治区 伊犁哈萨克自治州",
    tel: "14343812715",
  },
  {
    id: 243965,
    name: "马芳",
    sex: "女",
    age: 29,
    address: "湖南省 长沙市",
    tel: "12226278003",
  },
  {
    id: 796997,
    name: "郝霞",
    sex: "女",
    age: 29,
    address: "辽宁省 锦州市",
    tel: "15734778439",
  },
  {
    id: 735045,
    name: "吴娜",
    sex: "男",
    age: 18,
    address: "江西省 鹰潭市",
    tel: "12550200851",
  },
  {
    id: 858934,
    name: "石秀英",
    sex: "男",
    age: 21,
    address: "福建省 南平市",
    tel: "14296454005",
  },
  {
    id: 646003,
    name: "苏静",
    sex: "女",
    age: 17,
    address: "澳门特别行政区 澳门半岛",
    tel: "11456865751",
  },
  {
    id: 607537,
    name: "于磊",
    sex: "女",
    age: 25,
    address: "海南省 海口市",
    tel: "14742847575",
  },
  {
    id: 817410,
    name: "胡超",
    sex: "女",
    age: 19,
    address: "海外 海外",
    tel: "16875962137",
  },
  {
    id: 985064,
    name: "任杰",
    sex: "男",
    age: 17,
    address: "云南省 迪庆藏族自治州",
    tel: "17548787335",
  },
  {
    id: 644060,
    name: "汪秀英",
    sex: "男",
    age: 19,
    address: "香港特别行政区 九龙",
    tel: "10278533538",
  },
  {
    id: 755803,
    name: "徐磊",
    sex: "女",
    age: 26,
    address: "江苏省 徐州市",
    tel: "18721465794",
  },
  {
    id: 538130,
    name: "熊洋",
    sex: "男",
    age: 13,
    address: "吉林省 白城市",
    tel: "13491345641",
  },
  {
    id: 977696,
    name: "孟磊",
    sex: "男",
    age: 24,
    address: "香港特别行政区 香港岛",
    tel: "10541964547",
  },
  {
    id: 683438,
    name: "赵霞",
    sex: "男",
    age: 28,
    address: "重庆 重庆市",
    tel: "13085741830",
  },
  {
    id: 342123,
    name: "曾芳",
    sex: "女",
    age: 15,
    address: "湖南省 邵阳市",
    tel: "11645124878",
  },
  {
    id: 261733,
    name: "马芳",
    sex: "女",
    age: 22,
    address: "台湾 新北市",
    tel: "10255722846",
  },
  {
    id: 303578,
    name: "姜杰",
    sex: "女",
    age: 17,
    address: "黑龙江省 齐齐哈尔市",
    tel: "12581543256",
  },
  {
    id: 907392,
    name: "熊杰",
    sex: "男",
    age: 16,
    address: "广西壮族自治区 北海市",
    tel: "18941398494",
  },
];

/**
   * demo
   * {
      id: 988985,
      name: '梁平',
      sex: '女',
      age: 15,
      address: '安徽省 淮南市',
      tel: '12957961008',
    }
   */

// 遍历输出学生的姓名

//   for (let index = 0; index < studentArr.length; index++) {
//     const element = studentArr[index]
//     console.log(element.name, index);
//   }

// 得到所有女生（新数组）

//   let feMaleArr = []

//   for (let index = 0; index < studentArr.length; index++) {
//     const element = studentArr[index]
//     if (element.sex === '女') {
//       feMaleArr.push(element)
//     }
//   }

//   console.log(feMaleArr);

// 得到所有年龄在25岁以下的女生（新数组）

// let feMaleArr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.age < 25 && element.sex === "女") {
//     feMaleArr.push(element);
//   }
// }
// console.log(feMaleArr, feMaleArr.length);

// 得到所有姓陈的学生（新数组）

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.name.indexOf("陈") === 0) {
//     arr.push(element);
//   }
// }

// console.log(arr, arr.length);

// 得到所有电话号码以1结尾的学生（新数组）

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.tel.lastIndexOf("1") === element.tel.length - 1) {
//     arr.push(element);
//   }
// }

// console.log(arr, arr.length);

// 得到所有学生姓名组成的数组（新数组）

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   arr.push(studentArr[index].name);
// }

// console.log(arr, arr.length);

// 得到所有女生的姓名数组（新数组）

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.sex === "女") {
//     arr.push(element.name);
//   }
// }

// console.log(arr, arr.length);

// 得到所有女生的姓名和电话号码 [ {name:'monica', tel:'18122223333'} ]

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.sex === "女") {
//     arr.push({
//       name: element.name,
//       tel: element.tel,
//     });
//   }
// }

// console.log(arr, arr.length);

// 得到所有学生的年龄的总和

// let ageTotal = 0;

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   ageTotal += element.age;
// }

// console.log(ageTotal);

// 得到所有学生的平均年龄

// let ageTotal = 0;

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   ageTotal += element.age;
// }

// console.log(ageTotal / studentArr.length);

// 得到一个对象： {name:['张三', '李四', ...], age: [17, 25, ...]}

// let obj = {
//   name: [],
//   age: [],
// };

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   obj.name.push(element.name);
//   obj.age.push(element.age);
// }

// console.log(obj);

// 找到id为796997的学生对象

// let obj;

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.id === 796997) {
//     obj = element;
//     break;
//   }
// }

// console.log(obj);

// 是否包含年龄大于28岁的男生

// let arr = [];

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.age > 28 && element.sex === "男") {
//     arr.push(element);
//   }
// }

// console.log(arr, arr.length);

// 是否所有的女生年龄都在28岁以内

// let flag = false;

// for (let index = 0; index < studentArr.length; index++) {
//   const element = studentArr[index];
//   if (element.age < 28 && element.sex === "女") {
//     flag = true;
//     break;
//   }
// }

// console.log(flag);

/**
 * =================================================================
 * 流程切割  => 函数
 */

console.log(
  "流程切割  => 函数 ================================================================="
);
// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */

function factorial(n) {
  if (n < 1) {
    return 0;
  } else {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
      sum *= i;
    }
    return sum;
  }
}

// 利用上面的函数，完成下面的练习题

/* 
1. 输出5的阶乘
*/

// console.log(factorial(5));

/* 
2. 求5和6的阶乘之和，然后输出
*/

// console.log(factorial(5) + factorial(6));

/* 
3. 输出阶乘结果不超过1000的所有数字
*/

// let i = 1;
// let flag = false;

// while (!flag) {
//   let result = factorial(i);
//   if (result > 1000) {
//     flag = true;
//   } else {
//     console.log(i, result);
//     i++;
//   }
// }

// 完成下面的函数

/**
 * 在arr中寻找是否存在target
 * @param {Array} arr 要遍历寻找的数组
 * @param {any} target 要寻找的目标
 * @return {boolean} 是否找到
 */

function includes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// 利用上面的函数，完成下面的练习题
/* 
1. 判断nums中是否存在8，输出是或否
*/

// var nums = [1, 3, 8, 2, 5, 1, 9];
// console.log(includes(nums, 8) ? "是" : "否");

/* 
2. 判断数字2是否同时存在于nums和nums2中，输出是或否
*/

// var nums2 = [6, 3, 2, 7, 11, 33];
// console.log(includes(nums, 2) && includes(nums2, 2) ? "是" : "否");

/* 
3. 思考题：判断nums3中是否所有数字都在nums中存在，输出是或否
*/

// var nums3 = [2, 5, 1];

// let flag = true;

// for (let i = 0; i < nums3.length; i++) {
//   if (!includes(nums, nums3[i])) {
//     flag = false;
//     break;
//   }
// }

// console.log(flag ? "是" : "否");

console.log('构造函数================================================================================')

// 函数创建对象
// function createPerson(firstName, lastName) {
//     var person = {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: firstName + ' ' + lastName
//     }
//     person.sayHi = function () {
//         console.log('Hi,' + this.fullName)
//     }
//     return person
// }

// let person1 = createPerson('John', 'Doe')
// person1.sayHi()
// console.log(person1)

// let person2 = createPerson('shen', 'su yi')
// person2.sayHi()
// console.log(person2)

/*
构造函数
    构造函数是函数的一种特殊形式，用来创建对象
    构造函数的语法：function 构造函数名(参数列表) { 代码 }
*/
// 构造函数创建对象， 首字母大写，大驼峰
// function Person(firstName, lastName) {
//     // var this = {} // 注释掉，构造函数会默认生成
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = firstName + ' ' + lastName
//     this.sayHi = function () {
//         console.log('Hi,' + this.fullName)
//     }

//     // return this
// }

// let person1 = new Person('John', 'Doe')
// person1.sayHi()

// let person2 = new Person('shen', 'su yi')
// person2.sayHi()

/*
JS所有对象都是通过构造函数产生

var obj = {
    a: 1,
    b: 2
}
也是通过构造函数产生，这种写法是一种语法糖
=>
var obj = new Object()
obj.a = 1
obj.b = 2

语法糖：
var arr = [1, 2, 3]
=>
var arr = new Array(1, 2, 3)

函数本身也是一个对象
语法糖
function sum(a, b) {
    return a + b
}
=>
var sum = new Function('a', 'b', 'return a + b') // 参数，参数，函数体
*/

/* 
    利用构造函数创建一幅扑克牌
*/

// function Deck() {
//     // 一幅扑克牌
//     this.cards = []

//     for (let i = 0; i < 52; i++) {
//         this.cards.push(new Poker((i % 13) + 1, Math.floor(i / 13) + 1)) // 向下取整Math.floor
//     }

//     this.cards.push(new Poker(0, 0))
//     this.cards.push(new Poker(0, 1))

//     this.show = function () {
//         for (let i = 0; i < this.cards.length; i++) {
//             this.cards[i].show()
//         }
//     }
// }

// /**
//  * 一张扑克牌
//  * @param {*} num 数字，0 鬼
//  * @param {*} decor 花色，0 小鬼，1 大鬼
//  */
// function Poker(num, decor) {
//     this.num = num
//     this.decor = decor
//     this.value = setValue(num, decor)

//     this.show = function () {
//         console.log(this.value)
//     }

//     function setValue(num, decor) {
//         var value
//         if (num === 0) {
//             value = decor === 0 ? '小鬼' : '大鬼'
//             return value
//         }

//         const color = ['♠', '♥', '♣', '♦']
//         const number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
//         value = color[decor - 1] + '' + number[num - 1]
//         return value
//     }
// }

// var myDeck = new Deck()
// myDeck.show()

console.log('原型================================================================================')

// function User(name, age) {
//     this.name = name
//     this.age = age
//     // this.sayHi = function () {
//     //     console.log('Hi, I am ' + this.name + '. I am' + this.age)
//     // }
// }

// User.prototype.sayHi = function () {
//     console.log('Hi, I am '+ this.name + '. I am ' + this.age)
// }

// var u1 = new User('shen su yi', 18)
// var u2 = new User('zs', 18)
// var u3 = new User('lisa', 18)

// console.log([u1, u2, u3], u1.sayHi() === u2.sayHi()) // true

/*
u1.sayHi === u2.sayHi = true
上述代码中，通过构造函数创建用户对象
    缺陷：没有用户对象中都含有一个sayHi方法，对于每个用户而言sayHi是完全一样的没必要为它们单独生成，
        当对象多起来，单独生成会造成内存空间的浪费
    解决：原型

原型（例图：同文件夹下prototype.png）所有函数都有，但通常只在构造函数上使用
    每个函数都会自动附带一个属性prototype，该属性的值是一个普通对象，称之为原型对象
实例
    instance，通过new产生的对象称之为实例
    由于JS所有对象都是通过new产生的，因此严格来说JS中所有对象都称之为实例
隐式原型
    每个实例都拥有一个特殊的属性__proto__，称之为隐式原型，它指向构造函数的原型
    u1.__proto === User.prototype
意义
    当访问实例成员时，先找自身，如果不存在，会自动从隐式原型中寻找
    如此，可以把公共成员，放到函数原型中，即可以被所有实例共享

*/

/* 
    使用原型重构之前的扑克牌程序
*/

// function Deck() {
//     // 一幅扑克牌
//     this.cards = []

//     for (let i = 0; i < 52; i++) {
//         this.cards.push(new Poker((i % 13) + 1, Math.floor(i / 13) + 1)) // 向下取整Math.floor
//     }

//     this.cards.push(new Poker(0, 0))
//     this.cards.push(new Poker(0, 1))
// }

// Deck.prototype.show = function () {
//     for (let i = 0; i < this.cards.length; i++) {
//         this.cards[i].show()
//     }
// }

// /**
//  * 一张扑克牌
//  * @param {*} num 数字，0 鬼
//  * @param {*} decor 花色，0 小鬼，1 大鬼
//  */
// function Poker(num, decor) {
//     this.num = num
//     this.decor = decor
// }

// Poker.prototype.show = function () {
//     const num = this.num
//     const decor = this.decor
//     var value
//     if (num === 0) {
//         value = decor === 0 ? '小鬼' : '大鬼'
//         console.log(value);
//         return
//     }

//     const color = ['♠', '♥', '♣', '♦']
//     const number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
//     value = color[decor - 1] + '' + number[num - 1]
//     console.log(value);
// }

// var myDeck = new Deck()
// myDeck.show()

console.log('this================================================================================')
/*
JS中，this关键字在不同的场景，指代的含义不同，全局作用域，函数作用域两个的this
    在全局代码中使用this，指代全局对象(在真实开发中，很少在全局代码中使用this)

    在函数代码中使用this，它的指向取决于函数是如何被调用的
    调用方式            实例                    函数中的this指向
    通过new调用         new method()            新对象
    直接调用            method()                全局对象
    通过对象调用        obj.method()            前面的对象
    call               method.call(ctx)        call的第一个参数
    apply              method.apply(ctx)       apply的第一个参数
*/

// function User(name, age) {
//     this.name = name
//     this.age = age
//     // 上述this指向谁，无法说清，只有调用的时候才知道（即运行时
//     console.log(this)
// }

// new User(1, 1) // new调用，指向User产生的对象 User
// User() // 直接调用，指向全局对象，window

// var obj = {
//     a: 1,
//     method: function () {
//         console.log(this)
//     },
//     b: {
//         a1: 2,
//         method: function () {
//             console.log(this)
//         }
//     }
// }

// obj.method() // 通过对象调用，指向前面的对象 obj
// obj.b.method() // 通过对象调用，指向前面的对象 b
// var test = obj.b.method
// test() // 直接调用，指向全局对象，window

// function m(a, b) {
//     console.log(this, a, b)
// }

// var arr = [1, 2, 3]
// m.call(arr, 1, 2) // m.call() 也是调用函数，相当于m()，但是可以更改this指向，这里this指向arr

// m.apply(arr, [1, 2]) // m.apply()与m.call()相同，就是参数传递不一样，需要用数组包起来

// // 练习1
// var person = {
//     name: 'monica',
//     age: 17,
//     addr: '192.168.',
//     tel: '157777777',
//     sayHi: function () {
//         // 完成该方法，打印姓名和年龄
//         console.log('完成该方法，打印姓名和年龄', this.name, this.age)
//     }
// }

// person.sayHi() // 调用sayHi方法，打印姓名和年龄 monica 17

// // 练习2
// // 为所有对象添加方法print，打印对象的键值对

// Object.prototype.printKeyValue = function () {
//     for (let key in this) {
//         // 属性 in 对象 ==> 判断属性名是否在对象自身及其隐式原型上
//         if (key in this) {
//             if (this.hasOwnProperty(key)) {
//                 console.log(key + ':' + this[key])
//             }
//         }
//     }
// }

// person.printKeyValue()

// 练习3
// 能否不使用new，通过User函数创建对象（不能更改User函数）
// 解：call aplly 调用函数，改变this的指向来调用

// function User(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = firstName + lastName
// }

// const obj = {}
// User.call(obj,'shen', 'su yi')
// console.log(obj);

console.log('原型链================================================================================')

/*
所有的对象都是通过new来创建的
*/
// function User(name, age) {
//     this.name = name
//     this.age = age
// }
// var u1 = new User('南宫', 18) // 对象 u1 通过 new User 创建
// var u2 = { // 对象 u2 通过new Object 创建
//     name: '小明',
//     age: '18'
// }

// // 等效于
// var u2 = new Object()
// u2.name = '小明',
// u2.age = 18

/*
    上述代码形成原型图
        原型 <----------- prototype -------- User
         ↑                                    |
         |                                    |
     __proto__                                |
         |                                    |
         |                                    |
         u1 <------------- new ----------------
 

         
        原型 <----------- prototype -------- Object
         ↑                                    |
         |                                    |
     __proto__                                |
         |                                    |
         |                                    |
         u2 <-------------- new ---------------

    原型对象本身也是一个对象，默认情况下，是通过 new Object 创建的，因此，上面两副原型图是可以发生关联的
    即原型链：

        null
         ↑                                    
         |                                    
         |                                    
        原型 <----------- prototype -------- Object
         ↑                                    |
         |                                    |
     __proto__        --------- new -----------
         |            |                        
         |            |                       
        原型 <----------- prototype -------- User
         ↑                                    |
         |                                    |
     __proto__                                |
         |                                    |
         |                                    |
         u1 <-------------- new ---------------

    Object.prototype.__proto__ 比较特殊，它固定指向null
    由此可见，u1 的隐式原型形成了一个链条，称之为原型链
        u1 --- __proto__ ---> User的原型 --- __proto__ ---> Object的原型 --- __proto__ ---> null
    当读取对象成员时，会先看对象自身是否有该成员，如果没有，就依次在其原型链上查找

*/

// 练习1
// toString方法属于Object.prototype，它会把对象转换为字符串的形式 [object Object]
// 这种格式并非每个对象想要的
// 1. 解释数组的toString为什么能得到不同的格式
// 2. 如果自己的构造函数希望改变toString，如何改变
// 解

// 1 数组是一个特殊的对象，它是通过new Array(1,2,3)来的，与普通对象原型不同，在它的原型原型上重写toString方法即可得到不同的格式
// let arr = [1, 2, 3]
// Array.prototype.toString = function () {
//     let param = ''
//     for (const key in this) {
//         if (this.hasOwnProperty(key)) {
//             param += key + '=' + this[key] + "\n"
//         }
//     }
//     return param
// }
// console.log(arr.toString())

// 2 通过 构造函数的原型改变

// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// var obj = new User('ssy', 18)

// console.log(obj.toString())

// // 重写构造函数的toString（）

// User.prototype.toString = function () {
//     let param = ''
//     for (const key in this) {
//         if (this.hasOwnProperty(key)) {
//             param += key + ': ' + this[key] + '\n'
//         }
//     }
//     return param
// }
// console.log(obj.toString())

// 练习2
// 判断arr1和arr2是否是真数组
// var arr1 = [1, 2, 3, 4]; // 真数组
// // 类数组(伪数组)
// var arr2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// console.log(arr1 instanceof Array, arr2 instanceof Array) // 1
// console.log(Object.getPrototypeOf(arr1) === Array.prototype) // 2

//练习3
// 创建一个没有隐式原型的用户对象，随意添加一些属性

// 1
// var obj = {
//     a: 1,
//     b: 2
// }
// obj.__proto__ = null  // 不推荐
// console.log(obj, obj.__proto__)

// 2 Object.create
// var obj = Object.create(null)  // Object.create传入隐式原型指向的东西，这里传null，故Obj隐式原型为null
// obj.a = 322
// obj.b = 333

// console.log(obj, obj.__proto__)

// 3 Object.create

// var obj = { a: 4, h: 6 }
// Object.setPrototypeOf(obj, null) // 显而易见，设置某个对象的隐式原型为，null

// console.log(obj, obj.__proto__)

// 面试1
// 下面的代码输出什么？
// function User() {}
// User.prototype.sayHello = function () {};

// var u1 = new User();
// var u2 = new User();

// console.log(u1.sayHello === u2.sayHello)
// console.log(User.prototype === Function.prototype);
// console.log(User.__proto__ === Function.prototype);
// console.log(User.__proto__ === Function.__proto__);
// console.log(u1.__proto__ === u2.__proto__);
// console.log(u1.__proto__ === User.__proto__);
// console.log(Function.__proto__ === Object.__proto__)
// console.log(Function.prototype.__proto__ === Object.prototype.__proto__)
// console.log(Function.prototype.__proto__ === Object.prototype);

// answer
// true
// false
// true
// true
// true
// false
// true
// false
// true

// 面试2
// 下面的代码输出什么？（字节）
// console.log({} instanceof Object)
// console.log({}.toString instanceof Function);
// console.log(Object instanceof Function);
// console.log(Function instanceof Object);

// answer
// true
// true
// true
// true

// // 面试3
// // 下面的代码输出什么？（京东）
// Function.prototype.a = 1;
// Object.prototype.b = 2;

// function A() {}

// var a = new A();

// console.log(a.a, a.b);
// console.log(A.a, A.b);

// answer
// undefined 2
// 1 2

console.log('继承================================================================================')

/*
继承
    单根性：子类最多只有一个父类
    传递性：间接父类的成员会传递到子类中
*/

/*
视频会员系统
    普通会员
        属性：用户名，密码
        方法：观看免费视频
    VIP会员
        属性：普通会员的所有属性，会员到期时间
        方法：普通会员的所有方法，观看付费视频

使用构造函数满足上述会员
*/

// 方法一
// function User(username, password) {
//     this.username = username
//     this.password = password
// }

// User.prototype.playFreeVideo = function () {
//     console.log('观看免费视频')
// }

// function VipUser(username, password, time) {
//     this.username = username
//     this.password = password
//     this.time = time
// }

// VipUser.prototype.playFreeVideo = function () {
//     console.log('观看免费视频')
// }
// VipUser.prototype.playVIPVideo = function () {
//     console.log('观看付费视频')
// }

// 方法2

// function VipUser(username, password, time) {
//     User.call(this, username, password)
//     this.time = time
// }

// // 设置隐式原型，原本VipUser原型的隐式原型指向Object原型，这里调整方向
// Object.setPrototypeOf(VipUser.prototype, User.prototype)

// VipUser.prototype.playVIPVideo = function () {
//     console.log('观看付费视频')
// }

// var vip1 = new VipUser('zs', 123, 3000)

// vip1.playFreeVideo()
// vip1.playVIPVideo()

// VipUser.prototype.playFreeVideo = function () {
//     console.log('去掉广告的免费视频');
// }
// vip1.playFreeVideo()


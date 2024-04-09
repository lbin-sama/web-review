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

function User(name, age) {
    this.name = name
    this.age = age
    // 上述this指向谁，无法说清，只有调用的时候才知道（即运行时
    console.log(this)
}

new User(1, 1) // new调用，指向User产生的对象 User
User() // 直接调用，指向全局对象，window

var obj = {
    a: 1,
    method: function () {
        console.log(this)
    },
    b: {
        a1: 2,
        method: function () {
            console.log(this)
        }
    }
}

obj.method() // 通过对象调用，指向前面的对象 obj
obj.b.method() // 通过对象调用，指向前面的对象 b
var test = obj.b.method
test() // 直接调用，指向全局对象，window

function m(a, b) {
    console.log(this, a, b)
}

var arr = [1, 2, 3]
m.call(arr, 1, 2) // m.call() 也是调用函数，相当于m()，但是可以更改this指向，这里this指向arr

m.apply(arr, [1, 2]) // m.apply()与m.call()相同，就是参数传递不一样，需要用数组包起来
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

/*

*/
/**
 *
 * @author lbin
 * @data: 2024-04-07 10:45
 */

console.log(
  "数据的存储和传递================================================================================"
);

/**
 * 值和引用
 *
 * var a = 1
 * 原始类型直接在程序里开辟一个名为a的内存空间，里面 保存着 1
 *      == 原始类型赋值什么就放什么
 *
 * var b = {
 *      n1: 1,
 *      n2: 2
 * }
 *
 * 引用类型分两步
 *      首先是{ n1: 1, n2: 2 }，在程序里开辟一个内存空间，里面存有 属性，值 两个东西，排列下去
 *      随后将这个对象赋值给b，把第一步开辟的内存空间的地址存入b的内存空间
 *          注：若对象的某个属性还是一个对象，则也是存放地址，指向该对象的内存空间
 *
 * var a = 1
 * var b = a
 *      在程序里开辟一个名为a的内存空间，值为 1，在程序里开辟一个名为b的内存空间，将a的值赋值粘贴进去
 * b++
 *      b内存空间的值增加，与a无关
 *
 * var a = { n: 1 }
 * var b = a
 *      在程序里开辟一个名为a的内存空间，存放{ n: 1 }的地址，在程序里开辟一个名为b的内存空间，将a里的地址复制进去
 * b.n++
 *      b内存空间中的地址指向的内存空间中的n增加，a所用的地址也相同，故此a.n也进行变化
 *
 * b = { n: 3 }
 *      重新赋值，创建新的内存空间{ n: 3}并把地址替换，不影响a的地址
 */

// 下面代码输出什么？=========================================================================
// var foo = {
//   n: 0,
//   k: {
//     n: 0,
//   },
// };

// var bar = foo.k;

// bar.n++ // foo.k.n++ 1
// bar = { // 重新赋值，引用地址变化
//   n: 10,
// };

// bar = foo // 重新赋值，引用地址变化，与foo相同
// bar.n++; // foo.n++ 1
// bar = foo.n // 重新赋值，原始类型 1
// bar++ // bar自身值变化 2
// console.log(foo.n, foo.k.n) // 1 1

// 下面的代码输出什么（京东）？
// var foo = {
//   n: 1,
// };

// var arr = [foo] // 赋值，数组对象，引用地址

// function method1(arr) {
//   var bar = arr[0] // 赋值，引用地址
//   arr.push(bar) // 引用地址，增加对象，外部也变化
//   bar.n++ // 引用地址，则arr[0]++， arr[arr.length - 1]++ 2
//   arr = [bar] // 重新赋值，bar还是指向外部foo
//   arr.push(bar) // arr 值变化，增加对象 两个相同的
//   arr[1].n++ // 引用地址，则arr[0]++， arr[1]++ 3
// }
// function method2(foo) {
//   foo.n++ // 引用地址 foo.n = 4
// }
// function method3(n) {
//   n++ // 原始类型，不影响外部
// }
// method1(arr) // 对象中重新赋值过，但其中引用地址相同，则arr[0].n = 4 arr[1].n = 4
// method2(foo) // 同里，引用地址相同 foo.n = 4
// method3(foo.n) // 原始类型，不变 foo.n = 4

// console.log(foo.n, arr.length) // 4 2

// // 下面的代码输出什么（字节）？
// var foo = { bar: 1 } // 引用地址
// var arr1 = [1, 2, foo] // 引用地址, arr2[2] 引用地址
// var arr2 = arr1.slice(1) // 截取后两位，赋值给arr2，引用地址 arr2[1] 引用地址
// arr2[0]++ // 原始类型，arr2[0] 3 arr1[1] 不变
// arr2[1].bar++ // 引用类型foo.bar 2
// foo.bar++ // 引用类型foo.bar 3
// arr1[2].bar++ // 引用类型foo.bar 4
// console.log(arr1[1] === arr2[0]) // 原始类型，arr1没变 false
// console.log(arr1[2] === arr2[1]) // 引用类型，地址没变，true
// console.log(foo.bar) // 4

console.log(
  "数据的作用域================================================================================"
);

/*
  js的两种作用域：全局作用域、函数作用域
  全局作用域：在函数外面定义的变量所在的作用域
  函数作用域：在函数里面定义的变量所在的作用域
    内部作用域能访问外部的，反之不行。访问时由内向外查找
    如果内部作用域访问了外部，则会产生闭包
    内部作用域能访问的外部，取决于函数定义的位置，和调用无关
    根据位置的定义决定作用域

  
  作用域内定义的变量、函数声明会提升到作用域顶部

  */

// var a = 1; //  => 外部定义a，全局作用域
// function b() {
//   var d = 2; // => 内部定义d，函数作用域 b

//   function f() {
//     var g = 3; // => 内部定义e，函数作用域 m
//     console.log(++a);
//   }
//   f();

//   console.log(a); // => 访问外部，产生闭包，只是一种现象，没什么影响
// }
// b();

// var c = function () {
//   // 外部定义c，全局作用域
//   var e = 3; // => 内部定义e，函数作用域
//   console.log("c");
// };

// c();

// =================================================================
// var a = 1

// function b() {
//   a++ // 向外查找，找到 a = 1这个变量
// }

// function c() {
//   var a = 3
//   // function b() {
//   //   a++ // 向外查找，找到 a = 3这个变量
//   // }
//   b() // 向外查找，找到最近的b函数
//   console.log(a);
// }

// c()
// console.log(a);

// ===================================================================
// 作用域内定义的变量、函数声明会提升到作用域顶部
// console.log(a, m, b);
// var a = 1;
// function m() {} // 这种写法叫函数声明
// var b = function () {}; // 这种写法叫函数表达式，将函数作为一个值保存至变量b

/*
 变量提升，=>
    var a
    var b
    function m() {}
    console.log(a)
    a = 1
    b = function () {}
*/

// 下面的代码输出什么
// 下面的代码输出什么

// console.log(a, b, c) // undefined undefined function
// var a = 1
// var b = function () {}
// function c() {}

/* 变量提升
  var a
  var b
  function c() {}
  console.log(a, b, c)
  a = 1
  b = function () {}
*/

// 下面的代码输出什么

// var a = 1,
//   b = 2;

// function m1() {
//   console.log(a); // 先查找内部a，但是a变量提升，undefined
//   var a = 3
//   function m2() { // 函数声明变量提升
//     console.log(a, b) // 先查找内部a，a变量提升，undefined，后续a赋值3，再调用该函数，故a 3，b外部2
//   }
//   m2()
// }

// m1()

/*
  变量提升
  function m1() {
    var a
    function m2() {
      console.log(a, b);
    }
    console.log(a);
    a = 3 // 赋值
    m2() // 调用
  }
*/

// 下面的代码输出什么？(百度)

// var a = 1;

// function m1() {
//   a++; // 由里到外查找a，++ 2
// }

// function m2() {
//   var a = 2;
//   m1()
//   console.log(a) // 由里到外查找a 2
// }

// m2();
// console.log(a); 2

console.log(
  "全局对象================================================================================"
);

/*
  无论是浏览器环境，还是node环境，都会提供一个全局对象
    浏览器环境：window
    node环境：global
  全局对象特点
    全局对象的属性可以被直接访问
    给未声明的变量赋值，实际就是给全局对象的变量赋值
      不建议，永远别这么干
    所有的全局变量、全局函数都会附加到全局对象
      这种情况称之为全局污染，全局暴露，或简称污染，暴露
      如果要避免污染，需要使用立即执行函数改变其作用域
      立即执行函数：Immediately Invoked Function Expression，检测IIFE
      IIFE通常用于强行改变作用域
*/

// var gloabal_a = 1 // 全局变量，会附加到全局对象

// function gloabal_m1() { // 全局函数，会附加到全局对象
//   console.log(2);
// }

// function gloabal_m2() { // 全局函数，会附加到全局对象
//   console.log(3);
// }

/*
  相当于
  window.a = 1
  window.m1 = fun...
  window.m2 = fun...
  在浏览器环境是window，在node环境是global
  由于变成了全局，可在另一个global文件访问到
*/

// var abc = (function() {
//   var a = 1
//   var b = 2

//   function c() {
//       console.log('c');
//   }
//   return {
//     a: a,
//     b: b,
//     c: c
//   } // 需要暴露的东西可以执行返回
// })()

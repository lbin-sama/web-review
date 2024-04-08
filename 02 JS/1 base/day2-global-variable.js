// console.log('另一文件访问全局变量，需要编写好引用顺序');
// console.log(gloabal_a); // 另一文件编写
// console.log(gloabal_m1); // 另一文件编写
// console.log(gloabal_m2); // 另一文件编写

/*
    如果要避免污染，需要使用立即执行函数改变其作用域
    立即执行函数检测IIFE，Immediately Invoked Function Expression
*/
// 避免污染, 匿名

// (function() { // 全部不暴露
//     console.log(abc);
// })()


// 下面的代码段是否有错误，错在哪里？

// 代码段1
// let a;
// const b;

/*
 const b 报错，常量需要初始化
*/

// 代码段2
// let a = 1;
// const b = 2;
// a++;
// b++;

/*
b++ 报错，常量不可更改
*/

// 代码段3
// console.log(a);
// let a = 1;

// console.log(a); 报错， let定义变量不会变量提升

// 代码段4
// let a = 1;
// let a = 2;

// 不可重复定义同名变量
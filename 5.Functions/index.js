// var age = 40

//How to define function

// function test() {
//   console.log('declare')
//   var a = 1
// }
// test()

// var x = function test() {
//   console.log('named')
//   var a = 10
// }
// x()

// var y = function () {
//   console.log('ananymous')
//   var a = 100
// }
// y()

// var z =  () => {
//   console.log('arrow')
//   var a = 1000
// }
// z()

//params vs arguments

// function test(a, b) {
//   console.log(a)
//   console.log(b)
// }

// test(10, 20)

//default parameter (ES-6)

// function test(a=10, b=20) {
//   console.log(a, b)
// }
// test()

//default vs raguments

// function test(a=undefined, b) {
//   console.log(a, b)
// }
// test(undefined, 'kohli')

//varying no of params vs arguments

// function test(a, b) {
//   console.log(arguments)
//   var sum = 0
// // console.log(arguments[0])
// // console.log(arguments[1])
// // console.log(arguments[2])
// // console.log(arguments[3])
// // console.log(arguments[4])
//   // for (var value of arguments) {
//   //    sum += value
//   // }
//   // console.log(sum)
//   console.log(typeof arguments, Array.isArray(arguments))
// }

// test(1, 2, 3, 4, 5)


//rest operator

// var test = (a, ...rest)=> {
//   console.log(rest)
//   var sum = 0

//   // console.log(rest[0])
//   // console.log(rest[1])
//   // console.log(rest[2])
//   // console.log(rest[3])
//   // console.log(rest[4])
//   for (var value of rest) {
//      sum += value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)

//scope

//global storage

// var a = 1

// let b = 2

// const c = 3

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   var d = 4
//   let e = 5
//   const f = 6

//  console.log(a)
//  console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)
//   if (true) {

//     var g = 7
//     let h = 8
//     const i = 9

//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//     console.log(g)
//     // console.log(h)
//     // console.log(i)
// }
// test()

//  console.log(d)
//  console.log(e)
//  console.log(f)
// console.log(g)
// console.log(h)
// console.log(i)

// {
//   let x = 10
//   console.log(x)
// }

// console.log(x)

// var x = 1

// console.log(x)

// function test() {
//   var x = 10
//   console.log(x)
// }
// test()

//hoisting
// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { name: 'kohli' }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// // console.log(h)
// // h()
// let h = function test() {
//   console.log('named fun exp')
// }
// h()
// console.log(h)
// console.log(i)
// var  i = function () {
//   console.log('ananymous fun exp')
// }
// console.log(i)
// console.log(j)
// var  j  = ()=>{
//   console.log('arrow fun exp')
// }
// console.log(j)

// console.log(declare)
// declare()
// function declare() {
//   console.log('function declartion')
// }
// console.log(declare)
// declare()

//var vs let vs const

//scope

//hoisting

//redeclaration

// var a = 10
// console.log(a)

// var a = 20
// console.log(a)
// var a = 10
// console.log(a)

// // let a = 20
// const a = 20
// console.log(a)

//reassignment

// var a = 10
// let a = 10
// const a = 10

// console.log(a)

// a = 20

// console.log(a)

//initialization

// var a
// let a
// const a = 10
// console.log(a)

// a = 10

// console.log(a)


// var x = 1

// console.log(x)

// function test() {
//   console.log(x)
//    x = 10
//   console.log(x)
// }
// console.log(x)
// test()

// {
//   var x = 10
//   console.log(x)
// }
// console.log(x)

//Closure

// function outer() {
//   var a = 100
//   var b = 200
//  return function inner() {
//     console.log(a)
//   }
// }

// var inner = outer()
// inner()

//IIFE

// (function () {
//   var a = 10
//   console.log(a)
// })()
// console.log(a)

// let a = 10

//function currying


//without curry

// function test(a,b,c) {
//   console.log(a + b + c)
  
// }

// test(1, 2, 3)

// //with currying

// function fun1(a) {
//   return function fun2(b) {
//     return function fun3(c) {
//       console.log(a+b+c)
//     }
//   }
// }

// var fun2 = fun1(1)
// var fun3 = fun2(2)
// fun3(3)


// function calDis(price, dis) {
//   var disAmount = price * dis
//   console.log(disAmount)
// }

// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)


// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmout = price * dis
//     console.log(disAmout)
//   }
// }

// var calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)


//FCF

// var x = () => {
//   return ()=>{}
// }
// x(()=>{})

// HOF

// function test(cb) {
//   console.log('HOF')
//   // cb()
//   return function () {
//     console.log('hello')
//   }
// }

// var hello = test()
// hello()
// // test(function cb() {
// //   console.log('CB')
// // })


//pure function

// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }
// pure(1, 2, 3)

// //impure function

// function impure(a,b,c) {
//   var d = Math.random()
//   console.log(a + b + c + d)
  
// }
// impure(1, 2, 3)


// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(6);
// console.log(result);

















    





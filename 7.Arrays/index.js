

// var arr = [1, 2, 3, 4, 5]


// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


//how to add new item to array
// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

// //ending
// arr.push(6)
// console.log(arr)

// //starting
// arr.unshift(0)
// console.log(arr)

//anywhere

// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(2, 0, 'hi')
// console.log(arr)

//How to remove array items

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
//ending
// arr.pop()

//starting
// arr.shift()

//anywhere

// arr.splice(0, 1)
// arr.splice(arr.length-1, 1)
// arr.splice(2, 1)

// console.log(arr)

//How to find array values

// var arr = [1, 2, 3, 4, 5, 2]
// console.log(arr)

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))


// var arr = [{ course: 'java' },{ course: 'css' }, { course: 'react' }, { course: 'java' }]


// console.log(arr)

// var res = arr.find((obj) => {
//   // return obj.course === 'java'
//   return obj.course === 'html'
// })

// console.log(res)

// var res = arr.findIndex((obj) => {
//   // return obj.course === 'java'
//   return obj.course === 'html'
// })

// console.log(res)

// var res = arr.findLastIndex((obj) => {
//   // return obj.course === 'java'
//   return obj.course === 'html'
// })

// console.log(res)

//How to merge two or more arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

//ES-5

// var combineArr = arr1.concat(arr2, arr3)

// ES-6

// var combineArr = [...arr1, ...arr2, ...arr3]

// console.log(combineArr)


//How to remove all items from array

// var arr1 = [1, 2, 3, 4, 5]

// var arr2 = arr1

// console.log(arr1)
// console.log(arr2)

// arr1.length = 0
// arr1.splice(0, arr1.length)
// arr1 = []

// console.log(arr1)
// console.log(arr2)

//copy

// var x = 10

// var y = x

// y = 20

// console.log(x)
// console.log(y)

// import lodash from 'lodash' //es-6 module
// let lodash  = require('lodash') //common js

// var originalArr = ['sachin', { road: 101 }, () => { console.log('play') }]

// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr))//deep copy
// var copiedArr = lodash.cloneDeep(originalArr) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy (ES-5)
// var copiedArr = originalArr.slice() //shallow copy (ES-5)
// var copiedArr = [...originalArr] //shallow copy (ES-6)


// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201
// console.log(originalArr)
// console.log(copiedArr)


//How to loop array

// var arr = [1, 2, 3, 4, 5]

//without loop

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//with using loop

//for of loop (ES-6)

// for (var value of arr) {
//   console.log(value)
// }

//for in loop

// for (var index in arr) {
//   console.log(index, arr[index])
// }

// forEach method

// var res = arr.forEach((value, index) => {
//   console.log(value, index)
//   // return value
// })



// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

//filter

// var filterRes= arr.filter((value) => {
//     return value > 2
// })

// console.log(filterRes)

// map


// var mapRes = arr.map((value) => {
//   console.log(value * 100)
// })

// // console.log(mapRes)

// var forEachRes = arr.forEach((value) => {
//   console.log(value * 100)
// })

// // console.log(forEachRes)

//reduce

// var arr = [1, 2, 3, 4, 5]

// var reduceRes= arr.reduce((cum, cur) => {
//   console.log(cum, cur)
// }, 0)
// console.log(reduceRes)


//How to remove duplicate values from arr

// var arr = [1, 2, 3, 4, 3, 5, 2]
// console.log(arr)

// var uniqueArr = [...new Set(arr)]
// var uniqueArr = []
// console.log(uniqueArr)

// var arr = [1, 2, 3, 4, 3, 5, 2]
// function removeDuplicates(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) === -1) {
//      uniqueArr.push(value)
//    }
//   }
// }
// removeDuplicates(arr)

// console.log(uniqueArr)

// var arr = [1, 2, [10, 20], [100, 200, [1000, 2000]]]
// console.log(arr)

// var flattenArr = arr.flat(Infinity)
// var flattenArr = []

// console.log(flattenArr)
// var arr = [1, 2, [10, 20], [100, 200, [1000, 2000]]]

// function flattenArrFun(arr) {
  
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//       flattenArrFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }
// flattenArrFun(arr)

// console.log(flattenArr)


//Sorting

//primitives (String)

// var arr = ['kohli', 'dhoni', 'rahul', 'gill']
// var arr = [2, 6, 1, 8, 3]
// var arr = [2, 16, 1, 8, 3]
// var arr = [{course: 'node'}, {course: 'html'}, {course: 'react'}, {course: 'css'}]

// console.log(arr)

// var ASO = arr.sort()
// console.log(ASO)

// console.log(arr)

// // var DSO = arr.reverse()
// // console.log(DSO)

//number(single)

// var ASO = arr.sort((a, b) => {
//   if (a > b) {
//     return -1
//   }
//   if (a < b) {
//     return 1
//   }
// })

// console.log(ASO)

// var DSO = ASO.reverse()
// console.log(DSO)

// var ASO = arr.sort((obj1, obj2) => {
//   if (obj1.course > obj2.course) {
//     return -1
//   }
//   if (obj1.course < obj2.course) {
//     return 1
//   }
// })

// console.log(ASO)


// for (var i = 0; i < arr.length; i++){
//   for (var j = i + 1; j < arr.length; j++){
//     if (arr[i].course > arr[j].course) {
//       var temp = arr[i].course
//       arr[i].course = arr[j].course
//       arr[j].course = temp
//     }
//   }
// }

// console.log(arr)
















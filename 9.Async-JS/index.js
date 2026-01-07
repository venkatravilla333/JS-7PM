

// console.log('one')

// setTimeout(() => {
//   console.log('timer-1')
// }, 1000)

// console.log('three')

// setTimeout(() => {
//   console.log('timer-2')
// })
// console.log('four')

// Promise.resolve().then(() => console.log('pr-1')).then(() => console.log('pr-2'))

// console.log('five')

//callback

// function fetchData(num, cb) {
//   setTimeout(() => {
//     // var data = 'data from db'
//     var data = num*num
//     cb(data)
//   }, 4000)
// }

// fetchData(2, function displayData(data1) {
//   console.log(data1)
//    fetchData(data1, function displayData(data2) {
//      console.log(data2)
//       fetchData(data2, function displayData(data3) {
//         console.log(data3)
//           fetchData(data3, function displayData(data4) {
//             console.log(data4)
//            })
//        })
//    })
// })


//promise (es-6)

// function fetchData(num) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//     // var data = 'data from db'
//     var data = num*num
//     res(data)
//   }, 4000)
// })
// }
// fetchData(2).then((data1)=> {
//   console.log(data1)
//   return fetchData(data1)
// }).then((data2)=> {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3)=> {
//   console.log(data3)
// })


//async await

// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'data from db'
//       var data = num * num
//       res(data)
//     }, 4000)
//   })
// }


// async function displayData() { 
// var data1 = await fetchData(2)
// console.log(data1)
// var data2 = await fetchData(data1)
// console.log(data2)
// var data3 = await fetchData(data2)
// console.log(data3)
// var data4 = await fetchData(data3)
// console.log(data4)
  
// }
// displayData()







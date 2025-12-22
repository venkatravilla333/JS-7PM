

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   city: 'Mumbai',
//   play: () => {
//     console.log('play')
//   }
// }
// var person2 = {
//   name: 'kohli',
//   age: 35,
//   city: 'Delhi',
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(person1)
// console.log(person2)

// //access

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// person1.play()

// //add

// person1.color = 'red'
// person1.go = () => {
//   console.log('go')
// }

// console.log(person1)

// //update

// person1.name = 'kohli'
// console.log(person1)

// //delete

// delete person1.age

// console.log(person1)


//constructor function way (ES-5)

// function Test(name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.play = function () {
//     console.log('play')
//   }
// }

// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('kohli', 35, 'Delhi')
// var person3 = new Test('dhoni', 38, 'Ranchi')
// console.log(person1)
// console.log(person2)
// console.log(person3)

//Classical Way (ES-6)

// class Test{
//   constructor(name, age, city) {
//     console.log(this)
//     this.name = name;
//     this.age = age;
//     this.city = city
//     this.play = function () {
//       console.log('play')
//     }
//    }
// }

// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('kohli', 35, 'delhi')
// console.log(typeof Test)
// console.log(person1)
// console.log(person2)

//Dynamic

// var person = {
//   name: 'sachin',
//   age: 40, 
//   city: 'mumbai',
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(person)
// //access
// console.log(person.name)
// console.log(person['age'])
// console.log(person.city)
// person.play()

// //add

// person.color = 'red'
// console.log(person)

// //update

// person.age = 60

// console.log(person)

// //delete

// delete person.age

// console.log(person)


// var person = {
//   name: 'sachin',
//   age: 40, 
//   city: 'mumbai',
//   play: () => {
//     console.log('play')
//   }
// }

//without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.play)


//with using loop

// for in loop

// for (var key in person) {
//   console.log(key, person[key])
// }

// var keys = Object.keys(person)
// console.log(keys)

// var values = Object.values(person)
// console.log(values)

// var entries = Object.entries(person)
// console.log(entries)


//copy

// primitives

// var x = 10

// console.log(x)

// var y = x
// console.log(y)
// y = 20

// console.log(x)
// console.log(y)

//reference (Object)

// import lodash from 'lodash'
// var lodash = require('lodash')

var originalObj = {
  name: 'sachin',
  address: { road: 101 },
  play: () => {
    console.log('play')
  }
}

// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj))  //deep copy
// var copiedObj = lodash.cloneDeep(originalObj)  //deep copy
// var copiedObj = Object.assign({}, originalObj) //shallow copy (ES-5)
// var copiedObj = {...originalObj} //shallow copy (ES-6)

// console.log(originalObj)
// console.log(copiedObj)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(originalObj)
// console.log(copiedObj)











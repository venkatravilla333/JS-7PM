

// //without

// var person = {
//   name: 'sachin',
//   age: 40,
//   address: {city: 'mumbai', road: 101}
// }

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)

// //with

// var { name, age, address: {city, road} } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)



var data = ['sachin', 40, { road: 101, city: 'mumbai' }, { bats: 100, cars: 5 }]

// without

console.log(data)

console.log(data[0])
console.log(data[1])
console.log(data[2].road)
console.log(data[2].city)
console.log(data[3].bats)
console.log(data[3].cars)

//with

var [name, age, {road, city}, {bats, cars}] = data

console.log(name)
console.log(age)
console.log(road)
console.log(city)
console.log(bats)
console.log(cars)






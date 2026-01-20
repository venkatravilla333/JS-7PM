

//without

var person = {
  name: 'sachin',
  age: 40,
  address: {city: 'mumbai', road: 101}
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.address.city)
console.log(person.address.road)

//with

var { name, age, address: {city, road} } = person

console.log(name)
console.log(age)
console.log(city)
console.log(road)




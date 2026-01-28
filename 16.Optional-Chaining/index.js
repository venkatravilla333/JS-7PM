var person = {
  name: 'sachin',
  address: {city: 'mumbai', raod: 101}
}

console.log(person)
// console.log(person.address1.city)

// old

// console.log(person && person.address1 && person.address1.city) //old
console.log(person.address1?.city) //new 
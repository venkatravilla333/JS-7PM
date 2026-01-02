//How to examine dom

// console.log(document)
// console.dir(document)

//How to read dom properties

// console.dir(document.title)
// console.dir(document.all)
// console.dir(document.URL)
// console.dir(document.forms)
// console.dir(document.links)

//How to access dom nodes in js file

//ID

// var paraOne = document.getElementById('one')
// console.log(paraOne)

// // paraOne.style.background = 'red'
// paraOne.textContent = 'Updated'

//class

// var paras = document.getElementsByClassName('para')

// console.log(paras)

// console.log(paras[0])

// paras[0].style.background = 'red'
// paras[1].style.background = 'green'

// for (var element of paras) {
//   console.log(element)
//   element.style.background = 'red'
// }

//Tag name

// var tags = document.getElementsByTagName('p')

// console.log(tags)

// tags[0].textContent = 'Hello'
// tags[1].textContent = 'Hello'

//querySelector

// var one = document.querySelector('#one')
// var one = document.querySelector('.para')
// var one = document.querySelector('p')
// console.log(one)

//querySelectorAll

// var one = document.querySelectorAll('#one')
// var one = document.querySelectorAll('.para')
// var one = document.querySelectorAll('p')
// console.log(one)


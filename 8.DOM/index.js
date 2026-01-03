// //How to examine dom

// // console.log(document)
// // console.dir(document)

// //How to read dom properties

// // console.dir(document.title)
// // console.dir(document.all)
// // console.dir(document.URL)
// // console.dir(document.forms)
// // console.dir(document.links)

// //How to access dom nodes in js file

// //ID

// // var paraOne = document.getElementById('one')
// // console.log(paraOne)

// // // paraOne.style.background = 'red'
// // paraOne.textContent = 'Updated'

// //class

// // var paras = document.getElementsByClassName('para')

// // console.log(paras)

// // console.log(paras[0])

// // paras[0].style.background = 'red'
// // paras[1].style.background = 'green'

// // for (var element of paras) {
// //   console.log(element)
// //   element.style.background = 'red'
// // }

// //Tag name

// // var tags = document.getElementsByTagName('p')

// // console.log(tags)

// // tags[0].textContent = 'Hello'
// // tags[1].textContent = 'Hello'

// //querySelector

// // var one = document.querySelector('#one')
// // var one = document.querySelector('.para')
// // var one = document.querySelector('p')
// // console.log(one)

// //querySelectorAll

// // var one = document.querySelectorAll('#one')
// // var one = document.querySelectorAll('.para')
// // var one = document.querySelectorAll('p')
// // console.log(one)

// //Traversing of DOM



// var current = document.getElementById('current')
// console.log(current)

// current.style.background = 'blue'

// //parent

// var parent = current.parentElement

// console.log(parent)
// parent.style.background = 'red'

// //sibs

// var preSib = current.previousElementSibling

// console.log(preSib)
// preSib.style.background = 'yellow'

// var nextSib = current.nextElementSibling

// console.log(nextSib)
// nextSib.style.background = 'yellow'

// //childs

// var firstChild = current.firstElementChild

// console.log(firstChild)

// firstChild.style.background = 'green'

// var lastChild = current.lastElementChild

// console.log(lastChild)

// lastChild.style.background = 'green'

// var childs = current.children

// console.log(childs)


// childs[0].style.background = 'orange'
// childs[1].style.background = 'orange'
// childs[2].style.background = 'orange'

//How to attach events to dom elements


//How to create element

// var para = document.createElement('p')

// console.log(para)

// para.innerText = 'data from db'


var body = document.getElementById('body')

// console.log(body)


// var btn = document.getElementById('btn')
// body.insertBefore(para, btn)

// var btn = document.getElementById('btn')
// console.log(btn)

var addBtn = document.getElementById('add')

var data = 'hello sachin'

var h2 = document.createElement('h2')

h2.textContent = data

function addFun() {
  body.appendChild(h2)
}

addBtn.addEventListener('click', addFun)


//how to replace child


var h5 = document.createElement('h5')

// console.log(h5)

h5.innerText = 'Hello kohli'

var replaceBtn = document.getElementById('replace')

function replaceFun() {
  body.replaceChild(h5, h2)
}

replaceBtn.addEventListener('click', replaceFun)


//How to remove child

var removeBtn = document.getElementById('remove')

function removeFun() {
  body.removeChild(h2)
  // h2.remove()
}
removeBtn.addEventListener('click', removeFun)











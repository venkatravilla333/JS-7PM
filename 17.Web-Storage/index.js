
console.log(window)
console.log(localStorage)
console.log(sessionStorage)

var storeBtn = document.getElementById('store')

function storeFun() {
  localStorage.setItem('name', 'sachin')
  localStorage.setItem('age', 40)
  sessionStorage.setItem('name', 'sachin')
  sessionStorage.setItem('age', 40)
}

storeBtn.addEventListener('click', storeFun)

//get data

var getBtn = document.getElementById('get')
var parent = document.getElementById('parent')

function getFun() {
  var name = localStorage.getItem('name')
  console.log(name)
  var h3 = document.createElement('h3')
  h3.textContent = name
  parent.appendChild(h3)
}

getBtn.addEventListener('click', getFun)

//remove

var removeBtn = document.getElementById('remove')

function removeFun() {
  // localStorage.removeItem('name')
  localStorage.clear()
}

removeBtn.addEventListener('click', removeFun)
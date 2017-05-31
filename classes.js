// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start() {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one()
  two()
  three()
  makeVisible()


  // Your turn! Create a new function called `two`, then call it from here.
}

function one() {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

// CREATE FUNCTION two HERE

function two() {
  // First, we have to find the element:
  var two = document.getElementById('two')

  // Next, we apply a new CSS class to it:
  two.classList.add('green')
}



// CREATE FUNCTION three HERE

function three() {
  // First, we have to find the element:
  var three = document.getElementById('three')

  // Next, we apply a new CSS class to it:
  three.classList.add('red')
}


// CREATE FUNCTION makeVisible HERE

var classVisible = document.getElementsByClassName("invisible");

function makeVisible() {
  for (var i = 0; i < classVisible.length; i++) {
    classVisible[i].className = "visible";
    classVisible[i--].className = "visible";

  }
}

// make rainbow squares appear on the screen -- add a new square in a random color every second

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

let count = 0;

function main(){
  // get the root element by id
  // using a querySelector to show a different syntax -- you could also use getElementById
  const root = document.querySelector('#root')
  // create a new square element
  const square = document.createElement('div')
  // add styling to the new square element
    // all squares should have the 'square' class
    // if we only want to assign ONE class name:
    // square.className = 'square'
    // classList.add will let us add multiple classes to the same HTML element
    square.classList.add('square')
    // each square should have a random background color
    // RANDOMIZE the colors using these two lines of code
    const randomNum = Math.floor(Math.random() * 6)
    square.style.backgroundColor = rainbow[randomNum]
    // use sequential colors using these three lines of code instead of the two lines above
    // const colorIndex = count%6
    // square.style.backgroundColor = rainbow[colorIndex]
    // count++
  // add the new square to the root element
  root.append(square)
}

// call the main function repeatedly using a timer
// setInterval will run the `main` function (first argument) every 1000 milliseconds (second argument)
setInterval(main, 100)

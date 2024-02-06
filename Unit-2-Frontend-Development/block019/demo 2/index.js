// display a list of cats and their description based on an array of cat data

const cats = [
  {name: "Toby", adjective: "sleepy"},
  {name: "Theo", adjective: "rowdy"},
  {name: "Kara", adjective: "sassy"},
  {name: "Fluffy", adjective: "friendly"},
  {name: "Max", adjective: "playful"},
]

function render(){
  // select the root div
  const root = document.getElementById("root")
  // make an h1 heading "Cat List"
  const heading = document.createElement("h1")
  heading.textContent = 'Cat List'
  // make an unordered list to display cats
  const catList = document.createElement("ul")
  // add a list item representing each cat
  cats.forEach(cat => {
    // create a new list item to represent the cat
    const catElement = document.createElement('li')
    // set the text of that list item to `${cat} is ${adjective}`
    catElement.textContent = `${cat.name} is ${cat.adjective}`
    // add the list item to the catList
    catList.append(catElement)
  })
  // append the title and list to the root div
  root.append(heading, catList)
}

render()

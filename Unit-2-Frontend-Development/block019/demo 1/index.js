// prompt the user for their name
// create an h1 tag that says "Hello, [user's name]!"

function main(username){
  // select a div called "#root"
  const root = document.getElementById("root")
  // create a new h1 tag
  const h1 = document.createElement("h1")
  // give the h1 tag the text "Hello, [user's name]!"
  h1.textContent = `Welcome, ${username}`
  // could also say:
  // h1.innerHTML = `Welcome, ${username}`
  // add the new h1 tag to the div we selected.
  root.append(h1)
}

// get the user's name
const visitorName = prompt("What is your name?")
// call our main function with the user's name
main(visitorName)

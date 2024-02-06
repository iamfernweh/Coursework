// an array of freelancers to start with
const freelancers = [
    {name: 'Alice', price: 30, occupation: 'writer'},
    {name: 'Bob', price: 50, occupation: 'teacher'},
    {name: 'Carol', price: 70, occupation: 'programmer'}
  ]
  // arrays of names and occupations to generate new random freelancers
  const nameOptions = ['David', 'Erin', 'Fred', 'Greg', 'Harriet', 'Ingrid']
  const occupationOptions = ['writer', 'teacher', 'programmer', 'editor', 'marketer', 'producer']
  
  
  // function to render all the freelancers
  function renderFreelancers(){
    // select the freelancers list by id
    const freelancersList = document.getElementById("freelancersList")
    // create the new list to be displayed in the browser
    const unorderedList = document.createElement('ul')
    freelancers.forEach(freelancer => {
      const listItem = document.createElement('li')
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`
      unorderedList.append(listItem)
    })
    // replace the existing contents of the freelancers list with our new list
    freelancersList.replaceChildren(unorderedList)
  }
  
  
  // function to calculate and render the average
  // renderAverage should:
  function renderAverage(){
    // select the averagePrice div
    const averageDiv = document.getElementById("averagePrice")
  // calculate the average
    const average = freelancers.reduce((total, current) => total+current.price, 0)/freelancers.length
  // update the averagePrice div to display the new calculated average
    averageDiv.textContent = `$${average.toFixed(2)}`
  }
  
  
  // function to add a new freelancer to the list (should also call the renderFreelancers and renderAverage functions)
  // addNewFreelancer should:
  function addNewFreelancer(){
  // select a name and occupation at random from the lists at the top
    const randomNameIndex = Math.floor(Math.random()*nameOptions.length)
    const randomOccupationIndex = Math.floor(Math.random()*occupationOptions.length)
  // generate a random hourly rate (between 30 and 100)
    const randomPrice = Math.floor(Math.random()*70)+30
  // add the new random freelancer to the array
    freelancers.push({
      name: nameOptions[randomNameIndex],
      occupation: occupationOptions[randomOccupationIndex],
      price: randomPrice
    })
  // call the renderFreelancers and renderAverage functions
    renderFreelancers()
    renderAverage()
  }
  
  // call renderFreelancers - initial render
  renderFreelancers()
  renderAverage()
  // generate new random freelancers at a pre-set interval
  setInterval(addNewFreelancer, 3000)
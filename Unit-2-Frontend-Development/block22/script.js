const API_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2401-GHP-ET-WEB-FT-SF'

// create initial state
const state = {
  events: [],
  selectedEvent: null
}

// select the DOM element(s) we want to update
const eventList = document.querySelector('#event-list');
const eventDetails = document.querySelector('#event-details');
const selectedEvent = document.querySelector('#selected-event')

async function getEvents() {
  // need to fetch the events
  // need to use try/catch and async/await
  try{
    const response = await fetch(API_URL + "/events")
    const json = await response.json()
    console.log(json.data)
    state.events = json.data
  } catch (error) {
    console.error(error)
  }
}

// renderEvent takes one event and turns it into a DOM element (which it returns)
function renderEvent(event){
  const eventSection = document.createElement('section')
  eventSection.innerHTML = `
  <h2><a href='#${event.id}'>${event.name}</a></h2>
  <p>${event.date}</p>
  <p>${event.location}</p>
  <p>${event.description}</p>
  `
  return eventSection
}

function renderEventDetails(){
    //what should we render if no event is selected
    if(state.selectedEvent === null){
        selectedEvent.hidden = true;
    } 
        //what should happen if specific event selected
    else{
        selectedEvent.hidden = false;
        eventDetails.innerHTML = `
        <h2>${state.selectedEvent.name}</h2>
        <p>${state.selectedEvent.location}</p>
        <p>${state.selectedEvent.date}</p>
        <p>${state.selectedEvent.description}</p>
        `
    }

}

function renderEvents(){
  // look at the events in state
  // turn them into dom elements
  const events = state.events.map(renderEvent)
  // add them to the DOM
  eventList.replaceChildren(...events)
}


function getEventFromHash(){
    // const hash = window.location.hash
    // console.log('hash', hash);
    // console.log('window location', window.location);
    const idFromHash = window.location.hash.slice(1)
    const selectedEvent = state.selectedEvent = state.events.find(event => event.id === +idFromHash);
    state.selectedEvent = selectedEvent;
    console.log(selectedEvent);
}

window.addEventListener('hashchange', getEventFromHash)

// set up our render function
async function render() {
  await getEvents()
  renderEvents()
  renderEventDetails()
}

render()
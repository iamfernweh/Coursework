// create an array to hold data (songs)
const songs = []

// get our existing form container by id
const formContainer = document.getElementById('addSongForm')

// render function to display elements on the page
function render() {
    //create a form (parent)
    const form = document.createElement('form')

    //add inputs, labels, and submit button (children)
    const songLabel = document.createElement('label')
    songLabel.for = 'song-input'
    // the value of the 'for' attribute must be a single id for the corresponding form element
    songLabel.textContent = 'Song name: '
    const songInput = document.createElement('input')
    songInput.id = 'song-input'

    // new form item
    const artistLabel = document.createElement('label')
    artistLabel.for = 'artist-input'
    artistLabel.textContent = 'Artist name: '
    const artistInput = document.createElement('input')
    artistLabel.id = 'artist-input'
    // new form item
    const releaseYearLabel = document.createElement('label')
    releaseYearLabel.for = 'release-year-input';
    releaseYearLabel.textContent = 'Release year: ';
    const releaseYearInput = document.createElement('input')
    releaseYearInput.id = 'release-year-input'
    releaseYearInput.placeholder = '2004'
    // submit button
    const submitButton = document.createElement('button')
    submitButton.textContent = 'Submit'

    //add into the form (appendChild())
    // parent.appendChild(child)
    form.append(songLabel, songInput, artistLabel, artistInput, releaseYearLabel, releaseYearInput, submitButton);
    // form.appendChild(songInput);
    // form.append(artistLabel);
    // form.append(artistInput);

    //add form into form container
    formContainer.append(form)
}

// call render()
render();
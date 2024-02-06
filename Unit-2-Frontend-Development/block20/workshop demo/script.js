// create an array to hold data (songs)
const songs = [
    {
        name: 'Wannabe',
        artist: 'Spice Girls',
        year: 1996
    }
]

// get our existing form container by id
const formContainer = document.getElementById('addSongForm')
const allSongs = document.getElementById('allSongsTextArea')

// render function to display elements on the page
function render() {
    //display the details of each song object from array into 'allSongs' text area
    //map over each element in the song array and turn into a string
    const songStrings = songs.map((song) => `${song.name} by ${song.artist} from ${song.year}` );
    //set the value of 'allSongs'
    

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

    //event listener
    form.addEventListener('submit', (submitEvent) => {
        submitEvent.preventDefault()
        //get values from text inputs
        const songName = songInput.value
        const artistName = artistInput.value
        const releaseYear = releaseYearInput.value
        console.log(songName, artistName, releaseYear);
        //build song object
        const songObj = {
            name: songName,
            artist: artistName,
            year: releaseYear,
        }
        //put object in 'songs' array
        songs.push(songObj);
        console.table(songs);
    })


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
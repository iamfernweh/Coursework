import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId === null
      ? <ContactList setSelectedContactId={setSelectedContactId} />
      : <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
    }

    </>
  )
}

export default App
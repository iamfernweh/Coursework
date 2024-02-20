import { useState } from 'react';
import './App.css'
import ControlledForm from './components/ControlledForm'
import Form from './components/Form'
import SignUp from './components/Signup'
import Auth from './components/Auth';

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      {/* Controlled vs Uncontrolled Form Demo */}
      {/* <Form/> */}
      {/* <ControlledForm/> */}


      {/* JWT Demo */}
      <SignUp saveToken={setToken}/>
      <Auth token={token} />
    </>
  )
}

export default App
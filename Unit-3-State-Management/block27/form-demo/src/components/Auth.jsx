import { useState } from "react";

function Auth({token}) {
  const [success, setSuccess] = useState(false)
  console.log(token)

  async function attemptAuth() {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const result = await response.json()
      setSuccess(result.success)
      console.log(result)
    } catch (err){
      console.error(err)
    }
  }

  return (
    <>
    {/* button to authenticate a request with the token */}
    <button onClick={attemptAuth}>Authenticate!</button>
    {/* message: successful or not? */}
    {success ? <div>Successfully Authenticated!</div> : <div>Unsuccessful</div>}
    </>
  )
}

export default Auth;
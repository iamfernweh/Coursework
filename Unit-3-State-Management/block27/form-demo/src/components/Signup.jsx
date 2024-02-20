import { useState } from "react"

function SignUp({saveToken}) {
  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/signup',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: "password"
          })
        }
      )
      const result = await response.json();
      saveToken(result.token)
      console.log(result)
      // submit POST to
      // https://fsa-jwt-practice.herokuapp.com/signup
    } catch(err){
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br/><br/>
      <button>Get Token</button>
    </form>
  )
}

export default SignUp
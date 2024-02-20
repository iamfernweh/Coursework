import { useState } from "react";

function Auth({token}) {
    const [success, setSuccess] = useState(false);
    setSuccess(result.success)
 async function attemptAuth(){
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            const result = await response.json()
        } catch (err) {
            console.error(err);
    }


    return(
        <>
            <button onClick={attemptAuth}>Authenticate</button>
            {success ? <div>Successfully Auth</div>
            : <div>Unsuccessful</div>}
        </>
    )
}

export default Auth
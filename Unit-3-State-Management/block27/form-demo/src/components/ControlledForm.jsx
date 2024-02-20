import { useState } from "react";

function ControlledForm(){
    const [username, setUsername] = useState('')
    
    console.log(username);

    return(
        <form>
            <h3>Controlled Form</h3>
            <label>
                Username: 
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            {username.length >= 10 
            ? <p>Username must be less than 10 characters</p>
            : null}
        </form>
    )
}

export default ControlledForm
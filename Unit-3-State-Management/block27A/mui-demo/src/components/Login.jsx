import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            alert('You have logged in');
        }
        else {
            alert('You shall not enter');
        }
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <TextField id='username' label='Username' variant="outlined" required value={username} onChange={(e) => { setUsername(e.target.value); }} /><br></br><br></br>
                <TextField id='password' label='Password' variant="outlined" type="password" required value={password} onChange={(e) => { setPassword(e.target.value); }} /><br></br><br></br>
                <Button variant="outlined" type='submit' >Login</Button>
            </form>
        </>
    );
}
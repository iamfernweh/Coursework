import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h2>Login</h2>
            <form>
                <TextField id='username' label='Username' variant="outlined" required value={username} onChange={(e) => { setUsername(e.target.value); }} /><br></br><br></br>
                <TextField id='password' label='Password' variant="outlined" type="password" required value={password} onChange={(e) => { setPassword(e.target.value); }} /><br></br><br></br>
                <Button variant="outlined">Login</Button>
            </form>
        </>
    );
}
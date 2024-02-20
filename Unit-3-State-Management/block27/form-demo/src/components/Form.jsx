function Form() {
    
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Uncontrolled Form</h3>
            <label>
                Username:
                <input name='username' defaultValue='username'/>
            </label>
            <br /><br />
            <label>
                New User?
                <input type='checkbox' name='newUser' defaultValue={true}/>
            </label>
            <br /><br />
            <button type='submit'>Submit Form</button>
        </form>
    )
}



export default Form
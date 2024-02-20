function Form() {
    
    function handleSubmit(e){
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
        //then we could use that formJson to submit to an API using fetch
        //fetch('/some-api', {method: 'post', body: formJson})
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
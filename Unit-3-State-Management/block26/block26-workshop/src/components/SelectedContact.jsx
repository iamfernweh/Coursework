export default function SelectedContact ({selectedContactId}) {
    
    {

    }
    
    
    return (
        <>
        {selectedContactId === null 
            ? <div>No contact selected</div> 
            : <div>{selectedContactId}</div>}
        </>
    )
}
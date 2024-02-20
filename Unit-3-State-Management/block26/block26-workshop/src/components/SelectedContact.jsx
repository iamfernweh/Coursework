import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId }) {
    const [singleContact, setSingleContact] = useState(null);


    useEffect(() => {
        async function fetchContact() {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
                const result = await response.json();
                console.log(result);
            
        } catch (error) {
            console.log(error);
        }}
        fetchContact();
    }, [selectedContactId]);


    return (
        <>
            {selectedContactId === null
                ? <div>No contact selected</div>
                : <div>{selectedContactId}</div>}
        </>
    );
}
import { useParams } from "react-router-dom";

function UserDetails() {
    const { userId } = useParams();


    return (
        <>
            The current userID is: {userId}
        </>
    );
}

export default UserDetails;
import { useNavigate } from "react-router-dom";

//dummy data -- pretend this is coming from a server
const users = [
    { id: 1, name: 'Juan Pablo' },
    { id: 2, name: 'Vanessa' },
];

function AllUsers() {
    const navigate = useNavigate();
    const clickHandler = (user) => {
        console.log(user);
        navigate(`/users/${user.id}`);
    };


    return (
        <>
            {users.map(user => (
                <div key={user.id} onClick={() => clickHandler(user)}>{user.name}</div>
            ))}
        </>
    );
}

export default AllUsers;
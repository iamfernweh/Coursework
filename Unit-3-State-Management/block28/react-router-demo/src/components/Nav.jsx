import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/users'> All Users</Link>
            <Link to='/posts'> Posts</Link>
        </>
    );
}

export default Nav;
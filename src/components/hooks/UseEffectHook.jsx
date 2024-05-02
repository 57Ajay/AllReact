import { useEffect, useState } from "react";
import Box from "../Box/Box";
// import "./UseEffectHook.css";

const UseEffectHook = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <Box className="container">
            {users.map((user) => (
                <div key={user.id} className="user-box">
                    <ul>
                        <li><p>Name:</p> {user.name}</li>
                        <li><p>Username:</p> {user.username}</li>
                        <li><p>Email:</p> {user.email}</li>
                        <li><p>Contact:</p> {user.phone}</li>
                        <li><p>Website:</p> {user.website}</li>
                    </ul>
                </div>
            ))}
        </Box>
    );
};

export default UseEffectHook;

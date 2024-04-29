import { Fragment, useState } from "react";
import UserDetails from "./UserDetails";

const UserDetailsRenderer = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            UserName: "Ajay",
            email: "XWwJG@example.com",
        },
        {
            id: 2,
            UserName: "Vijay",
            email: "XWwJkG@example.com",
        },
        {
            id: 3,
            UserName: "Sujay",
            email: "XWwJoG@example.com",
        },
    ]);

    const updateUser = (userId, updatedData) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, ...updatedData } : user
            )
        );
    };

    return (
        <Fragment>
            {users.map((user) => (
                <UserDetails user={user} key={user.id} updateUser={updateUser} />
            ))}
        </Fragment>
    );
};

export default UserDetailsRenderer;

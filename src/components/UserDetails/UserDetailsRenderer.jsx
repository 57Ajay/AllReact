import { Fragment, useState } from "react";
import UserDetails from "./UserDetails";

const UserDetailsRenderer = () => {
    const [users, setUsers] = useState([
        {
            id: new Date().getTime()*Math.random(),
            UserName: "Ajay",
            email: "XWwJG@example.com",
        },
        {
            id: new Date().getTime()+Math.random(),
            UserName: "Vijay",
            email: "XWwJkG@example.com",
        },
        {
            id: new Date().getTime()/Math.random(),
            UserName: "Sujay",
            email: "XWwJoG@example.com",
        },
    ]);
    const [newUserName, setNewUserName] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
  

    const updateUser = (userId, updatedData) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, ...updatedData } : user
            )
        );
    };

    const deleteUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };
    const mailHandler = (e) => {
        setNewUserEmail(e.target.value);
    };
    const nameHandler = (e) => {
        setNewUserName(e.target.value);
    }
    const addUser = () => {
        if (newUserName.trim() === "" || newUserEmail.trim() === "") {
            alert("Please enter both username and email.");
            return;
        }
        const newId = new Date().getTime();
        const newUser = {
            id: newId,
            UserName: newUserName,
            email: newUserEmail,
        };
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setNewUserName("");
        setNewUserEmail("");
    };


    return (
        <Fragment>
            <h1>User Details</h1>
            <div className="user-details-main">
                {users.map((user) => (
                    <UserDetails user={user} key={user.id} updateUser={updateUser} deleteUser={deleteUser} />
                ))}
            </div>
            <div>
                UserName: 
                <input
                    type="text"
                    placeholder="Enter UserName"
                    value={newUserName}
                    onChange={nameHandler}
                    maxLength={11}
                /><br />
                Email: 
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={newUserEmail}
                    onChange={mailHandler}
                    maxLength={13}
                /><br />
                <button onClick={addUser}>Add User</button>
            </div>
        </Fragment>
    );
};

export default UserDetailsRenderer;

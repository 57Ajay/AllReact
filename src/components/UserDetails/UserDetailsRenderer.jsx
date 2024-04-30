import { Fragment, useState } from "react";
import UserDetails from "./UserDetails";
import z from 'zod';

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
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // making it stateful and escaping redundancy.
    const [nameMail, setNameMail] = useState({
        name: "",
        email: "",
    });

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
        setNameMail({ ...nameMail, email: e.target.value });
    };
    const nameHandler = (e) => {
        setNameMail({ ...nameMail, name: e.target.value });
    }
    const addUser = () => {
        const userSchema = z.object({
            name: z.string().min(1),
            email: z.string().email(),
        });
        try {
            userSchema.parse(nameMail);
            const newId = new Date().getTime();
            const newUser = {
                id: newId,
                UserName: nameMail.name,
                email: nameMail.email,
            };
            setUsers((prevUsers) => [...prevUsers, newUser]);
            setNameMail({
                name: "",
                email: "",
            });
        } catch (error) {
            alert(error.errors[0].message);
        }
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
                    value={nameMail.name}
                    onChange={nameHandler}
                    maxLength={11}
                /><br />
                Email: 
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={nameMail.email}
                    onChange={mailHandler}
                    maxLength={21}
                /><br />
                <button onClick={addUser}>Add User</button>
            </div>
        </Fragment>
    );
};

export default UserDetailsRenderer;

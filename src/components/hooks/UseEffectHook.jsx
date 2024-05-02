import { Fragment, useEffect, useState } from "react";


const  UseEffectHook =()=> {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((data)=> setUsers(data))
    }, []);
  return (
    <Fragment>
        <ul>
            {users.map((user)=>(
                <p key={user.id}>
                    <li>{user.name}</li>
                </p>
            ))}
        </ul>
    </Fragment>
  );
};

export default UseEffectHook;
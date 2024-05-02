import { Fragment, useEffect, useState } from "react";

const HookuseEffect = () => {
    const [count, setCount] = useState(0);
    const [sync, setSync] = useState(false);
    useEffect(()=>{
        document.title = "AllReact | useEffect";
    },[sync]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response)=> response.json()   
        .then((data)=> data.map((user)=> console.log(user.name)))
        .catch((error)=> console.log(error)));
    }, []);
    return (
    <Fragment>
        <button onClick={() => setSync((i)=> !i)}>Sync to Title</button>
        <button onClick={() => setCount((c)=> c+1)}>Update Count</button>
        <h3>Count is {count}.</h3>
        <h1>
            {sync ? document.title = <h3>AllReact {count}</h3> : "AllReact"}
        </h1>
        
    </Fragment>
    );
};

export default HookuseEffect;
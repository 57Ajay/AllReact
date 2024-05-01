import { Fragment, useEffect, useState } from "react";

const HookuseEffect = () => {
    const [count, setCount] = useState(0);
    const [sync, setSync] = useState(false);
    useEffect(()=>{
        document.title = "AllReact"+ " " +count;
    },[sync, count])
    return (
        <Fragment>
        
    <button onClick={() => setSync((i)=> !i)}>Sync to Title</button>
    <button onClick={() => setCount((c)=> c+1)}>Update Count</button>

    <h3>Count is {count}.</h3>
    </Fragment>
    );
};

export default HookuseEffect;
import { Fragment, useEffect, useState } from "react";

const HookuseEffect = () => {
    const [count, setCount] = useState(0);
    return (
        <Fragment>
        {useEffect(()=>{
        document.title = "AllReact"+ " " +count;
    },[count])}
    <button onClick={() => setCount(count + 1)}>Call useEffect</button>
    <h3>useEffect Called {count} times.</h3>
    </Fragment>
    );
};

export default HookuseEffect;
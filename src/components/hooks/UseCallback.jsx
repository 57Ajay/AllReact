import { Fragment, useCallback, useState } from "react";

const UseCallback=()=> {
    const [count, setCount]= useState(0);
    const handler = useCallback(()=>{
        setCount(()=>count+1)
    }, [count]);
  return (
    <Fragment>
        <button onClick={handler}>Increase{count}</button>
    </Fragment>
  )
}

export default UseCallback;

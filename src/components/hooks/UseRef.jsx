import { Fragment, useEffect, useRef } from "react";

function UseRef() {
    const divRef = useRef();
    useEffect(()=>{
        setTimeout(()=>{
            divRef.current.innerHTML = "10"
        }, 5000)
    }, []);
    const incomeTax = 30000;
  return (
    <Fragment>
        hi, your income tax returns are <span ref={divRef}>{incomeTax}</span>
    </Fragment>
  );
}

export default UseRef;

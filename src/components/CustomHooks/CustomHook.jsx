import { Fragment, useEffect } from "react";


const CustomHook = ()=> {
    useEffect(()=>{
        const resizeEventListener = ()=>{
            console.log("Window Resized");
        };
        window.addEventListener("resize", resizeEventListener);
        return ()=>{
            // unmount
            window.removeEventListener("resize", resizeEventListener);
        }
    }, []);
  return (
    <Fragment>
        
    </Fragment>
  )
}

export default CustomHook;
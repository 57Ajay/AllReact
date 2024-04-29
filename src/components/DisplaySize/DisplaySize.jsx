import { Fragment, useState, useEffect } from "react";
import './DisplaySize.css'
const DisplaySize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array ensures that the effect runs only once after the initial render

    return (
        <Fragment>
            {windowSize.width} x {windowSize.height}
        </Fragment>
    );
};

export default DisplaySize;

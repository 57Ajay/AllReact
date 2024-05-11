import { Fragment, useState, useMemo } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    const sum = useMemo(() => {
        let total = 0;
        for (let i = 1; i <= value; i++) {
            total += i;
        }
        return total;
    }, [value]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Fragment>
            <input type="number" value={value} onChange={handleChange} /><br /><br />
            Sum is: {sum}
            <button onClick={() => setCount(count + 1)}>Counter({count})</button>
        </Fragment>
    );
};

export default UseMemo;
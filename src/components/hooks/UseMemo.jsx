import { Fragment, useState, useMemo, useCallback } from "react";

const UseMemo = () => {
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    const sum = useMemo(() => {
        try {
            return (value / 2) * (1 + value);
        } catch (error) {
            setError(true);
            return 0;
        }
    }, [value]);

    const handleChange = (e) => {
        const parsedValue = parseInt(e.target.value);
        if (isNaN(parsedValue) || parsedValue < 0) {
            setValue(0);
        } else {
            setValue(parsedValue);
        }
    };

    const handleCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <Fragment>
            <label htmlFor="inputValue">Value:</label>
            <input type="number" id="inputValue" value={value} onChange={handleChange} /><br /><br />
            {error ? <p>Error calculating sum</p> : <p>Sum is: {sum}</p>}
            <button type="button" onClick={handleCount}>Counter({count})</button>
        </Fragment>
    );
};

export default UseMemo;

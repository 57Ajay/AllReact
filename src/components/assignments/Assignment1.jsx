import {Fragment, useMemo, useState} from 'react'
// Code code which find the factorial of the input value
const Assignment1=()=> {
    const [input, setInput] = useState(0);
    const handler = function(e){
        setInput(e.target.value);
    };
    const factorial = useMemo(() => {
        let val = 1;
        if (input === 0) {
          return 1;
        }
        for (let i = 1; i <= input; i++) {
          val*=i;
        }return val;
      }, [input]);
    
  return (
    <Fragment>
        <h1>Assignment1</h1>
        <div>
            <input onChange={handler} type='number' />
            <h3> {`Factorial of ${input} is: ${factorial}`}</h3>
        </div>
    </Fragment>
  )
}
export default Assignment1;

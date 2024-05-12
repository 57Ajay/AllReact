import { Fragment, useState } from 'react'
import useTodos from '../CustomHooks/useTodos';
 const UseEffect=()=> {
  const [id, setId] = useState(1);
  const todos = useTodos({id});
  return (
  <Fragment>
    Id: {id}
    <button onClick={() => setId(1)}>1</button>
    <button onClick={() => setId(2)}>2</button>
    <button onClick={() => setId(3)}>3</button>
    <button onClick={() => setId(4)}>4</button>
    <button onClick={() => setId(5)}>5</button>
    {todos.map((todo)=>{
      return <li key={todo.id}>  
        {todo.title}<br />{todo.completed ? 'Completed' : 'Not Completed'}
        </li>
    })}
  </Fragment>
  );
}

export default UseEffect;

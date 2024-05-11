import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
 const UseEffect=()=> {
    const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);
  useEffect(()=>{
    setTimeout(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
      .then((response)=>{
        setTodos(response.data);
    });
    }, 500)
  }, [id]);
  return (
  <Fragment>
    ID: {id}<br />
    <button onClick={()=>setId(2)}>2</button>
    <button onClick={()=>setId(3)}>3</button>
    <button onClick={()=>setId(4)}>4</button>
    {todos.map((todo)=>{
      
      return <li key={todo.id}>
        
        {todo.title}<br />{todo.completed ? 'Completed' : 'Not Completed'}
        </li>
    })}
  </Fragment>
  );
}

export default UseEffect;
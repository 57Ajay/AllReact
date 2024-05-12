import { useState, useEffect } from 'react';
import axios from 'axios';


function useTodos({id}) {
    const [todo, setTodos] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`) 
        .then((response)=>setTodos(response.data))
    }, [id]);
    return todo;
}

export default useTodos;



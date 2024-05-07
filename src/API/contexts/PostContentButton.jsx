import { useContext } from "react";
import UserContext from "./UserContext";

const PostContentButton=()=> {
  const {id, setUserData} = useContext(UserContext);
  return (
    <div>
        {id}
        <button onClick={()=>setUserData((currentState)=>({
          ...currentState, displayName: "57upaAjay"+Math.random(), id: Math.random()
        }))}>Click</button>
    </div>
  )
}

export default PostContentButton;
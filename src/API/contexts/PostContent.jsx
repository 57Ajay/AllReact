import { useContext } from "react";
import PostContentButton from "./PostContentButton";
import UserContext from "./UserContext";
const PostContent=()=> {
  const userContextData = useContext(UserContext);
  return (
    <div>
        <PostContentButton />
        {userContextData.email}
    </div>
  )
}



export default PostContent;
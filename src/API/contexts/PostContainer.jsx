import { useContext } from "react";
import PostContent from "./PostContent"
import UserContext from "./UserContext";
 const PostContainer  =()=> {
    const userContextData = useContext(UserContext);
  return (
    <div style={{color: "White"}}>
        <PostContent />
        {userContextData.displayName}

    </div>
  );
};

export default PostContainer;
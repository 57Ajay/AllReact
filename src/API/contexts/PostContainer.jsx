import { useContext, useState } from "react";
import PostContent from "./PostContent"
import UserContext from "./UserContext";
 const PostContainer  =()=> {
    const [data, setData] = useState("Hello! Ajay");
    const userContextData = useContext(UserContext);
  return (
    <div style={{color: "White"}}>
        <PostContent data={data}/>
        {userContextData.displayName}

    </div>
  );
};

export default PostContainer;
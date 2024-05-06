import { Fragment, useState } from "react";
import PostContainer from "./PostContainer";
import UserContext from "./UserContext";
const PostContext=()=> {
    const [userData, setUserData] = useState({
        id: Math.random(),
        userName: "Ajay",
        email: "57Ajay@gmail.com",
        displayName: "57Ajay",
    });

  return (
    <Fragment>
        <UserContext.Provider value={ {...userData, setUserData: setUserData }}>
          <div>
            <PostContainer />
          </div>
        </UserContext.Provider>
    </Fragment>
  )
}


export default  PostContext;
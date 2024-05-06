import { useContext } from "react";
import PostContentButton from "./PostContentButton";
import PropTypes from "prop-types";
import UserContext from "./UserContext";
const PostContent=({ data })=> {
  const userContextData = useContext(UserContext);
  return (
    <div>
        <PostContentButton data={data}/>
        {userContextData.email}
    </div>
  )
}

PostContent.propTypes = {
    data: PropTypes.string.isRequired,
}

export default PostContent;
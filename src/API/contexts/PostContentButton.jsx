import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "./UserContext";
const PostContentButton=()=> {
  const userContextData = useContext(UserContext);
  return (
    <div>
        {userContextData.id}
    </div>
  )
}

PostContentButton.propTypes = {
    data: PropTypes.string.isRequired,
}
export default PostContentButton;
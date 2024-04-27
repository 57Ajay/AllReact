import Proptypes from "prop-types";
const UserUsername = ({name})=>{
    return(
        <div id="user-username">
            <b>Username: </b>
            <span>{name}</span>
        </div>
    );
};
UserUsername.propTypes = {
    name: Proptypes.string.isRequired
};

export default UserUsername;
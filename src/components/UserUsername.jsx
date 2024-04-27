import Proptypes from "prop-types";
import { Fragment } from "react";
import "./UserUsername.css";

const UserUsername = ({name})=>{
    return(
        <Fragment>
            <b className="Username">Username: </b>
            <span>{name}</span>
            <br />
        </Fragment>
    );
};

UserUsername.propTypes = {
    name: Proptypes.string.isRequired
};

export default UserUsername;
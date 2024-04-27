import UserUsername from "./UserUsername";
import Proptypes from "prop-types";
const UserProfile = (props)=>{
    return (
        <div id="UserProfile">
            <h1>User Profile</h1>
            <UserUsername name="Ajay" />
            <b>Age: </b>
            <span>{props.age}</span>
            <br/>
            <b>Login: </b>
            <span>{props.login ? "Yes" : "No"}</span>

            {console.log(props)}
            <div>
                <b>Email: </b>
                <span>john.c.calhoun@examplepetstore.com</span>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    age: Proptypes.number.isRequired,
    login: Proptypes.bool.isRequired
};

export default UserProfile;
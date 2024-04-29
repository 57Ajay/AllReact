import UserUsername from "./UserUsername";
import Proptypes from "prop-types";
import userprofile from"./Userprofile.module.css";
const UserProfile = (props)=>{
    return (
        <div className={userprofile.userprofile} >
            <h1>User Profile</h1>
            {/* <UserUsername name={props.Username} /> this is called prop drilling where we are sending props to UserUsername from UserProfile. */}
            <UserUsername name={props.Username} />
            <b>Age: </b>
            <span>{props.age}</span>
            <br/>
            <b>Login: </b>
            <span>{props.login ? "Yes" : "No"}</span>
            <br />
            <label>
                <b>Email: </b>
                <span>57Ajay.U@gmail.com</span>
            </label>
        </div>
    );
};

UserProfile.propTypes = {
    Username: Proptypes.string.isRequired,
    age: Proptypes.number.isRequired,
    login: Proptypes.bool
};

export default UserProfile;
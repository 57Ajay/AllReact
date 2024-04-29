import PropTypes from "prop-types";
import { Fragment, useState } from "react";

const UserDetails = ({ user, updateUser, deleteUser }) => {
    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState(user.UserName);
    const [email, setEmail] = useState(user.email);

    const handleEditingChange = () => {
        setEditing((currentState) => !currentState);
    };

    const handleSave = () => {
        // Save changes
        updateUser(user.id, { UserName: userName, email: email });
        handleEditingChange();
    };

    return (
        <Fragment>
        
            <br />
            <b>ID: </b>
            <span>{user.id}</span>
            <br />
            <b>UserName: </b>
            {editing ? (
                <input
                    name="UserNameDetails"
                    id="UserNameDetails"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            ) : (
                <span>{user.UserName}</span>
            )}
            <br />
            <b>Email: </b>
            {editing ? (
                <input
                    name="UserEmailDetails"
                    id="UserEmailDetails"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
            ) : (
                <span>{user.email}</span>
            )}
            <br />
            {editing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEditingChange}>Edit</button>
            )}
            <button onClick={()=>{deleteUser(user.id)}}>Delete</button><br/>
        </Fragment>
    );
};

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        UserName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }),
    updateUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
};

export default UserDetails;

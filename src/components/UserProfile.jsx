import UserUsername from "./UserUsername";
const UserProfile = ()=>{
    return (
        <div id="UserProfile">
            <h1>User Profile</h1>
            <UserUsername name="Ajay" />
            <div>
                <b>Email: </b>
                <span>john.c.calhoun@examplepetstore.com</span>
            </div>
        </div>
    );
};

export default UserProfile;
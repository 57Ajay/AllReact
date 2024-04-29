import { Fragment, useState } from "react"; 

const RegisterForm = ()=>{
    const [formData, setFormData] = useState({
        UserName: "",
        Password: "",
        displayName: "",
    });
    
    const disabled = formData.UserName.length === 0 || formData.Password.length === 0 || formData.displayName.length === 0;


    const userSet = (e)=>{
        const value = e.target.value;
        setFormData({
        UserName: value,
        Password: formData.Password,
        displayName: formData.displayName,
        });
    };

    const passSet = (e)=>{
        const value = e.target.value;
        setFormData({
        UserName: formData.UserName,
        Password: value,
        displayName: formData.displayName,
        });
    };

    const displaySet = (e)=>{
        const value = e.target.value;
        setFormData({
        UserName: formData.UserName,
        Password: formData.Password,
        displayName: value,
        });
    };

    return(
        <Fragment>
            <form>
                <label htmlFor="RegisterUserName">
                    UserName: 
                    <input id="RegisterUserName" className="RegisterInput" type="text" autoComplete="register-password" placeholder="Username"
                    name="UserName" value={formData.UserName} onChange={userSet} maxLength={11} />
                </label><br />

                <label htmlFor="RegisterPassword">
                    Password: 
                    <input className="RegisterInput" id="RegisterPassword" type="password" autoComplete="register-password" placeholder="Password"
                    name="Password" value={formData.Password} onChange={passSet} maxLength={17} />
                </label><br />

                <label htmlFor="RegisterPassword">
                    DisplayName: 
                    <input className="RegisterInput" id="RegisterDisplayName" type="text" autoComplete="register-DisplayName" placeholder="DisplayName"
                    name="DisplayName" value={formData.displayName} onChange={displaySet} maxLength={11} />
                </label><br />
                <div>
                    UserName: {formData.UserName}<br />
                    displayName: {formData.displayName}
                </div>
                <button type="submit" className="RegisterButton" disabled={disabled} >Register</button>
            </form>
        </Fragment>
    );
};

export default RegisterForm;
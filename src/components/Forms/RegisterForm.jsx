import { Fragment, useState } from "react"; 

const RegisterForm = ()=>{
    const [formData, setFormData] = useState({
        UserName: "",
        Password: "",
        displayName: "",
    });
    
    const disabled = formData.UserName.length === 0 || formData.Password.length === 0 || formData.displayName.length === 0;


    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    };
    return(
        <Fragment>
            <form>
                <label htmlFor="RegisterUserName">
                    UserName: 
                    <input id="RegisterUserName" className="RegisterInput" type="text" autoComplete="register-password" placeholder="Username"
                    name="UserName" value={formData.UserName} onChange={handleChange} maxLength={11} />
                </label><br />

                <label htmlFor="RegisterPassword">
                    Password: 
                    <input className="RegisterInput" id="RegisterPassword" type="password" autoComplete="register-password" placeholder="Password"
                    name="Password" value={formData.Password} onChange={handleChange} maxLength={17} />
                </label><br />

                <label htmlFor="RegisterDisplayName">
                    DisplayName: 
                    <input className="RegisterInput" id="RegisterDisplayName" type="text" autoComplete="register-DisplayName" placeholder="DisplayName"
                    name="displayName" value={formData.displayName} onChange={handleChange} maxLength={11} />
                </label><br />
                <div>
                    UserName: {formData.UserName}<br />
                    displayName: {formData.displayName}<br />
                    Password: {formData.Password}
                </div>
                <button type="submit" className="RegisterButton" disabled={disabled} >Register</button>
            </form>
        </Fragment>
    );
};

export default RegisterForm;
import { Fragment, useState } from "react"; 

const RegisterForm = ()=>{
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    return(
        <Fragment>
            <form>
                <label htmlFor="UserName">
                    UserName: 
                    <input id="RegisterUserName" className="RegisterInput" type="text" placeholder="Username"
                    name="UserName" />
                </label>
                <br />
                <label htmlFor="Password">
                    Password: 
                    <input className="RegisterInput" id="RegisterPassword" type="password" placeholder="Password"
                    name="Password"/>
                </label><br />
                <button type="submit" className="RegisterButton">Register</button>
            </form>
        </Fragment>
    )
};

export default RegisterForm;
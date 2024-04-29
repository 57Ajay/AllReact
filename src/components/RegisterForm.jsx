import { Fragment, useState } from "react"; 

const RegisterForm = ()=>{
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const userSet = (e)=>{
        setUserName(e.target.value);
    };

    const passSet = (e)=>{
        setPassword(e.target.value);
    };

    const displaySet = (e)=>{
        setDisplayName(e.target.value);
    };

    return(
        <Fragment>
            <form>
                <label htmlFor="RegisterUserName">
                    UserName: 
                    <input id="RegisterUserName" className="RegisterInput" type="text" autoComplete="register-password" placeholder="Username"
                    name="UserName" value={UserName} onChange={userSet} maxLength={11} />
                </label><br />

                <label htmlFor="RegisterPassword">
                    Password: 
                    <input className="RegisterInput" id="RegisterPassword" type="password" autoComplete="register-password" placeholder="Password"
                    name="Password" value={Password} onChange={passSet} maxLength={17} />
                </label><br />

                <label htmlFor="RegisterPassword">
                    DisplayName: 
                    <input className="RegisterInput" id="RegisterDisplayName" type="text" autoComplete="register-DisplayName" placeholder="DisplayName"
                    name="DisplayName" value={displayName} onChange={displaySet} maxLength={11} />
                </label><br />
                <div>
                    UserName: {UserName}<br />
                    displayName: {displayName}
                </div>
                <button type="submit" className="RegisterButton">Register</button>
            </form>
        </Fragment>
    )
};

export default RegisterForm;
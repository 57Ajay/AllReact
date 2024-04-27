import { Fragment } from "react";

const LoginForm = ()=>{
    return(
        <Fragment>
            <form onSubmit={(e)=>{
                e.preventDefault();
                const formData = new FormData(e.target);
                const UserName = formData.get("UserName");
                const Password = formData.get("Password");
                fetch("/api/data", {
                    body: {
                        UserName,
                        Password
                    }, 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                // console.log(formData.get("UserName"));
                // console.log(formData.get("Password"));
            }}>
                <label htmlFor="UserName">
                    UserName: 
                    <input id="UserName" className="UserName" type="text" placeholder="Username"
                    onChange={(e)=>{
                        // console.log(e.target.value);
                        
                    }} name="UserName" />
                </label>
                <br />
                <label htmlFor="Password">
                    Password: 
                    <input className="Password" id="Password" type="password" placeholder="Password"
                    onChange={(e)=>{
                        // console.log(e.target.value);
                    }} name="Password"/>
                </label><br /><br />
                <button type="submit">Login</button>
            </form>
        </Fragment>
    );
};

export default LoginForm;
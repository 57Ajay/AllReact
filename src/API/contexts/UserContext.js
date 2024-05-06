import { createContext } from "react";

const UserContext = createContext({
    id: 0,
    userName: "",
    email: "",
    displayName: "",
    setUserData: ()=>{},
});

export default UserContext;
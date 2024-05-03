import { Fragment } from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import './App.css';
import Box from "./components/Box/Box";
import UserFavoriteMovies from "./components/UserMovies/UserFavoriteMovies";
import LoginForm from "./components/Forms/LoginForm";
import DisplaySize from "./components/DisplaySize/DisplaySize";
import RegisterForm from "./components/Forms/RegisterForm";
import UserDetailsRenderer from "./components/UserDetails/UserDetailsRenderer";
import UseEffectHook from "./components/hooks/UseEffectHook";


const App =()=>{
  
  return(
    <Fragment> 
      <DisplaySize /><br />
      <UseEffectHook />
      <UserProfile Username="Ajay" age={21} login={true} />
      <br />
      
      <br />
      <Box className="container1">
        <Box className="form-box">
          <LoginForm />
        </Box>
        <Box className="movie-box">
        <UserFavoriteMovies />
        </Box>
        <Box className="register-box">
        <RegisterForm />
        </Box>
      </Box>
      <Box className="user-details">
        <UserDetailsRenderer />
      </Box>
        
    </Fragment>
  );
};

export default App;
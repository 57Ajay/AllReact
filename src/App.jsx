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
      <UseEffectHook />
      <UserProfile Username="Ajay" age={21} login={true} />
      <br />
      <Box className="movie-box">
        <UserFavoriteMovies />
      </Box>
      <br />
      <Box className="another-box">
        <h1>Big Box</h1>
        <p>This is Biggest box</p>
        <button>Click me</button>
        <Box className="another-box-inside-another-box">
          <LoginForm />
        </Box>
        <h3>Display Size (W x H): </h3>
        <DisplaySize />
      </Box>
      <Box className="register-box">
        <RegisterForm />
      </Box>
      <Box className="user-details">
        <UserDetailsRenderer />
      </Box>
      

    </Fragment>
  );
};

export default App;
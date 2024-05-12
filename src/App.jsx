import  { Fragment } from "react";
import UserProfile from "./components/UserProfile/UserProfile";
import './App.css';
import Box from "./components/Box/Box";
import UserFavoriteMovies from "./components/UserMovies/UserFavoriteMovies";
import LoginForm from "./components/Forms/LoginForm";
import DisplaySize from "./components/DisplaySize/DisplaySize";
import RegisterForm from "./components/Forms/RegisterForm";
import UseEffectHook from "./components/hooks/UseEffectHook";
import Requests from "./components/hooks/Requests";
import CustomHook from "./components/CustomHooks/CustomHook";
import useDocumentClicks from "../src/utils/hooks/useDocumentClicks"
import PostContext from "./API/contexts/PostContext";
import useFetchUser from "./components/CustomHooks/useFetchUser";
import { Outlet, Link } from "react-router-dom";
import UseEffect from "./components/hooks/UseEffect";
import UseMemo from "./components/hooks/Usememo";
import UseRef from './components/hooks/UseRef';

const App =()=>{
  useDocumentClicks()
  const {user, loading, error} = useFetchUser(1);
  console.log(user, loading, error);
  return(
    
    <Fragment>
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/user-details"}>user details</Link></li>
          </ul>
        </nav>
      </div>
      <CustomHook />
      <Requests />
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
      
      <Outlet />
      <br />
      <PostContext />
      <UseEffect />
      <UseMemo />
      <UseRef />
    </Fragment>
  );
};

export default App;

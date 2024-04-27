import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import './App.css';
import Box from "./components/Box";
import UserFavoriteMovies from "./components/UserFavoriteMovies";
import LoginForm from "./components/LoginForm";


const App =()=>{
  return(
    <Fragment>
      <UserProfile Username="Ajay" age={21} login={true} />
      <br />
      <Box className="movie-box">
        <UserFavoriteMovies />
      </Box>
      <br />
      <Box className="another-box">
        <h1>Another Box</h1>
        <p>This is another box</p>
        <button>Click me</button>
        <Box className="another-box-inside-another-box">
          <LoginForm />
        </Box>
      </Box>
    </Fragment>
  );
};

export default App;
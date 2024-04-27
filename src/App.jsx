import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import './App.css';
import Box from "./components/Box";
import UserFavoriteMovies from "./components/UserFavoriteMovies";


const App =()=>{
  return(
    <Fragment>
      <UserProfile Username="Ajay" age={21} login={true} />
      <br />
      <Box customClass="movie-box">
        <UserFavoriteMovies />
      </Box>
      <Box customClass="another-box">
        <h1>Another Box</h1>
      </Box>
    </Fragment>
  );
};

export default App;
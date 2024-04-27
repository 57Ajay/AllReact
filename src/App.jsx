import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import './App.css';
import Box from "./components/Box";


const App =()=>{
  return(
    <Fragment>
      <UserProfile Username="Ajay" age={21} login={true} />
      <Box />
    </Fragment>
  );
};

export default App;
import { Fragment } from "react";
import UserProfile from "./components/UserProfile";
import './App.css';
const App =()=>{
  return(
    <Fragment>
      <UserProfile Username="Ajay" age={21} login={true} />
    </Fragment>
  );
};

export default App;
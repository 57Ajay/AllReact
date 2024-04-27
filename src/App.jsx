import UserProfile from "./components/UserProfile";

const App =()=>{
  return(
    <div>
      <UserProfile age={21} login={true} />
    </div>
  );
};

export default App;
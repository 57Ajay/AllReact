import { useEffect } from "react";

const userApiUrl = "https://jsonplaceholder.typicode.com/users/";
function useFetchUser(userId) {
  useEffect(()=>{
    fetch(`${userApiUrl}/${userId}`)
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error))
  }, [userId]);
}

export default useFetchUser;
import { useEffect, useState } from "react";

const userApiUrl = "https://jsonplaceholder.typicode.com/users/";
function useFetchUser(userId) {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(()=>{
    const controller = new AbortController();
    setLoading(true);
    fetch(`${userApiUrl}/${userId}`)
    .then((response) => response.json())
    .then((data)=> {console.log(data);
        setUserData(data);
        setError(undefined);})
    .catch((error)=> setError(error))
    .finally(() => setLoading(false));

    return ()=>{
        controller.abort("useFetchUser is Aborted");
        setLoading(false);
    };
  }, [userId]);
  return {user: userData, loading, error};
}

export default useFetchUser;
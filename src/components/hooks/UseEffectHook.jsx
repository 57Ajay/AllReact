import { useEffect, useState } from "react";
import Box from "../Box/Box";
// import "./UseEffectHook.css";

const UseEffectHook = () => {
    const [users, setUsers] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);
    useEffect(()=>{
        const fetchImg = async ()=>{
            try{
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            const data = await response.json();
            console.log(data);
            // sort the array randomly
            data.sort(() => Math.random() - 0.5);
            // fetching only 50 images Randomly
            setImages(data.slice(0, 50));
            }catch(error){ 
                console.log(error);
            }
        };
        fetchImg();
    }, []);
    return (
        <Box className="container">
            {users.map((user) => (
                <div key={user.id} className="user-box">
                    <ul>
                        <li><p>Name:</p> {user.name}</li>
                        <li><p>Username:</p> {user.username}</li>
                        <li><p>Email:</p> {user.email}</li>
                        <li><p>Contact:</p> {user.phone}</li>
                        <li><p>Website:</p> {user.website}</li>
                    </ul>
                </div>
            ))}
            <br />
            {images.map((image) => (
                <div key={image.id} className="image-box">
                    <img src={image.thumbnailUrl} alt={image.title} style={{width: "100px", height: "100px"}} />
                </div>
            ))}
        </Box>
    );
};

export default UseEffectHook;


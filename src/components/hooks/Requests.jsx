import { Fragment, useState } from "react";


const Requests = ()=> {
    const [blogPostData, setBlogPostData] = useState([{
        title: "",
        body: ""
    }]);

  return(
    <Fragment>
        <form onSubmit={(e)=>{
            e.preventDefault();
            blogPostData.title && blogPostData.body ? (
                fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    body: JSON.stringify({title: blogPostData.title, body: blogPostData.body, userId: (Math.random() * 10)}),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })
                .then((response)=>
                    response.json()
                ).then((data)=>{
                    console.log(data);
                })
                .catch((error)=>{
                    console.log(error);
                })
                
            ): alert("Please fill in all fields");

            setBlogPostData({
                title: "",
                body: ""
            });
        }}>

            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title"
            value={blogPostData.title} // Changed this line
            onChange={(e) =>{
                setBlogPostData((currentState) =>({...currentState, title: e.target.value}))
            }}/>

            <label htmlFor="body">Body: </label>
            <input type="text" id="body" name="body"
            value={blogPostData.body} // Changed this line
            onChange={(e)=>{setBlogPostData((currentState) =>({...currentState, body: e.target.value}))
            }}/>
            <button type="submit">Create Post</button>
        </form>
    </Fragment>
  );
};

export default Requests;

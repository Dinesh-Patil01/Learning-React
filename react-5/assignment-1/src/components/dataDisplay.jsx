import { useState } from "react";
import PostItem from "./postItem";

const getData = async(url) => {
 try {
    let res = await fetch(url);
    let data = res.json();
    return data;
 } catch (error) {
    throw new Error (error);
 }
}

function DataDisplay () {
    const [loading , setLoading] = useState(false);
    const [post , setPost] = useState([]);
    const [error , setError] = useState(false);

    const fetchAndUpdateData  = async () => {
        setLoading(true);
        try {
            let data = await getData( `https://jsonplaceholder.typicode.com/posts`);
            setPost(data);
            setLoading(false)
        } catch (error) {
            setError(true);
            setLoading(false)
        }
    };


    if(loading){
        return <h1>Loading......</h1>
    }
    if(error){
        return <h1>404:Something went wrong</h1>
    }

    return(
        <>
        <h1>Get Data</h1>
        <button onClick={fetchAndUpdateData}>get</button>
        {post.map((post) => (
            < PostItem key={post.id} id={post.id} title={post.title} />
        ))}
        </>
    );
}

export default DataDisplay;
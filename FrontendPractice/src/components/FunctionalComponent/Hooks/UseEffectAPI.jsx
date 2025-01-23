import { useState,useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () =>{
    var [post,setPost] = useState([]);
    var [album,setAlbum] = useState([]);

    var [images,setImage] = useState([]);

    useEffect(() =>{
         var response = axios.get("https://jsonplaceholder.typicode.com/posts/") 
         .then((res) => {
            setPost(res.data)
            console.log(res)
         })
         .catch((err) => {
            console.log(err);
         })
        
    },[]);

    useEffect(() =>{
        var response = axios.get("https://jsonplaceholder.typicode.com/albums/") 
        .then((res) => {
           setAlbum(res.data)
           console.log(res)
        })
        .catch((err) => {
           console.log(err);
        })
       
   },[]); 

   useEffect(() =>{
        var response = axios.get(" https://fakestoreapi.com/products/") 
        .then((res) => {
        setImage(res.data)
        console.log(res)
        })
        .catch((err) => {
        console.log(err);
        })
   
    },[]);

    
    return(
        <div>
            <h1>This page is ment for useEffect with API</h1>
            <h2>The contents inside my JSON post are</h2>
            {/*image*/}
            <h1>Products Images</h1>
            <h4 style={{ fontWeight: "200" }}>
            <ul style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "10px",
                padding: "10px",
                listStyleType: "none"
            }}>
                {images.map((e) => (
                <li key={e.id} style={{ width: "250px", height: "250px", overflow: "hidden" }}>
                    <img src={e.image} alt="grid-img" style={{ width: "100%", height: "100%",  borderRadius: "5px" }} />
                </li>
                ))}
            </ul>
            </h4>
           
            {/*Posts API */}
            <h1>Posts</h1>
            <h4 style={{fontWeight:"200"}}>
                {post.map((e)=>(
                    <li key={e.id} style={{listStyleType:"number"}}>{e.title}</li>
                ))}
            </h4>
            {/*Albums API */}
            <h1>Albums</h1>
            <h4 style={{fontWeight:"200"}}>
                {album.map((e)=>(
                    <li key={e.id} style={{listStyleType:"number"}}>{e.title}</li>
                ))}
            </h4> 
        </div> 
    );
}

export default UseEffectAPI;
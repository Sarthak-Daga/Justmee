import React from "react";
import Postcard from "../../../components/postcard/postcard";
import { error } from "console";


const getData = async()=> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok){
    throw new error("Something went Wrong")
  }

  return res.json()
}


const Blog = async() => {

  const posts = await getData()
  return (
    
      <div className="flex flex-wrap gap-x-[20px] ml-10 mt-10">
        {posts.map(post=>(
          <div className="w-[30%]" key={post.id}>
          <Postcard post={post}/>
        </div>
        ))}
      </div>
    
  );
};

export default Blog;

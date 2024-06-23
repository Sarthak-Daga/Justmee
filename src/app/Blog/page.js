import React from "react";
import Postcard from "../../../components/postcard/postcard";
import { error } from "console";
import getPost, { getPosts } from "../../../lib/data"


const Blog = async(slug) => {

  const posts = await getPost(slug);
  return (
    
      <div className="flex flex-wrap gap-x-[20px] ml-10 mt-10">
        {posts.map(post=>(
          <div className="w-[30%]" key={post?.id}>
          <Postcard post={post}/>
        </div>
        ))}
      </div>
    
  );
};

export default Blog;

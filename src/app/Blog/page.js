import React from "react";
import Postcard from "../../../components/postcard/postcard";
const Blog = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-[20px] ml-10 mt-10">
        <div className="w-[30%]">
          <Postcard />
        </div>
        <div className="w-[30%]">
          <Postcard />
        </div>
        <div className="w-[30%]">
          <Postcard />
        </div>
        <div className="w-[30%]">
          <Postcard />
        </div>
        <div className="w-[30%]">
          <Postcard />
        </div>
        <div className="w-[30%]">
          <Postcard />
        </div>
      </div>
    </>
  );
};

export default Blog;

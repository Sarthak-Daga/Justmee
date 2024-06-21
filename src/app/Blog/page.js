import React from 'react';
import postcard from "../../../components/postcard/postcard";
import Link from 'next/link';
import Image from 'next/image';
const Blog = () => {
  return (
    <>
    <div class="m-20 h-[400px] w-[250px] rounded-lg flex flex-col gap-[15px] p-2 text-white">
        <div class="flex gap-0">
          <div class="bg-blue-200 h-[280px] w-[220px] rounded-lg">
            <Image src={'/hello.png'} width={20} height={30}/>
          </div>
          <span class="rotate-90 absolute ml-[194px] mt-[137px]">
            21.11.2005
          </span>
        </div>
        <div>
          <h1 class="font-bold text-2xl ">Title</h1>
          <p class="text-white opacity-70">Description</p>
          <Link href={"/blog.jsx"}>
            <span class="underline">Read More</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Blog
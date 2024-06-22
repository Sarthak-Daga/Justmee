import React from "react";
import Image from "next/image";
import Link from "next/link";
const Postcard = ({post}) => {
  return (
    <>
      <div className="h-[400px] w-[250px] rounded-lg flex flex-col gap-[15px] text-white mb-[200px] ml-[100px]">
        <div className="flex">
          <div className="h-[280px] w-[220px] rounded-lg">
            <Image
              src="/hello.png"
              layout="responsive"
              width={230}
              height={300}
              objectFit="contain"
              alt="Blog Post Image"
              className="rounded-lg"
            />
          </div>
          <span className="rotate-90 absolute ml-[194px] mt-[137px]">
            21.11.2005
          </span>
        </div>
        <div>
          <h1 className="font-bold text-2xl ">{post.title}</h1>
          <p className="text-white opacity-70">{post.body}</p>
          <Link href={`/Blog/${post.id}`}>
            <span className="underline">Read More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Postcard;

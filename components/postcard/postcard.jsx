import React from "react";
import Image from "next/image";
import Link from "next/link";
const Postcard = () => {
  return (
    <>
      <div className="h-[400px] w-[250px] rounded-lg flex flex-col gap-[15px] text-white">
        <div className="flex gap-0">
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
          <h1 className="font-bold text-2xl ">Title</h1>
          <p className="text-white opacity-70">Description</p>
          <Link href={"/blog.jsx"}>
            <span className="underline">Read More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Postcard;

import React from "react";

const postcard = () => {
  return (
    <>
      <div class="m-20 h-[400px] w-[250px] rounded-lg bg-[#0c0c23] flex flex-col gap-[15px] p-2 text-white">
        <div class="flex gap-0">
          <div class="bg-blue-200 h-[280px] w-[220px] rounded-lg">img</div>
          <span class="rotate-90 absolute ml-[194px] mt-[137px]">
            21.11.2005
          </span>
        </div>
        <div>
          <h1 class="font-bold text-2xl ">Title</h1>
          <p class="text-white opacity-70">Description</p>
          <Link>
            <span class="underline">Read More</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default postcard;

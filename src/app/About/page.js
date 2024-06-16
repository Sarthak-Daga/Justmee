import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="mt-20 ml-16">
        <div className="w-[50%]  inline-flex">About Us</div>
        <div className="absolute h-[500px] w-[500px] inline-flex">
          <Image src="/about.png" fill />
        </div>
      </div>
    </>
  );
};

export default About;

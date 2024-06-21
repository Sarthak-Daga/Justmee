import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="flex mt-20">
        <div className=" w-[50%] ml-10"> 
          <div className="font-bold text-3xl text-blue-700">About Us</div>
          <div className="text-6xl font-semibold mt-5 mb-6">
            We create digital ideas<br/> that are bigger,bolder,<br/>braver and better.
          </div>
          <div>
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precission We're world's
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </div>
          <div className="flex justify-between mt-12">
            <div><span className="font-bold text-blue-700 text-3xl">10 K+</span><br/> Years of Experience</div>
            <div><span className="font-bold text-blue-700 text-3xl">234 K+</span><br/> People reached</div>
            <div><span className="font-bold text-blue-700 text-3xl">5 K+</span><br/> Services and Plugins</div>
          </div>
        </div>
        <div className=" w-[50%] flex justify-center">
          <Image src={"/about.png"} height={500} width={500}/>
        </div>
      </div>
    </>
  );
};

export default About;

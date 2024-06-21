import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex space-x-32">
      <div className=" w-[50%] pl-28 pt-12">
        <div className=" text-7xl font-bold m-3">Creative <br/>Thoughts <br/> Agency</div>
        <div className="mt-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aut quasi
          sed voluptatum nostrum iste beatae aliquid voluptatibus. Ab obcaecati
          ea asperiores ullam voluptates dicta commodi est officia aut ut.
        </div>
        <div className="flex space-x-3 mt-12 justify-center">
          <button className="bg-blue-500 h-12 w-32 rounded-md">Learn More</button>
          <button className="bg-white text-black h-12 w-32 rounded-md">Contact</button>
        </div>
        <div className="p-2 grayscale justify-center">
          <Image src={"/brands.png"} alt="logos" width={1000} height={20}/>
        </div>
      </div>
      <div className="w-[50%]">
        <Image src={"/hero.gif"} alt="" width={600} height={60}/>
      </div>
    </div>
    </>
  );
}

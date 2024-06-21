// import React from "react";
// import Image from "next/image";
// const Contact = () => {
//   return (
//     <>
//       <div className="flex">
//         <div className=" w-[50%] flex justify-center">
//           <Image src={"/contact.png"} height={600} width={600} />
//         </div>
//         <div className=" w-[50%] flex flex-col justify-center items-center">
//           <div className="flex flex-col gap-[20px]">
//             <form className="flex flex-col gap-[18px]">
//               {/* //------------------------------------------------------------------------------------------------------ */}
//               <div className="flex items-center gap-4 justify-between ">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   className="bg-white bg-opacity-0 text-white border-2 border-white bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg w-[330px]"
//                 />
//               </div>
//               {/* //------------------------------------------------------------------------------------------------------- */}
//               <div className="flex items-center gap-4 justify-between ">
//                 <label>Email Address</label>
//                 <input
//                   type="text"
//                   className="bg-white bg-opacity-0 text-white border-2 border-white bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg w-[330px]"
//                 />
//               </div>
//               {/* //------------------------------------------------------------------------------------------------------- */}
//               <div className="flex items-center gap-4 justify-between ">
//               <label>Phone Number</label>
//                 <input
//                   type="integer"
//                   className="bg-white bg-opacity-0 text-white border-2 border-white bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg w-[330px]"
//                 />
//               </div>
//               {/* //------------------------------------------------------------------------------------------------------- */}
//               <div className="flex items-center gap-4 justify-between ">
//               <label>Message</label>
//                 <textarea
//                   cols={50}
//                   rows={7}
//                   className="bg-white bg-opacity-0 text-white border-2 border-white bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg w-[330px]"
//                 />
//               </div>
//               {/* //------------------------------------------------------------------------------------------------------- */}
//             </form>
//             <div className="flex justify-end items-center">
//               <button className="bg-blue-500 h-12 w-[100px] rounded-md p-2 ">
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <div className="flex">
        <div className=" w-[50%] flex justify-center">
          <Image src={"/contact.png"} height={600} width={600} />
        </div>
        <div className=" w-[50%] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-[20px]">
            <form className="flex flex-col gap-[18px]">
              <input
                placeholder="Name and Surname"
                type="text"
                className=" bg-black bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg"
              />
              <input
                placeholder="Email Address"
                type="text"
                className="bg-black bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg"
              />
              <input
                placeholder="Phone Number"
                type="integer"
                className="bg-black bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg"
              />
              <textarea
                placeholder="Message"
                cols={50}
                rows={10}
                className="bg-black bg-opacity-10 border-white border-solid border-2 border-opacity-5 px-4 py-2 rounded-lg"
              />
              <button className="bg-blue-500 h-12 w-[100%] rounded-md p-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
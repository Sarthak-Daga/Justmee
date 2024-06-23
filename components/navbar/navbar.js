import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" bg-[#0c0c23] p-4">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-white font-bold flex flex-col pl-12"><span className="text-xl">Sarthak</span><span>Daga</span></div>
        </Link>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-black hover:bg-white hover:rounded-xl hover:p-2 py-2">
            <a href="/">Homepage</a>
          </li>
          <li className="text-white hover:text-black hover:bg-white hover:rounded-xl hover:p-2 py-2">
            <a href="/About">About</a>
          </li>
          <li className="text-white hover:text-black hover:bg-white hover:rounded-xl hover:p-2 py-2">
            <a href="/Contact">Contact</a>
          </li>
          <li className="text-white hover:text-black hover:bg-white hover:rounded-xl hover:p-2 py-2">
            <a href="/Blog">Blog</a>
          </li>
          <li className="text-white hover:text-black hover:bg-white hover:rounded-xl hover:p-2 py-2">
            <a href="/Admin">Admin</a>
          </li>
          <li className="text-black hover:text-black bg-white p-2 rounded-lg cursor-pointer">
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

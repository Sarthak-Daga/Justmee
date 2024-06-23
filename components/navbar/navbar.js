"use client"

import React from 'react'
import Link from 'next/link'
import Navlink from '../Navlink/navlink'

const navlink = [
  {
    name: "Homepage",
    link: "/",
  },
  {
    name: "About",
    link: "/About",
  },
  {
    name: "Blog",
    link: "/Blog",
  },
  {
    name: "Admin",
    link: "/Admin",
  },
  {
    name: "Contact",
    link: "/Contact",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-[#0c0c23] p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="text-white font-bold flex flex-col pl-12 cursor-pointer">
            <span className="text-xl">Sarthak</span>
            <span>Daga</span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <Navlink navlink={navlink} />
          <li className="text-black hover:text-black bg-white p-2 rounded-lg cursor-pointer">
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

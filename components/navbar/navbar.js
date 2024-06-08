import React from 'react';

const NavBar = () => {
  return (
    <nav className=" bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400 py-2" ><a href='/'>Homepage</a></li>
          <li className="text-white hover:text-gray-400 py-2"><a href='/About'>About</a></li>
          <li className="text-white hover:text-gray-400 py-2"><a href='/Contact'>Contact</a></li>
          <li className="text-white hover:text-gray-400 py-2"><a href='/Blog'>Blog</a></li>
          <li className="text-white hover:text-gray-400 py-2"><a href='/Admin'>Admin</a></li>
          <li className="text-black hover:text-gray-400 bg-white p-2 rounded-lg"><a href='/'>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

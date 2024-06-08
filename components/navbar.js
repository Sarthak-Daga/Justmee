import React from 'react';

const NavBar = () => {
  return (
    <nav className=" bg-black p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-400 py-2">Homepage</li>
          <li className="text-white hover:text-gray-400 py-2">About</li>
          <li className="text-white hover:text-gray-400 py-2">Contact</li>
          <li className="text-white hover:text-gray-400 py-2">Blog</li>
          <li className="text-white hover:text-gray-400 py-2">Admin</li>
          <li className="text-black hover:text-gray-400 bg-white p-2 rounded-lg">Logout</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

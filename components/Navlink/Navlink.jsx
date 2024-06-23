"use client"; // Add this line to mark the component as a Client Component

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ navlink }) => {
  const pathname = usePathname();

  return (
    <>
      {navlink.map(({ link, name }) => (
        <li key={name}>
          <Link href={link}>
            <div
              className={`${
                pathname === link
                  ? 'text-black bg-white p-2 rounded-lg'
                  : 'text-white hover:text-black hover:bg-white'
              } hover:rounded-lg hover:p-2 py-2`}
            >
              {name}
            </div>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Navlink;

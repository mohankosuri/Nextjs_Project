import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const UserProfile=dynamic (()=>import ('./UserProfile'))
const Logo =dynamic(()=>import('./Logo'))
const TimeComponent=dynamic(()=>import('./TimeComponent'))



const Navbar= () => {
  return (
    <nav className=" bg-gradient-to-r from-indigo-500">
      <div className="container mx-auto flex justify-between items-center">
         <Logo/>
        <div className="flex space-x-6">
          <Link href="/Home">
            Home
          </Link>
          <Link href="/About">
            About
          </Link>
          <Link href="/Contact">
            Contact
          </Link>
          <UserProfile/>

        </div>
        <TimeComponent/>
      </div>
    </nav>
  );
};

export default Navbar;

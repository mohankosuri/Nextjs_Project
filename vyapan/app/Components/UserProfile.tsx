"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={handleToggleDropdown} className="flex items-center space-x-2">
        <Image src='/profile.jpg' alt='profile' width='24' height='24' className="rounded-full w-6 h-6"></Image>
        
        <span className="text-sm">John Doe</span>
       
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Logout</a>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

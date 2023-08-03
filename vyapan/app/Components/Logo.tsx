import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
       <Image src='/Logo.svg' alt='Logo' width='32' height='48' className='w-32 h-16' ></Image>
    </div>
  );
};

export default Logo;

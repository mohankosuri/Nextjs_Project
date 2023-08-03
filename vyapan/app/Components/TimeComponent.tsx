"use client"

import React, { useState, useEffect } from 'react';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
     
    const getCurrentTime = () => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    getCurrentTime();

const intervalId = setInterval(getCurrentTime, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>

      <p>{currentTime}</p>
    </div>
  );
};

export default TimeComponent;

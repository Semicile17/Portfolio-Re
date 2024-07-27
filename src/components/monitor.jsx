import React, { useState, useEffect } from 'react';
import DarthVader from './darthVader';
import Matrix from './matrix';
import Back2Future from './backtofuture';

const Monitor = () => {
  const components = [Matrix, Back2Future,DarthVader]; // List of components to switch between
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentComponentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 5000); // Change component every 5 seconds

    return () => clearInterval(intervalId);
  }, [components.length]);

  const CurrentComponent = components[currentComponentIndex];

  return (
    <div className="flex items-center justify-center bg-gray-800 w-1/2">
      <div className="bg-black p-4 rounded-lg relative shadow-lg shadow-black transition-shadow">
        <div className="flex flex-col bg-black p-1 w-[320px] h-[280px] text-black font-mono text-lg border-8 rounded-md">
          <div className="w-full flex justify-end items-end p-1 border border-secondary h-screen bg-black rounded">
            <CurrentComponent />
          </div>

          <div className="flex flex-row justify-start">
            <div className="w-3/5 flex">
              <div className=" w-full flex flex-col">
                <div className="w-4/5 h-3 bg-secondary mt-2"></div>
                <div className="w-4/5 h-3 bg-secondary mt-2"></div>
              </div>
            </div>
            <div className="bg-secondary h-8 w-2/5 mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;

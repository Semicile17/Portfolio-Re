/* eslint-disable react/prop-types */
import { useEffect } from 'react';// Import the Typewriter component
import BB8 from './bb8';

const Overlay = ({ onClose }) => {
  useEffect(() => {
    // Automatically close the overlay after a delay
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Adjust time as needed (5000ms = 5 seconds)

    return () => clearTimeout(timer); // Cleanup timer if the component unmounts
  }, [onClose]);

  return (
    <div className="fixed w-full inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="bg-black p-4 rounded-lg relative w-full h-screen">
        <div className="flex justify-center items-center bg-blue-600 p-8 w-full h-full text-primary font-arcade text-lg  rounded-md">
          <BB8/>
        </div>
      </div>
    </div>
  );
};

export default Overlay;

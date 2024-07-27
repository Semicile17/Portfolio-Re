import { useEffect, useState } from 'react';
import BB8 from './bb8';

const Overlay = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 800); // Delay onClose to allow the transition to complete
    }, 5000); // Start fading out before the total duration ends (e.g., 3500ms out of 4000ms)

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed w-full inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-black p-4 rounded-lg relative w-full h-screen">
        <div className="flex justify-center items-center bg-blue-600 p-8 w-full h-full text-primary font-arcade text-lg rounded-md">
          <BB8 />
        </div>
      </div>
    </div>
  );
};

export default Overlay;

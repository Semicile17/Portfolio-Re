/* eslint-disable react/prop-types */
// src/components/PixelDialog.jsx
import { useEffect, useState } from "react";
import "./styles/animations.css";
import { MarioLoader } from "./loader"; // Import the CSS file with animations

export default function PixelDialog({ onClose }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 1000); // Wait for animation to complete before calling onClose
  };

  useEffect(() => {
    // Cleanup animation class when dialog is removed
    return () => {
      setIsExiting(false);
    };
  }, []);

  return (
    <div className={`pixel-dialog  bg-blur ${isExiting ? "pixel-exit" : ""}`}>
      <div className="dialog-content hover:border-primary">
        <MarioLoader />
        <span className="close-icon hover:text-secondary" onClick={handleClose}>
          &#10005;
        </span>{" "}
        {/* Close icon */}
      </div>
    </div>
  );
}

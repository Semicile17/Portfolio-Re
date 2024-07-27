import React, { useEffect, useRef } from "react";
import './styles/matrix.css';

const Matrix = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;

    // Function to resize the canvas to the dimensions of its parent
    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    // Set initial canvas size
    resizeCanvas();

    // Re-size the canvas when the window is resized
    window.addEventListener('resize', resizeCanvas);

    // Setting up the letters
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters = letters.split('');

    // Setting up the columns
    const fontSize = 10;
    let columns = canvas.width / fontSize;

    // Setting up the drops
    let drops = Array.from({ length: columns }, () => 1);

    // Setting up the draw function
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Loop the animation
    const interval = setInterval(draw, 33);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div ref={containerRef} className="matrix-container h-full w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Matrix;

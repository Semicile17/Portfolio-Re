import  { useEffect, useRef } from "react";
import "./styles/crt.css"; // Import the CSS for CRT effect

const CRT = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    async function boot() {
      await type("Hello Neo", terminalRef.current);
    }

    boot();
  }, []);

  const type = async (text, container) => {
    await pause(1);
    let queue = text.split("");
    while (queue.length) {
      let char = queue.shift();
      container.textContent += char;
      await pause(0.1);
    }
    await pause(0.5);
    container.classList.remove("active");
    return;
  };

  const pause = (s = 1) => {
    return new Promise((resolve) => setTimeout(resolve, 1000 * Number(s)));
  };

  return (
    <div id="monitor">
      <div id="bezel">
        <div id="crt" className="off">
          <div className="scanline"></div>
          <div className="terminal" ref={terminalRef}></div>
        </div>
      </div>
    </div>
  );
};

export default CRT;

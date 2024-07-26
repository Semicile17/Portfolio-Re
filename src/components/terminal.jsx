import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import terminal_logo from '../assets/images/terminal_logo.png'
import './styles/terminal.css'

const commands = {
  help: "Available commands: 'about', 'skills', 'projects', 'contact', 'clear','esc'",
  about: "I am a web developer with experience in React, Node.js, and more.",
  skills: "My skills include React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  projects: "Some of my projects include a portfolio website, a task manager, and an e-commerce site.",
  contact: "You can contact me at email@example.com.",
  clear: "" ,// No response for 'clear'
  esc:""
};

function Terminal() {
  const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    if(trimmedInput === 'esc'){
      navigate('/')
    }
    // Handle 'clear' command
    if (trimmedInput === 'clear') {
      setLines([]); // Clear the terminal history
    } else {
      const response = commands[trimmedInput] || "Unknown command. Type 'help' for a list of commands.";
      setLines(prevLines => [...prevLines, { text: `> ${input}`, type: 'user' }, { text: response, type: 'bot' }]);
    }
    setInput(''); // Clear the input field after submitting
  };

  // Scroll to bottom of the terminal on update
  React.useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [lines]);

  return (
   <>
    <div className="terminal-container flex flex-col">
    <img src={terminal_logo} alt="terminal" className='h-16 pb-3'/>
     <h1 className='pb-4 font-arcade font-bold text-2xl text-secondary'>The Terminal</h1>
     <p className='font-Code text-primary pb-2 opacity-60'>press 'esc' to return home</p>
      <div className="terminal hover:border-secondary">
        <div className="terminal-screen">
          {lines.map((line, index) => (
            <div key={index} className={`line ${line.type}`}>
              {line.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
        <div className="line user-input">
          <form onSubmit={handleSubmit} className="input-form">
            <span className="prompt">&gt;</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a command..."
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Terminal;

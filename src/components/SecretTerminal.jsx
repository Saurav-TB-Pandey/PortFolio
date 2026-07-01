import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import './SecretTerminal.css';

const SecretTerminal = ({ isOpen, onClose, onOpenStats, onOpenNote }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Saurav_OS v2.0.4' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    // Reset position when closed
    if (!isOpen) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging || isMaximized) return;
      setPosition({
        x: e.clientX - dragStartPos.current.x,
        y: e.clientY - dragStartPos.current.y
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isMaximized]);

  const handleMouseDown = (e) => {
    if (isMaximized) return;
    setIsDragging(true);
    dragStartPos.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      
      const newHistory = [...history, { type: 'input', text: `> ${input}` }];
      
      switch(cmd) {
        case 'help':
          newHistory.push({ type: 'output', text: 'Available commands:' });
          newHistory.push({ type: 'output', text: '  whoami  - Who is Saurav?' });
          newHistory.push({ type: 'output', text: '  skills  - List core competencies' });
          newHistory.push({ type: 'output', text: '  contact - Get in touch' });
          newHistory.push({ type: 'output', text: '  hire    - The only correct command' });
          newHistory.push({ type: 'output', text: '  stats   - [SECRET] Unlock dev statistics panel' });
          newHistory.push({ type: 'output', text: '  note    - [SECRET] Read the classified recruiter letter' });
          newHistory.push({ type: 'output', text: '  clear   - Clear terminal output' });
          break;
        case 'whoami':
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          newHistory.push({ type: 'output', text: 'Scrolling to About section...' });
          break;
        case 'skills':
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          newHistory.push({ type: 'output', text: 'Initializing skills matrix...' });
          break;
        case 'contact':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          newHistory.push({ type: 'output', text: 'Establishing secure communication channel...' });
          break;
        case 'hire':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          newHistory.push({ type: 'output', text: 'Excellent choice. Routing to secure recruitment channel...' });
          
          const duration = 3000;
          const end = Date.now() + duration;

          (function frame() {
              confetti({
                  particleCount: 5,
                  angle: 60,
                  spread: 55,
                  origin: { x: 0 },
                  colors: ["#00F0FF", "#8E2DE2", "#10B981"]
              });
              confetti({
                  particleCount: 5,
                  angle: 120,
                  spread: 55,
                  origin: { x: 1 },
                  colors: ["#00F0FF", "#8E2DE2", "#10B981"]
              });

              if (Date.now() < end) {
                  requestAnimationFrame(frame);
              }
          }());
          
          window.dispatchEvent(new CustomEvent("hire-easter-egg"));
          setTimeout(onClose, 1500); // Close terminal to let them see the form
          break;
        case 'stats':
          newHistory.push({ type: 'system', text: 'ACCESS GRANTED: Opening Dev Stats UI...' });
          setTimeout(onOpenStats, 500);
          break;
        case 'note':
          newHistory.push({ type: 'system', text: 'ACCESS GRANTED: Decrypting Personal Note...' });
          setTimeout(onOpenNote, 500);
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case '':
          break;
        default:
          newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
      }
      
      setHistory(newHistory);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`secret-terminal ${isMaximized ? 'maximized' : ''} ${isDragging ? 'dragging' : ''}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className="terminal-header" onMouseDown={handleMouseDown} style={{ cursor: isMaximized ? 'default' : 'grab' }}>
        <div className="terminal-brand">
          <TerminalIcon size={16} />
          <span>Saurav_OS Terminal</span>
        </div>
        <div className="terminal-controls">
          <button onClick={() => setIsMaximized(!isMaximized)} className="terminal-btn maximize">
            {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={onClose} className="terminal-btn close">
            <X size={14} />
          </button>
        </div>
      </div>
      
      <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
        {history.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        
        <div className="terminal-input-row">
          <span className="terminal-prompt">guest@saurav:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default SecretTerminal;

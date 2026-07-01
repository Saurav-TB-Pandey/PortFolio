import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import './SecretTerminal.css';

const SecretTerminal = ({ isOpen, onClose, onOpenStats, onOpenNote }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Saurav_OS v2.0.4' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen]);

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
    <div className={`secret-terminal ${isMaximized ? 'maximized' : ''}`}>
      <div className="terminal-header">
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

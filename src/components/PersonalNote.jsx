import React from 'react';
import { X, Heart, ShieldAlert, Code } from 'lucide-react';
import './PersonalNote.css';

const PersonalNote = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="note-overlay" onClick={onClose}>
      <div className="note-modal" onClick={e => e.stopPropagation()}>
        <div className="note-header">
          <div className="note-title">
            <ShieldAlert size={20} className="note-icon" />
            <h3>CONFIDENTIAL: Recruiter Eyes Only</h3>
          </div>
          <button className="note-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="note-content">
          <p className="greeting">Hi there,</p>
          
          <p>If you're reading this, you either accidentally typed something weird in the terminal, or you're exactly the kind of curious recruiter/engineer I want to work with.</p>
          
          <p>I built this portfolio not just as a digital resume, but as a playground to demonstrate my passion for UI/UX, performance, and attention to detail. Every animation, lazy load, and hidden easter egg was handcrafted with love.</p>
          
          <p>I thrive in environments where engineering meets creativity. If your team is building something ambitious, scalable, and user-focused, we should absolutely talk.</p>
          
          <div className="note-signature">
            <p>Looking forward to connecting,</p>
            <h4 className="signature-name">Saurav Kumar</h4>
            <div className="signature-icons">
              <Code size={16} /> <Heart size={14} className="heart-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalNote;

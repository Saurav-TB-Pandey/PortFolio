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
        
        <div className="note-scroll-area">
          <div className="note-content">
            <p className="greeting">Hi there, Recruiter / Fellow Dev 🕵️</p>
            
            <p>If you're reading this, you either accidentally typed something weird in the console, or you're exactly the kind of curious recruiter/engineer I want to work with.</p>
            
            <p>I built this portfolio not just as a digital resume, but as a playground — a full-stack showcase of how I think about UI/UX, performance, and attention to detail on the frontend, and scalability, reliability, and clean architecture on the backend.</p>
            
            <p>Under the hood: RESTful APIs, database design that doesn't fall over at 3am, and AWS services (EC2, S3, Lambda, RDS — pick your poison) doing the heavy lifting behind every smooth animation and lazy-loaded asset you just saw.</p>
            
            <p>Every route, query, and deploy pipeline was handcrafted with love — and yes, there are a few more easter eggs hiding in here if you know where to look.</p>
            
            <p>I thrive in environments where engineering meets creativity — frontend polish backed by solid backend bones. If your team is building something ambitious, scalable, and user-focused, we should absolutely talk.</p>
            
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
    </div>
  );
};

export default PersonalNote;

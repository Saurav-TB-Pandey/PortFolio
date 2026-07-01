import React from 'react';
import { X, Code, Coffee, Bug, TerminalSquare, GitCommit, Clock } from 'lucide-react';
import './DevStats.css';

const DevStats = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stats = [
    { label: 'Lines of Code', value: '42,069+', icon: <Code size={24} />, color: '#3b82f6' },
    { label: 'Coffees Consumed', value: '1,337', icon: <Coffee size={24} />, color: '#eab308' },
    { label: 'Bugs Squashed', value: '99...', icon: <Bug size={24} />, color: '#ef4444' },
    { label: 'Terminal Hours', value: '9,001', icon: <TerminalSquare size={24} />, color: '#10b981' },
    { label: 'Git Commits', value: '3,141', icon: <GitCommit size={24} />, color: '#8b5cf6' },
    { label: 'Late Nights', value: 'Too many', icon: <Clock size={24} />, color: '#f97316' },
  ];

  return (
    <div className="dev-stats-overlay" onClick={onClose}>
      <div className="dev-stats-modal" onClick={e => e.stopPropagation()}>
        <div className="dev-stats-header">
          <div className="dev-stats-title">
            <TerminalSquare size={20} className="stats-icon" />
            <h3>Developer Statistics</h3>
          </div>
          <button className="stats-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="dev-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ '--stat-color': stat.color }}>
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="dev-stats-footer">
          <p>These metrics are 100% accurate and absolutely not made up for dramatic effect.</p>
        </div>
      </div>
    </div>
  );
};

export default DevStats;

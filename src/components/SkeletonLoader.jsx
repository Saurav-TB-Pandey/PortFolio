import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      {/* About Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-title"></div>
        <div className="skeleton-content-row">
          <div className="skeleton-image-circle"></div>
          <div className="skeleton-text-block">
            <div className="skeleton-line" style={{ width: '100%' }}></div>
            <div className="skeleton-line" style={{ width: '90%' }}></div>
            <div className="skeleton-line" style={{ width: '95%' }}></div>
            <div className="skeleton-line" style={{ width: '80%' }}></div>
            <div className="skeleton-line" style={{ width: '60%' }}></div>
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-title" style={{ margin: '0 auto 3rem auto' }}></div>
        <div className="skeleton-grid">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="skeleton-card"></div>
          ))}
        </div>
      </section>

      {/* Experience Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-title"></div>
        <div className="skeleton-timeline">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton-timeline-item">
              <div className="skeleton-timeline-dot"></div>
              <div className="skeleton-line" style={{ width: '30%', height: '24px', marginBottom: '1rem' }}></div>
              <div className="skeleton-line" style={{ width: '100%' }}></div>
              <div className="skeleton-line" style={{ width: '90%' }}></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkeletonLoader;

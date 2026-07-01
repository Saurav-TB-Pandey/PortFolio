import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      
      {/* About Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>
        <div className="skeleton-about-row">
          <div className="skeleton-about-left">
            <div className="skeleton-line" style={{ width: '60%', height: '24px', marginBottom: '1rem' }}></div>
            <div className="skeleton-line" style={{ width: '100%' }}></div>
            <div className="skeleton-line" style={{ width: '95%' }}></div>
            <div className="skeleton-line" style={{ width: '90%', marginBottom: '1.5rem' }}></div>
            
            <div className="skeleton-line" style={{ width: '100%' }}></div>
            <div className="skeleton-line" style={{ width: '85%', marginBottom: '2rem' }}></div>
            
            <div className="skeleton-line" style={{ width: '40%', height: '20px', marginBottom: '1rem' }}></div>
            <div className="skeleton-domains-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="skeleton-domain-item"></div>
              ))}
            </div>
          </div>
          <div className="skeleton-about-right">
            <div className="skeleton-code-editor"></div>
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>
        <div className="skeleton-grid-2x2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-skill-card">
              <div className="skeleton-skill-header">
                <div className="skeleton-icon-small"></div>
                <div className="skeleton-line" style={{ width: '50%', height: '20px', margin: 0 }}></div>
              </div>
              <div className="skeleton-skill-body">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="skeleton-skill-bar"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>
        <div className="skeleton-timeline">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton-timeline-item">
              <div className="skeleton-timeline-dot"></div>
              <div className="skeleton-exp-card">
                <div className="skeleton-exp-card-header">
                  <div>
                    <div className="skeleton-line" style={{ width: '150px', height: '24px', marginBottom: '0.5rem' }}></div>
                    <div className="skeleton-line" style={{ width: '100px', height: '12px' }}></div>
                  </div>
                  <div className="skeleton-line" style={{ width: '120px', height: '16px' }}></div>
                </div>
                
                <div className="skeleton-exp-roles-container">
                  {/* Generate 1 role block for most, but maybe 2 for the first one like the real data */}
                  {[...Array(i === 1 ? 2 : 1)].map((_, rIdx) => (
                    <div key={rIdx} className="skeleton-exp-role-block">
                      <div className="skeleton-exp-role-dot"></div>
                      <div className="skeleton-exp-role-header">
                        <div className="skeleton-line" style={{ width: '200px', height: '20px' }}></div>
                        <div className="skeleton-line" style={{ width: '140px', height: '14px' }}></div>
                      </div>
                      <div className="skeleton-exp-responsibilities">
                        {[...Array(3)].map((_, respIdx) => (
                          <div key={respIdx} className="skeleton-exp-resp-line">
                            <div className="skeleton-exp-resp-bullet"></div>
                            <div className="skeleton-line" style={{ width: `${85 + Math.random() * 10}%`, height: '14px' }}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>
        <div className="skeleton-filters">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton-filter-btn"></div>
          ))}
        </div>
        <div className="skeleton-projects-grid">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skeleton-project-card">
              <div className="skeleton-project-icon-box"></div>
              <div className="skeleton-line" style={{ width: '70%', height: '22px', marginBottom: '0.5rem' }}></div>
              <div className="skeleton-line" style={{ width: '50%', height: '14px', marginBottom: '1rem' }}></div>
              <div className="skeleton-line" style={{ width: '100%', marginBottom: '0.5rem' }}></div>
              <div className="skeleton-line" style={{ width: '90%', marginBottom: '1.5rem' }}></div>
              <div className="skeleton-project-tags">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="skeleton-tag"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-subtitle"></div>
        </div>
        <div className="skeleton-contact-row">
          <div className="skeleton-contact-left">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton-contact-card"></div>
            ))}
          </div>
          <div className="skeleton-contact-right">
            <div className="skeleton-contact-form"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SkeletonLoader;

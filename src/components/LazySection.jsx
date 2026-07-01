import React, { useState, useEffect, useRef } from 'react';

const LazySection = ({ children, fallback }) => {
  const [hasRendered, setHasRendered] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    // If IntersectionObserver is not supported, just render immediately
    if (!window.IntersectionObserver) {
      setHasRendered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasRendered(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Pre-load 300px before the section enters viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ minHeight: '80vh', width: '100%' }}>
      {hasRendered ? children : fallback}
    </div>
  );
};

export default LazySection;

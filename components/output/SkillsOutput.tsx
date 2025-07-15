import React, { useRef, useEffect, useState } from 'react';
import { SKILLS } from '../../constants';
import { SkillCategory } from '../../types';

const useAnimateOnScroll = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};


const SkillsOutput: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.1 });
  
  return (
    <div ref={ref} className="space-y-8">
      {SKILLS.map((category: SkillCategory, index: number) => (
        <div key={index} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 150}ms` }}>
          <h3 className="text-xl font-bold text-[var(--text-secondary)] mb-4">
            {category.title}
          </h3>
          <div className={`flex flex-wrap gap-3 stagger-children ${isVisible ? 'is-visible' : ''}`}>
            {category.skills.map((skill: string, skillIndex: number) => (
              <span 
                key={skillIndex} 
                className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-[var(--text-primary)] font-medium text-sm px-4 py-2 rounded-md shadow-sm transition-all hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] cursor-default"
                style={{ transitionDelay: `${skillIndex * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsOutput;
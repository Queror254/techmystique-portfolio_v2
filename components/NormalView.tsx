

import React, { useRef, useEffect, useState } from 'react';
import ProjectsOutput from './output/ProjectsOutput';
import SkillsOutput from './output/SkillsOutput';
import ContactOutput from './output/ContactOutput';
import { YOUR_NAME, YOUR_HEADLINE, PROFILE_IMAGE_URL, SOCIAL_LINKS } from '../constants';
import { Project } from '../types';

interface NormalViewProps {
  refs: {
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    skills: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  onOpenProject: (project: Project) => void;
}

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


const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.1 });
    return (
        <div ref={ref} className={`scroll-animate ${isVisible ? 'is-visible' : ''} ${className}`}>
            {children}
        </div>
    );
};


const SectionWrapper: React.FC<{ id: string; title: string; refProp: React.RefObject<HTMLDivElement>; children: React.ReactNode }> = ({ id, title, refProp, children }) => (
    <section id={id} ref={refProp} className="py-16 sm:py-20 scroll-mt-16">
      <AnimatedSection>
        <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-bright)]">{title}</h2>
            <div className="w-20 h-1 bg-[var(--accent-cyan)] mx-auto mt-4 rounded-full"></div>
        </div>
      </AnimatedSection>
        {children}
    </section>
);

const HeroSection: React.FC = () => (
    <div>
        {/* Cover Image */}
        <div className="h-40 sm:h-60 w-full bg-[var(--bg-secondary)]">
             <img
                src="https://github.com/Queror254/Queror254/raw/main/download.gif"
                alt="Developer workspace with code on a laptop screen"
                className="w-full h-full object-cover"
            />
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative text-center -mt-16 sm:-mt-20">
                {/* Profile Image */}
                 <img 
                    src={PROFILE_IMAGE_URL} 
                    alt={YOUR_NAME} 
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-[var(--bg-primary)] shadow-xl animate-slide-in-up"
                    style={{ animationDelay: '100ms' }}
                />
                
                {/* Text Content */}
                <div className="mt-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-bright)] leading-tight animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                        Hi, I'm <span className="text-[var(--accent-cyan)]">{YOUR_NAME}</span>.
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                        {YOUR_HEADLINE}
                    </p>
                    <p className="mt-6 text-base sm:text-lg text-[var(--text-primary)] max-w-3xl mx-auto leading-relaxed animate-slide-in-up" style={{ animationDelay: '400ms' }}>
                        I turn vision into reality with code. Whether I'm working on a website or any digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const AboutSection: React.FC = () => (
  <div className="flex mx-auto max-w-4xl px-4 sm:px-6 md:px-8 lg:px-8 flex-col lg:flex-row md:flex-row items-center md:items-start gap-8">
    <div className="flex flex-row lg:flex-col md:flex-col justify-center items-center gap-8">
      {SOCIAL_LINKS.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={name}
            className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-lg text-[var(--accent-green)] mt-1">@techmystique_</h3>
      <div className="mt-4 space-y-3 text-[var(--text-primary)]">
        <p>
          I am a passionate and results-driven Full-Stack Developer with a knack for building elegant, efficient, and scalable web applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning complex problems into simple, beautiful, and intuitive designs.
        </p>
        <p>
          My journey in tech is fueled by a relentless curiosity and a desire to learn. I'm currently exploring the fascinating world of Artificial Intelligence and Large Language Models, seeking to integrate intelligent features into modern software solutions.
        </p>
      </div>
      
    </div>
  </div>
)


const NormalView: React.FC<NormalViewProps> = ({ refs, onOpenProject }) => {
  return (
    <div className="flex-1 overflow-y-auto terminal-scrollbar bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <HeroSection />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper id="about" title="About Me" refProp={refs.about}>
            <AnimatedSection>
              <AboutSection />
            </AnimatedSection>
        </SectionWrapper>

        <SectionWrapper id="projects" title="Featured Projects" refProp={refs.projects}>
            <ProjectsOutput featuredOnly onOpenProject={onOpenProject} />
            <AnimatedSection>
               <div className="text-center mt-16">
                  <a 
                      href="/#/projects" 
                      className="inline-block px-8 py-3 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg font-semibold text-[var(--accent-cyan)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent-cyan)] transition-all duration-300 transform hover:scale-105"
                  >
                      View All Projects &rarr;
                  </a>
              </div>
            </AnimatedSection>
        </SectionWrapper>
        
        <SectionWrapper id="skills" title="Skills" refProp={refs.skills}>
            <SkillsOutput />
        </SectionWrapper>

        <section id="contact" ref={refs.contact} className="py-16 sm:py-20 scroll-mt-16">
            <AnimatedSection>
              <ContactOutput />
            </AnimatedSection>
        </section>

        <footer className="text-center py-8 text-[var(--text-muted)] border-t border-[var(--border-primary)] mt-16">
          <AnimatedSection>
            <p>&copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.</p>
          </AnimatedSection>
        </footer>
      </div>
    </div>
  );
};

export default NormalView;
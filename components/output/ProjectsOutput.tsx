
import React, { useRef, useEffect, useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project } from '../../types';

interface ProjectsOutputProps {
    isTerminalMode?: boolean;
    featuredOnly?: boolean;
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

const ProjectCard: React.FC<{ project: Project; onOpenProject: (project: Project) => void; style?: React.CSSProperties }> = ({ project, onOpenProject, style }) => {
    return (
        <div style={style} className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden border border-[var(--border-primary)] flex flex-col h-full group transition-all duration-300 hover:border-[var(--accent-cyan)] hover:shadow-2xl hover:-translate-y-1">
            <div className="relative aspect-video overflow-hidden">
                <img 
                    src={project.images[0]} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[var(--text-bright)] mb-2">{project.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-4">
                    {project.stack.slice(0, 4).map(tech => (
                        <span key={tech} className="bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                <button 
                    onClick={() => onOpenProject(project)} 
                    className="w-full mt-2 px-4 py-2 bg-[var(--bg-tertiary)] border border-[var(--border-secondary)] text-[var(--text-primary)] font-semibold rounded-lg hover:bg-[var(--accent-cyan)] hover:text-white hover:border-[var(--accent-cyan)] transition-colors duration-200"
                >
                    View Case Study
                </button>
            </div>
        </div>
    );
}

const TerminalProjectCard: React.FC<{ project: Project; }> = ({ project }) => {
    return (
        <div className="border border-[var(--border-primary)] bg-[var(--bg-secondary)] rounded-lg p-4 mb-6 transition-all duration-300 hover:border-[var(--accent-cyan)]">
            <h3 className="text-xl font-bold text-[var(--accent-green)]">{project.name}</h3>
            <p className="my-2 text-[var(--text-primary)]">{project.description}</p>
            
            <p className="text-sm text-[var(--text-secondary)]">
              View details with: <code className="text-[var(--accent-orange)]">run {project.slug}</code>
            </p>

            <div className="flex flex-wrap gap-2 my-3">
                {project.stack.map(tech => (
                    <span key={tech} className="bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-4">
                {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--accent-yellow)] hover:underline">GitHub Repo</a>}
            </div>
        </div>
    )
}

const ProjectsOutput: React.FC<ProjectsOutputProps> = ({ isTerminalMode, featuredOnly, onOpenProject }) => {
    const projectsToDisplay = featuredOnly ? PROJECTS.filter(p => p.featured) : PROJECTS;
    const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.1 });
    
    if (isTerminalMode) {
        return (
            <div>
                {projectsToDisplay.map((project) => (
                    <TerminalProjectCard key={project.slug} project={project} />
                ))}
            </div>
        );
    }
    
    return (
      <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${isVisible ? 'is-visible' : ''}`}>
        {projectsToDisplay.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            onOpenProject={onOpenProject} 
            style={{ transitionDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
    );
};

export default ProjectsOutput;
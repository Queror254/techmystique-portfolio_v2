
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Project } from '../types';
import { GithubIcon } from '../constants';

const ProjectImageSlider: React.FC<{ images: string[], projectName: string }> = ({ images, projectName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (slideIndex: number) => {
      setCurrentIndex(slideIndex);
  }

  if (!images || images.length === 0) {
    return (
        <div className="relative aspect-video w-full rounded-lg overflow-hidden group bg-[var(--bg-tertiary)] flex items-center justify-center">
            <p className="text-[var(--text-muted)]">No preview available</p>
        </div>
    );
  }

  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden group bg-[var(--bg-tertiary)] shadow-lg">
        <div 
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="w-full h-full bg-center bg-cover duration-500 transition-transform transform group-hover:scale-105"
            role="img"
            aria-label={`${projectName} - Image ${currentIndex + 1} of ${images.length}`}
        ></div>
        
        {images.length > 1 && (
            <>
                <button 
                    onClick={goToPrevious} 
                    className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                
                <button 
                    onClick={goToNext} 
                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, slideIndex) => (
                        <button
                            key={slideIndex}
                            onClick={(e) => { e.stopPropagation(); goToSlide(slideIndex); }}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
                            aria-label={`Go to image ${slideIndex + 1}`}
                        ></button>
                    ))}
                </div>
            </>
        )}
    </div>
  );
};

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ProjectDetailsSidebar: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg p-4">
        <h3 className="text-lg font-semibold text-[var(--text-bright)] border-b border-[var(--border-secondary)] pb-2 mb-4">Project Details</h3>
        
        <h4 className="font-semibold text-[var(--text-secondary)] mb-2">Technology Stack</h4>
        <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map(tech => (
                <span key={tech} className="bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] text-xs font-semibold px-3 py-1.5 rounded-full">{tech}</span>
            ))}
        </div>

        <h4 className="font-semibold text-[var(--text-secondary)] mb-3">Links</h4>
        <div className="space-y-3">
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-[var(--button-primary-bg)] text-white font-bold rounded-md hover:bg-[var(--button-primary-hover-bg)] transition-colors justify-center w-full">
                    <LinkIcon className="w-5 h-5" />
                    <span>Live Demo</span>
                </a>
            )}
            {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 bg-[var(--bg-tertiary)] text-[var(--text-primary)] font-bold rounded-md hover:bg-opacity-80 transition-colors justify-center border border-[var(--border-primary)] w-full">
                    <GithubIcon className="w-5 h-5" />
                    <span>Source Code</span>
                </a>
            )}
        </div>
    </div>
);

interface ProjectDetailModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
        >
            <div 
                className="w-full max-w-6xl h-full max-h-[95vh] bg-[var(--bg-primary)] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-slide-up"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-4 border-b border-[var(--border-primary)] flex-shrink-0 bg-[var(--bg-secondary)]">
                    <div className="flex-1 overflow-hidden">
                        <h2 id="project-title" className="text-xl font-bold text-[var(--text-bright)] truncate">{project.name}</h2>
                        <p className="text-sm text-[var(--text-secondary)] truncate">{project.description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--accent-red)] hover:text-white transition-colors text-2xl"
                        aria-label="Close project details"
                    >
                        &times;
                    </button>
                </header>

                <div className="flex-1 overflow-y-auto terminal-scrollbar">
                     <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                            
                            <div className="lg:col-span-2">
                                <ProjectImageSlider images={project.images} projectName={project.name} />
                                
                                <div className="lg:hidden mt-8">
                                     <ProjectDetailsSidebar project={project} />
                                </div>

                                <div className="mt-8">
                                   <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-bright)] mb-4 border-b border-[var(--border-primary)] pb-3">Case Study</h2>
                                   <div className="prose max-w-none">
                                       <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                           {project.caseStudy}
                                       </ReactMarkdown>
                                   </div>
                                </div>
                            </div>

                            <aside className="hidden lg:block">
                                 <div className="sticky top-6">
                                    <ProjectDetailsSidebar project={project} />
                                 </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .prose { color: var(--text-primary); }
                .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 { color: var(--text-bright); margin-top: 1.25em; margin-bottom: 0.5em; border-bottom: 1px solid var(--border-primary); padding-bottom: 0.3em; }
                .prose p { margin-top: 0.75em; margin-bottom: 0.75em; line-height: 1.7; }
                .prose a { color: var(--accent-cyan); text-decoration: none; border-bottom: 1px dotted var(--accent-cyan); }
                .prose a:hover { color: var(--button-primary-hover-bg); border-bottom: 1px solid var(--button-primary-hover-bg); }
                .prose strong { color: var(--accent-green-light); }
                .prose blockquote { border-left: 3px solid var(--border-secondary); color: var(--text-secondary); padding-left: 1em; margin-left: 0; }
                .prose code { background-color: var(--bg-tertiary-alpha); color: var(--accent-orange); padding: 0.2em 0.4em; margin: 0; font-size: 85%; border-radius: 6px; }
                .prose pre { background-color: var(--bg-tertiary); border: 1px solid var(--border-primary); padding: 1em; border-radius: 8px; overflow-x: auto; }
                .prose pre code { color: var(--text-primary); background-color: transparent; padding: 0; margin: 0; font-size: inherit; border-radius: 0; border: none; }
                .prose ul, .prose ol { padding-left: 1.5em; }
                .prose li { margin-top: 0.5em; margin-bottom: 0.5em; }
                .prose li::marker { color: var(--accent-cyan); }

                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
                @keyframes slide-up { from { opacity: 0; transform: translateY(20px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
                .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default ProjectDetailModal;

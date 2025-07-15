import React from "react";
import { Project } from "../types";
import ProjectsOutput from "./output/ProjectsOutput";
import { YOUR_NAME } from "../constants";

interface AllProjectsPageProps {
  onOpenProject: (project: Project) => void;
}

const AllProjectsPage: React.FC<AllProjectsPageProps> = ({ onOpenProject }) => {
  return (
    <div className="flex-1 overflow-y-auto terminal-scrollbar bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <header
        className="p-4 sm:p-6 border-b border-[var(--border-primary)] bg-[var(--bg-secondary)] animate-slide-in-up"
        style={{ animationDelay: "100ms" }}
      >
        <nav className="text-sm text-[var(--text-secondary)] mb-4">
          <a href="/" className="hover:text-[var(--accent-cyan)]">
            Home
          </a>
          <span className="mx-2">/</span>
          <span className="text-[var(--text-bright)]">Projects</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-bright)]">
          All Projects
        </h1>
        <p className="mt-2 text-lg text-[var(--text-secondary)]">
          A collection of my work, from professional applications to personal
          experiments.
        </p>
      </header>

      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <ProjectsOutput onOpenProject={onOpenProject} />
      </main>

      <footer className="text-center py-8 text-[var(--text-muted)] border-t border-[var(--border-primary)] mt-16">
        <p>
          &copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AllProjectsPage;

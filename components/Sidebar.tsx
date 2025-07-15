import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  FileIcon,
  SOCIAL_LINKS,
  YOUR_EMAIL,
  ControllerIcon,
  PROJECTS,
  YOUR_NAME,
  YOUR_HEADLINE,
} from "../constants";
import { ViewMode, Project } from "../types";

interface SidebarProps {
  executeCommand: (command: string, fromClick: boolean) => void;
  activeCommand: string;
  onClose: () => void;
  activeGame: string | null;
  viewMode: ViewMode;
  onOpenProject: (project: Project) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  executeCommand,
  activeCommand,
  onClose,
  activeGame,
  viewMode,
  onOpenProject,
}) => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    portfolio: true,
    projects: true,
  });

  const toggleFolder = (folder: string) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const mainSections = [
    { name: "about.md", command: "about" },
    { name: "project.md", command: "project" },
    { name: "skills.md", command: "skills" },
    { name: "contact.md", command: "contact" },
  ];

  const handleItemClick = (command: string) => {
    if (viewMode === "terminal") {
      executeCommand(command, true);
    } else {
      window.location.hash = `/${command}`;
    }
    onClose();
  };

  const handleProjectClick = (project: Project) => {
    onOpenProject(project);
    onClose();
  };

  return (
    <div className="font-firacode flex flex-col flex-1 p-3 overflow-y-auto terminal-scrollbar overflow-x-hidden">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-[var(--text-bright)]">
          {YOUR_NAME.split("(")[0]}
        </h1>
        <h2 className="text-lg font-bold text-[var(--text-bright)]">
          ({YOUR_NAME.split("(")[1]}
        </h2>
        <p className="text-sm text-[var(--accent-cyan)]">{YOUR_HEADLINE}</p>
      </div>

      <div className="px-1 py-2 text-xs font-bold tracking-wider text-[var(--text-secondary)] uppercase select-none">
        Explorer
      </div>
      <nav className="space-y-1 flex-1">
        {/* Portfolio Folder */}
        <div>
          <button
            onClick={() => toggleFolder("portfolio")}
            className="w-full flex items-center text-left text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-tertiary-alpha)] p-1 rounded"
          >
            {openFolders["portfolio"] ? (
              <ChevronDownIcon className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 mr-2" />
            )}
            <FolderIcon className="w-5 h-5 mr-2 text-[var(--accent-cyan)]" />
            <span>Portfolio</span>
          </button>
          {openFolders["portfolio"] && (
            <div className="pl-5 space-y-1 border-l border-[var(--border-primary)] ml-3">
              {mainSections.map((section) => {
                const isActive =
                  section.command === activeCommand && viewMode === "terminal";
                return (
                  <a
                    key={section.name}
                    href={`#/${section.command}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(section.command);
                    }}
                    className={`w-full flex items-center text-left text-sm p-1 rounded transition-colors duration-150 ${
                      isActive
                        ? "bg-[var(--bg-tertiary)] text-[var(--text-bright)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-bright)] hover:bg-[var(--bg-tertiary-alpha)]"
                    }`}
                  >
                    <FileIcon className="w-5 h-5 mr-2 text-[var(--text-muted)]" />
                    <span>{section.name}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Folder */}
        <div>
          <button
            onClick={() => toggleFolder("projects")}
            className="w-full flex items-center text-left text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--bg-tertiary-alpha)] p-1 rounded mt-1"
          >
            {openFolders["projects"] ? (
              <ChevronDownIcon className="w-4 h-4 mr-2" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 mr-2" />
            )}
            <FolderIcon className="w-5 h-5 mr-2 text-[var(--accent-orange)]" />
            <span>Projects</span>
          </button>
          {openFolders["projects"] && (
            <div className="pl-5 space-y-1 border-l border-[var(--border-primary)] ml-3">
              <a
                href={`#/projects`}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick("projects");
                }}
                className={`w-full flex items-center text-left text-sm p-1 rounded transition-colors duration-150 text-[var(--text-secondary)] hover:text-[var(--text-bright)] hover:bg-[var(--bg-tertiary-alpha)]`}
              >
                <FileIcon className="w-5 h-5 mr-2 text-[var(--accent-green-light)]" />
                <span>view-all-projects.md</span>
              </a>
              {PROJECTS.map((project) => (
                <a
                  key={project.slug}
                  href={`#`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleProjectClick(project);
                  }}
                  className={`w-full flex items-center text-left text-sm p-1 rounded transition-colors duration-150 text-[var(--text-secondary)] hover:text-[var(--text-bright)] hover:bg-[var(--bg-tertiary-alpha)]`}
                >
                  <FileIcon className="w-5 h-5 mr-2 text-[var(--text-muted)]" />
                  <span className="truncate">{project.name}.jsx</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-2 px-1 py-2 text-xs font-bold tracking-wider text-[var(--text-secondary)] uppercase select-none">
          Games
        </div>
        <nav className="space-y-1">
          <a
            href="#/play/tictactoe"
            onClick={(e) => {
              e.preventDefault();
              executeCommand("play tictactoe", true);
              onClose();
            }}
            className={`w-full flex items-center text-left text-sm p-1 rounded transition-colors duration-150 ${
              activeGame === "tictactoe" && viewMode === "game"
                ? "bg-[var(--bg-tertiary)] text-[var(--text-bright)]"
                : "text-[var(--text-secondary)] hover:text-[var(--text-bright)] hover:bg-[var(--bg-tertiary-alpha)]"
            }`}
          >
            <ControllerIcon className="w-5 h-5 mr-2 text-[var(--accent-green)]" />
            <span>tictactoe.jsx</span>
          </a>
        </nav>
      </nav>

      <div className="mt-auto pt-6 border-t border-[var(--border-primary)]">
        <div className="flex justify-center items-center gap-5 mb-4">
          {SOCIAL_LINKS.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <a
          href={`mailto:${YOUR_EMAIL}`}
          className="block text-center text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors duration-200 truncate"
          title={`Email ${YOUR_EMAIL}`}
        >
          {YOUR_EMAIL}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

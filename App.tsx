import React, {
  useState,
  useCallback,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";
import NormalView from "./components/NormalView";
import {
  YOUR_NAME,
  YOUR_HEADLINE,
  PROJECTS,
  THEMES,
  EnvelopeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  YOUR_EMAIL,
} from "./constants";
import WelcomeOutput from "./components/output/WelcomeOutput";
import HelpOutput from "./components/output/HelpOutput";
import AboutOutput from "./components/output/AboutOutput";
import ProjectsOutput from "./components/output/ProjectsOutput";
import SkillsOutput from "./components/output/SkillsOutput";
import NotFoundOutput from "./components/output/NotFoundOutput";
import HistoryOutput from "./components/output/HistoryOutput";
import CowsayOutput from "./components/output/CowsayOutput";
import { Project, ViewMode } from "./types";
import TopBar from "./components/TopBar";
import AskOutput from "./components/output/AskOutput";
import GameView from "./components/GameView";
import ProjectDetailModal from "./components/ProjectDetailModal";
import AllProjectsPage from "./components/AllProjectsPage";

interface HistoryItem {
  command: string;
  output: ReactNode;
}

const SidebarToggleButton: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      title={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      className={`
                lg:flex fixed top-10 z-40 items-center justify-center 
                w-6 h-10 bg-[var(--bg-secondary)] text-[var(--text-secondary)] 
                border-y border-r border-[var(--border-primary)] rounded-r-lg 
                hover:bg-[var(--bg-tertiary)] 
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-72" : "translate-x-0"}
            `}
    >
      {isOpen ? (
        <ChevronLeftIcon className="w-5 h-5" />
      ) : (
        <ChevronRightIcon className="w-5 h-5" />
      )}
    </button>
  );
};

const App: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "init",
      output: (
        <WelcomeOutput executeCommand={(cmd) => executeCommand(cmd, true)} />
      ),
    },
  ]);
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeCommand, setActiveCommand] = useState("init");
  const [viewMode, setViewMode] = useState<ViewMode>("normal");
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [activeNormalPage, setActiveNormalPage] = useState<
    "home" | "all-projects"
  >("home");

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const isTerminalMode = viewMode === "terminal";

  const handleOpenProject = (project: Project) => {
    setOpenProject(project);
  };

  const handleCloseProject = () => {
    setOpenProject(null);
  };

  const handleNavigation = useCallback((section: string) => {
    if (section in sectionRefs) {
      sectionRefs[section as keyof typeof sectionRefs]?.current?.scrollIntoView(
        { behavior: "smooth" }
      );
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      // Use lg breakpoint for initial state
      setIsSidebarOpen(false);
    }
    const savedTheme = localStorage.getItem("portfolio-theme") || "default";
    document.body.setAttribute("data-theme", savedTheme);

    const savedViewMode = localStorage.getItem(
      "portfolio-view-mode"
    ) as ViewMode | null;
    setViewMode(savedViewMode || "normal");
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.replace(/^#\/?/, "");

      if (viewMode === "normal") {
        if (path === "projects") {
          setActiveNormalPage("all-projects");
        } else if (["about", "skills", "contact"].includes(path)) {
          setActiveNormalPage("home");
          setTimeout(() => handleNavigation(path), 50);
        } else {
          setActiveNormalPage("home");
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial call

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [viewMode, handleNavigation]);

  useEffect(() => {
    let title = `${YOUR_NAME} - Portfolio`;
    if (viewMode === "normal") {
      if (activeNormalPage === "all-projects") {
        title = `All Projects | ${YOUR_NAME}`;
      } else {
        title = `${YOUR_NAME} - ${YOUR_HEADLINE}`;
      }
    } else if (viewMode === "game" && activeGame) {
      const gameName = activeGame.charAt(0).toUpperCase() + activeGame.slice(1);
      title = `${gameName} Game | ${YOUR_NAME}`;
    } else {
      // terminal view
      switch (activeCommand) {
        case "init":
          title = `Welcome | ${YOUR_NAME}`;
          break;
        case "about":
          title = `About Me | ${YOUR_NAME}`;
          break;
        case "projects":
          title = `My Projects | ${YOUR_NAME}`;
          break;
        case "skills":
          title = `My Skills | ${YOUR_NAME}`;
          break;
        case "contact":
          title = `Contact Me | ${YOUR_NAME}`;
          break;
        default:
          title = `Terminal | ${YOUR_NAME}`;
          break;
      }
    }
    document.title = title;
  }, [viewMode, activeCommand, activeGame, activeNormalPage]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 1024) {
      // Use lg breakpoint
      setIsSidebarOpen(false);
    }
  };

  const setView = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem("portfolio-view-mode", mode);
    if (mode !== "game") {
      setActiveGame(null);
    }
    closeSidebar();
  };

  const toggleViewMode = () => {
    const newMode = isTerminalMode ? "normal" : "terminal";
    setView(newMode);
  };

  const executeCommand = useCallback(
    (command: string, fromClick: boolean = false) => {
      if (isProcessing) return;
      const trimmedCommand = command.trim();

      if (!trimmedCommand) return;

      setIsProcessing(true);
      setCommandLog((prev) => [...prev, trimmedCommand]);

      if (!fromClick) {
        setHistory((prev) => [
          ...prev,
          { command: trimmedCommand, output: null },
        ]);
      }

      setTimeout(() => {
        let output: ReactNode;
        let commandHandled = true;
        const args = trimmedCommand.toLowerCase().split(" ");
        const cmd = args[0];

        switch (cmd) {
          case "help":
            output = <HelpOutput />;
            break;
          case "about":
          case "skills":
          case "contact":
          case "project":
          case "projects":
            if (fromClick) {
              if (isTerminalMode) {
                // In terminal mode, just execute the command and update history, don't change hash
                setHistory((prev) => [...prev, { command: cmd, output: null }]);
                // Continue to process output below
              } else {
                window.location.hash = `/${cmd}`;
                closeSidebar();
                setIsProcessing(false);
                return;
              }
            }
            switch (cmd) {
              case "about":
                output = <AboutOutput />;
                break;
              case "skills":
                output = <SkillsOutput />;
                break;
              case "project":
              case "projects":
                output = (
                  <ProjectsOutput
                    isTerminalMode={true}
                    onOpenProject={handleOpenProject}
                  />
                );
                break;
              case "contact":
                output = (
                  <div>
                    <p className="mb-2">
                      Feel free to reach out! You can email me directly at:
                    </p>
                    <a
                      href={`mailto:${YOUR_EMAIL}`}
                      className="text-[var(--accent-cyan)] hover:underline font-bold"
                    >
                      {YOUR_EMAIL}
                    </a>
                  </div>
                );
                break;
            }
            break;
          case "clear":
            setHistory([
              {
                command: "init",
                output: (
                  <WelcomeOutput
                    executeCommand={(cmd) => executeCommand(cmd, true)}
                  />
                ),
              },
            ]);
            setActiveCommand("init");
            setIsProcessing(false);
            return;
          case "history":
            output = <HistoryOutput log={commandLog} />;
            break;
          case "cowsay":
            const message =
              command.substring("cowsay".length).trim() || "Moo-ve along!";
            output = <CowsayOutput message={message} />;
            break;
          case "ask":
            output = (
              <AskOutput prompt={command.substring("ask".length).trim()} />
            );
            break;
          case "play":
            const gameName = args[1];
            if (gameName === "tictactoe") {
              setView("game");
              setActiveGame("tictactoe");
              output = <p>Launching Tic-Tac-Toe...</p>;
            } else {
              output = (
                <div>
                  <p>Which game would you like to play?</p>
                  <p>
                    Available games:{" "}
                    <span className="text-[var(--accent-cyan)]">tictactoe</span>
                  </p>
                  <p>Usage: play {"<game_name>"}</p>
                </div>
              );
            }
            break;
          case "run":
            const projectToRun = PROJECTS.find((p) => p.slug === args[1]);
            if (projectToRun) {
              handleOpenProject(projectToRun);
              output = (
                <p>
                  Opening project details for:{" "}
                  <span className="font-bold text-[var(--accent-green-light)]">
                    {projectToRun.name}
                  </span>
                  ...
                </p>
              );
            } else {
              output = (
                <p className="text-[var(--accent-red)]">
                  Error: Project '{args[1]}' not found.
                </p>
              );
            }
            break;
          case "theme":
            const subCmd = args[1],
              themeName = args[2];
            if (subCmd === "set" && themeName && THEMES.includes(themeName)) {
              document.body.setAttribute("data-theme", themeName);
              localStorage.setItem("portfolio-theme", themeName);
              output = (
                <p>
                  Theme set to{" "}
                  <span className="font-bold text-[var(--accent-cyan)]">
                    {themeName}
                  </span>
                </p>
              );
            } else if (subCmd === "list") {
              output = (
                <div>
                  <p>Available themes:</p>
                  <ul className="list-disc list-inside">
                    {THEMES.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              output = (
                <p className="text-[var(--accent-red)]">
                  Usage: theme [set|list] {"<theme_name>"}
                </p>
              );
            }
            break;
          case "view":
            if (args[1] === "normal") {
              setView("normal");
              output = <p>Switching to normal view...</p>;
            } else if (args[1] === "terminal") {
              setView("terminal");
              output = <p>Switching to terminal view...</p>;
            } else {
              output = (
                <p className="text-[var(--accent-red)]">
                  Usage: view [normal|terminal]
                </p>
              );
            }
            break;
          case "ls":
            output = <HelpOutput />;
            break;
          default:
            commandHandled = false;
            output = <NotFoundOutput command={command} />;
            break;
        }

        if (
          fromClick &&
          !["about", "skills", "contact", "projects"].includes(cmd)
        )
          setView("terminal");

        setActiveCommand(commandHandled ? cmd : "not-found");

        setHistory((prev) => {
          const newHistory = [...prev];
          if (fromClick && cmd !== "play") {
            const commandToLog = cmd === "run" ? `${cmd} ${args[1]}` : cmd;
            return [...newHistory, { command: commandToLog, output }];
          }
          if (newHistory.length > 0) {
            newHistory[newHistory.length - 1].output = output;
          }
          return newHistory;
        });

        setIsProcessing(false);
      }, 300);
    },
    [history, isProcessing, commandLog, viewMode]
  );

  const renderContent = () => {
    if (viewMode === "normal") {
      if (activeNormalPage === "all-projects") {
        return <AllProjectsPage onOpenProject={handleOpenProject} />;
      }
      return (
        <NormalView refs={sectionRefs} onOpenProject={handleOpenProject} />
      );
    }
    if (viewMode === "terminal") {
      return (
        <Terminal
          history={history}
          onCommand={executeCommand}
          isProcessing={isProcessing}
        />
      );
    }
    if (viewMode === "game") {
      return (
        <GameView activeGame={activeGame} onExit={() => setView("terminal")} />
      );
    }
    return null;
  };

  return (
    <>
      <div
        className={`flex flex-col h-screen antialiased ${
          isTerminalMode ? "font-firacode" : ""
        }`}
      >
        <TopBar
          activeCommand={activeCommand}
          isTerminalMode={isTerminalMode}
          onToggle={toggleViewMode}
          onToggleSidebar={toggleSidebar}
          activeGame={activeGame}
          viewMode={viewMode}
        />
        <div className="flex flex-1 overflow-hidden">
          {isSidebarOpen && window.innerWidth < 1024 && (
            <div
              onClick={closeSidebar}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
              aria-hidden="true"
            ></div>
          )}

          <SidebarToggleButton
            isOpen={isSidebarOpen}
            onToggle={toggleSidebar}
          />

          <aside
            className={`
                flex-shrink-0
                bg-[var(--bg-secondary)] border-r border-[var(--border-primary)]
                flex flex-col h-full
                transition-all duration-300 ease-in-out
                fixed w-72 z-30
                lg:relative lg:w-72 lg:translate-x-0 lg:overflow-hidden
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                ${isSidebarOpen ? "lg:w-72" : "lg:w-0"}
            `}
          >
            <Sidebar
              executeCommand={executeCommand}
              activeCommand={activeCommand}
              onClose={closeSidebar}
              activeGame={activeGame}
              viewMode={viewMode}
              onOpenProject={handleOpenProject}
            />
          </aside>

          <main
            className={`flex-1 flex flex-col bg-[var(--bg-primary)] overflow-hidden relative transition-all duration-300 ease-in-out ${
              isSidebarOpen && window.innerWidth >= 1024 ? "lg:ml-0" : "lg:ml-0"
            }`}
          >
            {renderContent()}
          </main>
        </div>
      </div>

      {viewMode === "normal" && (
        <button
          onClick={() => {
            setActiveNormalPage("home");
            setTimeout(() => (window.location.hash = "/contact"), 0);
          }}
          title="Contact Me"
          className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--accent-cyan)] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[var(--button-primary-hover-bg)] transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Contact Me"
        >
          <EnvelopeIcon className="w-7 h-7" />
        </button>
      )}

      {openProject && (
        <ProjectDetailModal
          project={openProject}
          onClose={handleCloseProject}
        />
      )}
    </>
  );
};

export default App;

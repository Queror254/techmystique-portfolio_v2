import React from "react";
import { Project, SkillCategory } from "./types";

export const ChevronRightIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const FolderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

export const FileIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

export const ControllerIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.25 7.5h-6.5a1 1 0 00-1 1v6.5a1 1 0 001 1h6.5a1 1 0 001-1v-6.5a1 1 0 00-1-1z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 10.5h.01M8.5 13.5h.01M11.5 12h.01M14.5 10.5h.01M14.5 13.5h.01M7.5 17.5l-1-1"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.5l1 1" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 19a4 4 0 01-7-2.646M6 5a4 4 0 017 2.646"
    />
  </svg>
);

export const TerminalIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 9l3 3-3 3m5 0h3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
    />
  </svg>
);

export const LayoutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 12h16"
    />
  </svg>
);

export const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.78-1.75-1.75S5.53 3.23 6.5 3.23c.97 0 1.75.78 1.75 1.75S7.47 6.73 6.5 6.73zM19 19h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94V19h-3V8h2.88v1.34h.04c.4-.76 1.38-1.55 2.84-1.55 3.03 0 3.59 1.99 3.59 4.58V19z" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const EnvelopeIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3ZM1.5 7.01v12.24c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.01L12.012 13.9a.75.75 0 0 1-.92-..011L1.5 7.01ZM22.5 4.509l-10.49 6.811a.25.25 0 0 1-.31.001L1.5 4.51v-.259a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v.258Z" />
  </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402a3.75 3.75 0 00-5.304-5.304L4.098 14.6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12.572l-4.5-4.5a2.25 2.25 0 00-3.182 0l-1.262 1.262M19.5 12.572l-4.5 4.5a2.25 2.25 0 01-3.182 0l-1.262-1.262"
    />
  </svg>
);

export const PROJECTS: Project[] = [
  {
    name: "Interactive Terminal Portfolio",
    slug: "interactive-terminal-portfolio",
    description:
      "This very website! A portfolio inspired by the VS Code editor, featuring an interactive terminal, themes, AI integration, and even games. Built with React, TypeScript, and Tailwind CSS.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Gemini API"],
    liveUrl: "https://techmystique.vercel.app/",
    repoUrl: "https://github.com/Queror254/interactive-terminal-portfolio",
    images: [
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/249798/pexels-photo-249798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    featured: true,
    caseStudy: `
### Project Goal
The primary goal was to design and build a personal portfolio that would be memorable and stand out from traditional, static websites. I wanted to create an immersive experience that not only showcases my projects and skills but also reflects my identity as a developer who loves building interactive and engaging tools. The core idea was to merge the clean aesthetics of a modern graphical UI with the power and familiarity of a command-line interface.

### Technical & Design Challenges

1.  **Building a Realistic Terminal**: Creating a fake terminal in React that accurately handles user input, command history, output rendering, and asynchronous operations (like API calls) was the biggest challenge. It required careful state management to keep the UI responsive and avoid race conditions.

2.  **Dual-View State Management**: Managing the application's state across two fundamentally different views ('normal' and 'terminal') was complex. The state needed to be consistent, whether a user was navigating via a terminal command or a UI button. This included managing the active section, theme, and project details.

3.  **Seamless Theming Engine**: Implementing a theming system that felt instantaneous and persisted across sessions required using CSS variables and \`localStorage\`. The challenge was to define theme palettes that were both aesthetically pleasing and maintained readability across all components.

4.  **Responsive Hybrid Sidebar**: Designing a sidebar that functions as a sliding overlay on mobile/tablet and a "push" container on desktop required careful use of responsive CSS classes and JavaScript to manage its state and behavior based on screen size.

### My Solution & Architectural Decisions

-   **Component-Based Architecture**: I used **React** to break down the complex UI into manageable, reusable components like \`Terminal\`, \`Sidebar\`, \`ProjectsOutput\`, and various command outputs. This made the codebase clean and easy to maintain.

-   **Centralized State Management**: Most of the global state (view mode, command history, active theme) is managed in the root \`App.tsx\` component using React Hooks (\`useState\`, \`useEffect\`). This provides a single source of truth and simplifies data flow.

-   **Interactive Command Parser**: A \`switch\` statement in \`App.tsx\` acts as a simple but effective command parser. It handles different commands, manages their output, and updates the application's history and state accordingly.

-   **Client-Side API Integration**: The \`ask\` command integrates with the **Google Gemini API** directly on the client side. This demonstrates the ability to work with external services, handle asynchronous operations, and render the results in a structured format using \`ReactMarkdown\`.

### Key Learnings
This project was an incredible learning experience. I gained a deeper understanding of advanced React concepts, particularly state management in complex applications. It taught me the importance of a well-defined component structure and the nuances of creating a fully responsive and interactive user experience from the ground up. Integrating the Gemini API also provided valuable insights into client-side API security and asynchronous data handling.
`,
  },
  {
    name: "QuantumLeap AI",
    slug: "quantumleap-ai",
    description:
      "A cutting-edge machine learning platform for predictive analytics, featuring a serverless architecture for scalability and real-time data processing pipelines.",
    stack: ["React", "TypeScript", "Node.js", "AWS Lambda", "DynamoDB"],
    liveUrl: "https://react.dev/",
    repoUrl: "#",
    images: [
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    featured: true,
    caseStudy: `
### The Challenge
The objective was to build a highly scalable, cost-effective platform for running predictive analytics models. Traditional server-based architectures would be expensive to maintain and difficult to scale on demand. The challenge was to design a system that could handle sporadic, high-intensity workloads for data processing and model inference without incurring high idle costs.

### The Solution
I architected and developed a fully serverless platform using AWS Lambda for compute and DynamoDB for data storage. This approach ensures that we only pay for the compute time we actually use, and it scales automatically with the number of requests.

### Key Features
- **Serverless Architecture**: Core logic deployed as AWS Lambda functions, triggered by API Gateway endpoints or S3 events.
- **Real-Time Data Ingestion**: A data pipeline that processes and stores incoming data in near real-time.
- **On-Demand Predictions**: A REST API that allows users to submit data and receive predictions from trained machine learning models instantly.
- **Scalability & Cost-Efficiency**: The platform can handle thousands of concurrent requests and scales down to zero when not in use, optimizing costs significantly.
`,
  },
  {
    name: "Project Nebula",
    slug: "project-nebula",
    description:
      "An interactive data visualization tool for astronomical data, built with D3.js and React. Allows users to explore star clusters and nebulae in a 3D space.",
    stack: ["React", "D3.js", "Three.js", "TailwindCSS"],
    liveUrl: "https://threejs.org/",
    repoUrl: "#",
    images: [
      "https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    featured: true,
    caseStudy: `
### The Challenge
Astronomical datasets are vast and multi-dimensional, making them difficult to comprehend through static charts and tables. The goal of Project Nebula was to create an intuitive and interactive tool that allows both researchers and enthusiasts to visualize and explore celestial objects in a more engaging way.

### The Solution
I leveraged the power of **Three.js** for 3D rendering and **D3.js** for data binding and scaling to build a web-based 3D visualization. The application loads astronomical data (e.g., star positions, magnitudes, colors) and renders it in a navigable 3D space.

### Key Features
- **3D Space Navigation**: Users can pan, zoom, and rotate the camera to explore the starfield from any angle.
- **Interactive Data Points**: Clicking on a star reveals a popover with detailed information, such as its name, spectral type, and distance from Earth.
- **Data Filtering**: Controls to filter the dataset based on various parameters (e.g., star magnitude, constellation) to reduce clutter and focus on specific objects.
- **Performance Optimization**: Implemented techniques like object instancing and level-of-detail to ensure smooth rendering of thousands of objects in the browser.
`,
  },
  {
    name: "CodeSphere IDE",
    slug: "codesphere-ide",
    description:
      "A collaborative, cloud-based IDE for real-time pair programming, featuring a shared terminal, code editor, and file system, all running in the browser.",
    stack: ["NestJS", "React", "WebSockets", "Docker", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
    images: [
      "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&d-pr=1",
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&d-pr=1",
    ],
    featured: true,
    caseStudy: `
### The Challenge
Remote collaboration on code can be clunky, often relying on screen sharing or frequent git pushes. The challenge was to build a seamless, real-time collaborative coding environment that mimics the experience of sitting side-by-side with another developer.

### The Solution
I developed a full-stack application using NestJS for the backend and React for the frontend. WebSockets were used for all real-time communication, including synchronized text editing, terminal I/O, and file system changes. Each user session is isolated within a Docker container on the backend, providing a secure and independent workspace.

### Key Features
- **Real-time Collaborative Editor**: Multiple users can edit the same file simultaneously, with changes reflected instantly for everyone.
- **Shared Terminal**: A fully interactive terminal that all participants in a session can see and use.
- **Virtual File System**: A simple file explorer that allows users to create, rename, and delete files and folders, with changes synced in real-time.
- **Dockerized Workspaces**: Each coding session is sandboxed in its own Docker container for security and isolation.
`,
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Redux",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "Laravel",
      "AdonisJS",
      "Django",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "CI/CD", "Agile/Scrum", "TDD", "System Design"],
  },
];

export const THEMES = [
  "default",
  "solarized-light",
  "matrix",
  "nord",
  "gruvbox-dark",
];

export const PROFILE_IMAGE_URL =
  "https://avatars.githubusercontent.com/u/126842172?v=4";

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Queror254",
    Icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    Icon: LinkedinIcon,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/your-profile",
    Icon: TwitterIcon,
  },
];

export const YOUR_NAME = "Victor Mwenda (TechMystique)";
export const YOUR_HEADLINE = "Full-Stack Developer & AI Enthusiast";
export const YOUR_EMAIL = " techmystique.int@gmail.com";

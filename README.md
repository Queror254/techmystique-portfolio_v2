### The second version of my techmystique-portfolio

# techmystique-portfolio-v2 - Interactive Terminal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://techmystique.vercel.app/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, open-source developer portfolio that blends the aesthetics of a code editor and an interactive terminal. Built with React, TypeScript, and Tailwind CSS, and powered by the Google Gemini API.

![Portfolio Showcase GIF](https://github.com/Queror254/Queror254/raw/main/download.gif)

## ✨ Features

- **Dual-View Interface**: Seamlessly switch between a modern, graphical "Normal View" and a fully interactive "Terminal View".
- **Interactive Terminal**: Features a custom command-line interface with command history, tab-completion hints, and a variety of built-in commands.
- **AI Integration**: Use the `ask` command to interact directly with Google's Gemini API.
- **VS Code "Explorer" Sidebar**: A familiar, file-tree-based navigation system for a true developer experience.
- **Theming Engine**: Comes with multiple pre-built themes (including Default, Solarized Light, Matrix, Nord, and Gruvbox) that persist across sessions.
- **Fully Responsive**: Designed to look and work beautifully on all devices, from mobile phones to desktops.
- **Embedded Games**: Includes a playable Tic-Tac-Toe game to add a fun, interactive element.
- **Showcase Your Work**: A clean, modern layout to display your projects, skills, and professional summary.

## 🚀 Getting Started

This project is built with modern web technologies but without a complex build setup, making it easy to run locally.

### Prerequisites

- A modern web browser.
- A local web server. The easiest way is to use a VS Code extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or run `python -m http.server` from the project directory.

### Local Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Queror254/interactive-terminal-portfolio.git
    cd interactive-terminal-portfolio
    ```

2.  **Set up the Gemini API Key (Optional):**
    The `ask` command requires a Google Gemini API key. This project is configured to use an environment variable `API_KEY`. For local development in a static setup, you can temporarily modify `components/output/AskOutput.tsx`:

    - Find the line: `const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });`
    - Replace `process.env.API_KEY` with your actual API key string for testing.
    - **Important**: Do not commit your API key to your repository!

3.  **Run the application:**
    - If using VS Code's Live Server, right-click `index.html` and select "Open with Live Server".
    - If using Python, run `python -m http.server` and open `http://localhost:8000` in your browser.

## 💻 Available Commands

The terminal supports the following commands:

| Command          | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| `about`          | Display my professional summary.                                |
| `ask <question>` | Ask the AI anything (e.g., `ask What is React?`).               |
| `clear`          | Clear the terminal history.                                     |
| `contact`        | Show contact information.                                       |
| `cowsay <msg>`   | An ASCII cow will say your message.                             |
| `help`           | Display this list of commands.                                  |
| `history`        | Show command history.                                           |
| `play <game>`    | Launch a game. Try `play tictactoe`.                            |
| `projects`       | Showcase my recent projects.                                    |
| `run <slug>`     | Open the case study for a project (e.g., `run project-nebula`). |
| `skills`         | List my technical skills.                                       |
| `theme <cmd>`    | Change theme. Use `theme list` or `theme set <name>`.           |
| `view <mode>`    | Change view. Use `view normal` or `view terminal`.              |

## 🎨 Customization

It's easy to make this portfolio your own! All personal data is centralized in `constants.tsx`.

1.  **Update Your Information**:

    - Open `constants.tsx`.
    - Change the values for `YOUR_NAME`, `YOUR_HEADLINE`, `YOUR_EMAIL`, `PROFILE_IMAGE_URL`, and `SOCIAL_LINKS`.

2.  **Add Your Projects and Skills**:

    - In the same file (`constants.tsx`), edit the `PROJECTS` and `SKILLS` arrays to reflect your own work and expertise.
    - For projects, make sure to update the `caseStudy` with your own detailed write-up.

3.  **Customize Themes**:
    - Open `index.html`.
    - Find the `<style>` block and modify the CSS variables for any of the `[data-theme]` attributes to match your desired color palette.

## 📜 License

This project is licensed under the MIT License.

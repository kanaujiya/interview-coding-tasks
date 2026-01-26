# React Interview Coding Tasks & Playground

A comprehensive collection of React coding tasks, interview questions, and UI components. This project is built to demonstrate best practices in React development, including state management, custom hooks, routing, and performance optimization.

## 🚀 Live Demo

[Live Deployment on Vercel](https://your-vercel-link-here.vercel.app)

## ✨ Features

- **Component Playground**: Experience 20+ interactive React tasks ranging from simple counters to complex file explorers.
- **Code Explorer**: View the source code for each task directly within the application with syntax highlighting.
- **State Management**: Examples using React State, Redux Toolkit, and Custom Hooks.
- **Responsive Design**: Built with React Bootstrap and custom CSS for a premium feel.
- **Production Ready**: Optimized with code splitting, lazy loading, and professional routing.

## 🛠️ Tech Stack

- **Core**: React 19, React Router 7
- **State**: Redux Toolkit
- **Styling**: Bootstrap 5, React Bootstrap, Vanilla CSS
- **APIs**: Axios for data fetching
- **Utilities**: React Syntax Highlighter

## 🏁 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kanaujiya/interview-coding-tasks.git
   ```
2. Navigate to the project directory:
   ```bash
   cd interview-coding-tasks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:

```bash
npm start
```

This runs a custom sync script to generate a manifest of all components and then starts the React development server.

## 📦 Deployment

This project is configured for deployment on **Vercel**.

### Configuration

- `vercel.json`: Handles SPA routing to ensure page refreshes work correctly.
- `package.json`: Specifies Node.js engine and deployment scripts.

### Steps to Deploy

1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Vercel will automatically detect the settings. Ensure the **Build Command** is `npm run build` and **Output Directory** is `build`.
4. Deploy!

## 📂 Folder Structure

- `src/components/`: Individual task components.
- `src/config/`: Configuration for tasks and routes.
- `src/layout/`: Global layout components (Sidebar, Navbar).
- `src/pages/`: Main entry pages (Dashboard).
- `public/code/`: Synced source code for live viewing.
- `scripts/`: Utility scripts for build/sync.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

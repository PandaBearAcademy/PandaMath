# PandaMath

PandaMath is a React-based competitive math practice experience. It provides a navigable interface for quick math challenges, puzzle modes, structured courses, and grade-based learning through Panda Academy.

The project is currently a frontend prototype built with React and Vite. The screens and navigation are in place, while authentication, gameplay, profiles, leaderboards, friends, and progress tracking are not connected to a backend yet.

## Features

- Welcome screen for the PandaMath experience
- Dashboard with Play, Puzzles, Leaderboard, and Friends entry points
- Panda Academy grade selection from Grade 3 through Grade 12
- Training modes for Streak, Timed, and PvP practice
- Practice areas including integrals, quadratics, and trigonometry
- Course catalog covering elementary math through abstract algebra
- Sign-in and sign-up UI with email, password, Google, and Facebook options
- Client-side navigation between the available screens

## Tech Stack

- React 19
- React Router 7
- Vite 8
- ESLint 10
+-- README.md
	│   ├── Modules/             Feature modules such as sign-in
	+-- public/                 Static public assets
	+-- src/
	|   +-- Components/         Main application screens and shared UI
	|   |   +-- Academy.jsx
	|   |   +-- Default.jsx
	|   |   +-- Home.jsx
	|   |   +-- Sidebar.jsx
	|   |   `-- Training.jsx
	|   +-- Modules/             Feature modules such as sign-in
	|   +-- css/                 Component styles
	|   +-- App.jsx              Application shell
	|   `-- main.jsx             React entry point and route configuration
	+-- package.json
	`-- vite.config.js
	│   ├── css/                 Component styles
	│   ├── App.jsx              Application shell
	│   └── main.jsx             React entry point and route configuration
	├── package.json
	└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run

```bash
cd Frontend
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

## Available Scripts

Run these commands from the `Frontend` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the frontend source |

## Routes

| Route | Screen |
| --- | --- |
| `/` | Welcome screen |
| `/home` | User dashboard |
| `/academy` | Panda Academy grade selection |
| `/training` | Training modes and courses |
| `/sign-in` | Sign-in and sign-up form |

## Development Notes

The application uses React Router for client-side navigation. The sidebar is shown on the main application routes, while the sign-in screen has its own layout. Several dashboard controls are presentational placeholders until their corresponding gameplay and account services are implemented.

## Validation

Before opening a pull request, run:

```bash
npm run lint
npm run build
```

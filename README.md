# 🍻 Lily Pub - Website Demo

A modern website demo for a pub business, featuring an interactive menu (drinks & food), contact information, location details, and essential business highlights.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) - Fast, content-focused web framework with optimal performance and great developer experience.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Modern utility-first CSS styling using `@tailwindcss/vite`.
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - High-performance icon management.
- **Testing:** [Playwright](https://playwright.dev/) - End-to-end and component reliability testing.
- **Linting & Formatting:** ESLint & Prettier - Enforcing consistent code standards and quality.

## 📁 Project Structure

```text
├── public/             # Static assets
│   ├── fonts/          # Custom web fonts
│   └── media/          # Project media
├── src/
│   ├── assets/         # Optimizable Assets
│   │   └── imgs/
│   ├── components/     # Reusable UI components
│   │   ├── atoms/
│   │   ├── molecules/
│   │   └── organisms/
│   ├── data/           # Important web info (menu items, pub info, etc.)
│   ├── icons/          # Custom SVG icons
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site routes and views
│   ├── styles/         # Global CSS and Tailwind directives
│   └── utils/          # Reusable functions
├── tests/              # Page and feature tests
├── package.json        # Project metadata and dependencies
└── astro.config.mjs    # Astro configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed:

- **Node.js:** `>=22.12.0`

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:jairo-cereceda/lily-pub.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd lily-pub
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser to view the site.

## 📜 Available Scripts

| Script            | Description                            |
| :---------------- | :------------------------------------- |
| `npm run dev`     | Starts the local development server.   |
| `npm run build`   | Builds the site for production.        |
| `npm run preview` | Previews the production build locally. |
| `npm run lint`    | Runs ESLint to check for code issues.  |
| `npm run format`  | Formats code using Prettier.           |
| `npm run test`    | Runs tests using Playwright.           |

## 🌐 Deployment (Vercel)

> This site is deployed and hosted on [Vercel](https://lily-pub.vercel.app/).

## ✒️ Author

**Jairo Cereceda Berciano**

- **GitHub:** [@jairo-cereceda](https://github.com/jairo-cereceda)
- **LinkedIn:** [Jairo Cereceda Berciano](https://www.linkedin.com/in/jairo-cereceda-berciano/)

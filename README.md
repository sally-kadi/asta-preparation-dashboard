# Asta's Preparation Dashboard

A responsive preparation dashboard built with Next.js, TypeScript, and Tailwind CSS.

## Features

- View three preparation tasks.
- Mark tasks as complete or undo completion.
- Track completed tasks and overall progress percentage.
- View task priorities and preparation status.
- Responsive layout for desktop and mobile.

## Preparation Tasks

1. **Sword Control** — Practise precise anti-magic sword movements. (High)
2. **Physical Endurance** — Complete a focused strength and stamina session. (Medium)
3. **Team Coordination** — Review a preparation plan with the Black Bulls. (High)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Progress Calculation

Progress is calculated from completed tasks:

- 0 of 3 tasks = 0%
- 1 of 3 tasks = 33%
- 2 of 3 tasks = 67%
- 3 of 3 tasks = 100%

Progress represents preparation completion, not the probability of winning.

## Notes

Task completion is stored in the current page session and resets when the page is refreshed.

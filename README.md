# Mini Movie Explorer – React + Design Live Coding Challenge

## Overview
This is a **45-minute live coding** exercise designed to evaluate your skills in **React**, **UI design**, and **front-end problem solving**.

You will build a small, single-page application called **Mini Movie Explorer** using the provided dataset and requirements.

---

## Goal
Create a responsive, accessible movie listing page with search, filter, and sort capabilities, plus a detail view for each movie.

---

## Requirements

### Core Features
1. **Responsive card grid**
   - 2 columns on small screens (<640px)
   - 4 columns on large screens (≥1024px)

2. **Search by title**
   - Text input that filters movies by title (case-insensitive)
   - Apply a debounce (~300ms) before filtering

3. **Filter by minimum rating**
   - Dropdown: `All`, `6+`, `7+`, `8+`

4. **Sort**
   - Dropdown:
     - Title A–Z
     - Rating high → low
     - Year new → old

5. **Movie details panel**
   - Open when a movie card is clicked
   - Modal on desktop, full-width drawer on mobile
   - Shows title, year, rating, genres, and overview

6. **Accessibility**
   - Keyboard-friendly navigation
   - Focus styles for interactive elements
   - ESC closes modal
   - Focus trap in modal
   - Proper `aria` attributes

---

## Design Spec

### Colors
- **Background:** `#0f172a` (slate-900)
- **Card:** `#111827` (gray-900) with subtle shadow
- **Text primary:** `#e5e7eb` (gray-200)
- **Accent:** `#22d3ee` (cyan-400) for focus/hover

### Typography
- Title: 18px / 24px, semibold
- Body: 14px / 20px, regular

### Spacing
- Page padding: 16px mobile, 24px desktop
- Card padding: 12px
- Grid gap: 12px mobile, 16px desktop

### States
- Card hover: slight lift + outline in accent
- Focus ring: 2px accent outline on interactive elements

---

## Dataset
`src/movies.json` contains sample movie data:

```json
[
  {
    "id": 1,
    "title": "The Martian",
    "year": 2015,
    "rating": 8.0,
    "genres": ["Adventure", "Sci-Fi"],
    "overview": "An astronaut becomes stranded on Mars.",
    "poster": "https://picsum.photos/200/300?1"
  },
  {
    "id": 2,
    "title": "Whiplash",
    "year": 2014,
    "rating": 8.5,
    "genres": ["Drama", "Music"],
    "overview": "A drummer pushed to his limits.",
    "poster": "https://picsum.photos/200/300?2"
  }
  // ...
]

# Starter code
A minimal App.tsx has been provided with basic structure and TODO comments.

# Instructions
Your task is to implement the missing logic and UI.

You may:

- Use React with TypeScript
- Style however you prefer (CSS Modules, styled-components, Tailwind, inline styles, etc.)
- Use small helper libraries for utilities if you wish
- Use full UI kits that implement all features for you (e.g., Material UI modals)

You may not:

- Copy/paste complete components from the web

## How to Run

```bash
npm install
npm run dev
```

## Stretch Goals (if time allows)

- Persist “favorites” in localStorage and add a “Favorites only” filter
- Handle large datasets efficiently (e.g., virtualization)
- Extract reusable Modal and MovieCard components

## Evaluation Criteria

### You will be evaluated on

- Component design & state management

- Accessibility compliance

- Responsiveness and visual fidelity

- Code clarity and maintainability

- Performance considerations

- Communication of tradeoffs & design decisions

Good luck and have fun!

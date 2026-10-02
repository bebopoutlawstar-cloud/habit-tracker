# Habit Tracker

A habit and wellness tracking web app built with React. Add the daily habits you want to build, mark them complete each day, and watch your streaks grow. Your habits are saved in the browser, so they're still there when you come back.

Built as the capstone project for the QuickStart AI-Centric Front-End Bootcamp.

**Live site:** https://bebopoutlawstar-cloud.github.io/habit-tracker/

## Features

- Add daily habits (empty names are rejected)
- Mark a habit complete once per day to grow its streak (button changes to "Done today ✓")
- See each habit's current streak and total completions
- Stats tiles for total habits, total completions, and how many habits are done today
- Delete habits you no longer want to track
- Data persists between visits using localStorage
- Responsive layout that works on phones and desktop

## Built With

- React 19 (functional components, useState, useEffect)
- Vite
- Plain CSS with a cyberpunk-inspired theme
- Google Fonts (Orbitron, Share Tech Mono)

## Project Structure

```
src/
  App.jsx              – holds habit state, saves/loads with localStorage
  components/
    HabitForm.jsx      – form to add a habit (blocks empty names)
    HabitCard.jsx      – one habit: streak, total, Complete/Delete buttons
    StatsPanel.jsx     – stat tiles: total habits, completions, done today
docs/ai-help/          – AI prompt screenshots and NOTES.md
TESTING.md             – manual testing checklist
```

## How to Install and Run

1. Install Node.js (v18 or newer)
2. Clone the repo:
   `git clone https://github.com/bebopoutlawstar-cloud/habit-tracker.git`
3. `cd habit-tracker`
4. `npm install`
5. `npm run dev`, then open http://localhost:5173/habit-tracker/

No environment variables or API keys are needed.

## Deployment

Deployed with GitHub Pages using the `gh-pages` package:

`npm run deploy`

This builds the app and publishes the `dist` folder.

## Testing

See TESTING.md for the manual test checklist.

## AI Usage

See docs/ai-help/NOTES.md and the screenshots in docs/ai-help/.

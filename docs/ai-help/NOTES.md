# Where AI Helped

I used Claude as a coding coach throughout this project. I wrote and typed the code myself; Claude helped me plan, find bugs, and understand new concepts. The screenshots in this folder show the actual prompts.

## 01 - Planning (01-planning.png)
Before writing any code, I shared the project spec and Claude helped me see that the whole app is one array of habit objects, with every feature being a different way to read or change that array. It suggested the component breakdown (App, HabitForm, HabitCard, StatsPanel) and an order to build in so each step was small and testable.

## 02 - Debugging (02-debugging.png)
My habit card was showing two Delete buttons. I pasted the file and Claude pointed to the exact line that was duplicated. Earlier it also caught a typo (`<div=className>`), a missing `useState` import, and a prop-name mismatch between App and TaskItem.

## 03 - localStorage (03-localstorage.png)
Saving data was new to me. Claude gave me the `useEffect` + `localStorage` pattern and explained why JSON.stringify and JSON.parse are needed, and why the lazy `useState(() => ...)` version avoids overwriting saved data on first load.

## 04 - Styling (04-styling.png)
I asked for a cyberpunk look. Claude wrote the CSS theme (grid background, neon glow, magenta delete buttons) and the mobile media query, and I adjusted it from there.

## Other places AI helped
- Explained terminal errors (a stray period in `npm run dev.`, a missing `package.json`, import paths that didn't match folder names)
- Helped convert my in-class Task Manager into the Habit Tracker by renaming state and changing the toggle function into a streak increment
- Wrote the manual testing checklist template and README structure
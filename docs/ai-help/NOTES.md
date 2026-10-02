# Where AI Helped

I used Claude as a coding coach throughout this project. I wrote and typed the code myself; Claude helped me plan, find bugs, and understand new concepts. The screenshots in this folder show real prompts I used.

## Ai help 1 - Streak logic
My "Complete today" button could be clicked over and over, so a streak could jump to 10 in seconds. I asked how to make it count only once per day. Claude explained saving a `lastCompleted` date on each habit and comparing it to `new Date().toDateString()`, and walked me through adding it one step at a time.

## Ai help 2 - Project review
I asked Claude to check my project against the capstone requirements. It found that my README was cut off and missing the install, run, and deployment instructions, and helped me write those sections.

## Ai help 3 - Debugging
My first try at the once-per-day fix put `streak` in the object twice and still let total completions go up on every click. Claude explained why, and showed me how to use `&&` in the condition so the whole update is skipped if the habit was already completed today.

## Other places AI helped
- Planning: helped me break the app into components (App, HabitForm, HabitCard, StatsPanel) and build it in small steps
- Saving data: explained the `useEffect` + `localStorage` pattern and why JSON.stringify/JSON.parse are needed
- Styling: helped create the cyberpunk theme, the "Done today ✓" disabled button style, and the glowing stat tiles
- Debugging: caught a duplicated Delete button, a `<div=className>` typo, a missing `useState` import, and a blank page caused by using `habit` in App.jsx where it didn't exist
- Explained terminal errors (a stray period in `npm run dev.`, running npm from the wrong folder, and a rejected `git push` that needed `git pull` first)

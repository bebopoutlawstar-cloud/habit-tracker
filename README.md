## Project Structure

```
src/
  App.jsx              – holds habit state, saves/loads with localStorage
  components/
    HabitForm.jsx      – form to add a habit (blocks empty names)
    HabitCard.jsx      – one habit: streak, total, Complete/Delete buttons
    StatsPanel.jsx     – total habits and total completions
docs/ai-help/          – AI prompt screenshots and NOTES.md
TESTING.md             – manual testing checklist
```

## How to Install and Run

1. Install Node.js (v18 or newer)
2. Clone the repo:
   `git clone https://github.com/bebopoutlawstar-cloud/habit-tracker.git`
3. `cd habit-tracker`
4. `npm install`
5. `npm run dev`, then open http://localhost:5173

No environment variables or API keys are needed.

## Deployment

Deployed with GitHub Pages using the `gh-pages` package:

`npm run deploy`

This builds the app and publishes the `dist` folder.
Live site: https://bebopoutlawstar-cloud.github.io/habit-tracker/

## Testing

See TESTING.md for the manual test checklist.

## AI Usage

See docs/ai-help/NOTES.md and the screenshots in docs/ai-help/.

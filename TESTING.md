# Testing Notes

Manual testing done in the browser at http://localhost:5173

## 1. Adding a habit
Steps: Typed "Drink water" in the input and clicked Add Habit.
Expected: A new card appears with a 0 day streak and 0 total.
Result: Got what was expected

## 2. Preventing empty habits
Steps: Left the input blank and clicked Add Habit. Also tried just spaces.
Expected: An alert says "Please enter a habit name" and no card is added.
Result: Pop up comes up

## 3. Incrementing progress
Steps: Clicked "Complete today" three times on one habit.
Expected: Streak shows 3, total shows 3, and Stats panel total completions goes up by 3.
Result: it goes up by 3

## 4. Displaying habits
Steps: Added three different habits.
Expected: Three separate cards appear, and Stats shows "Total habits: 3".
Result: shows other habits

## 5. Deleting a habit
Steps: Clicked Delete on one card.
Expected: That card disappears and Total habits drops by one.
Result: deletes with ease

## 6. Saving and loading data
Steps: Added habits, completed a few, then refreshed the page (F5).
Expected: All habits and their streaks are still there.
Result: Saves proper

## 7. Mobile layout
Steps: Dragged the browser window narrow (under 600px).
Expected: Stats stack vertically and card buttons go full-width.
Result: Results work

## 8. Once-per-day completion
Steps: Clicked "Complete today" several times on one habit, then refreshed the page.
Expected: Streak and total only go up by 1 per day, and the button changes to "Done today ✓".
Result: Could only complete it once, and it stayed done after refreshing

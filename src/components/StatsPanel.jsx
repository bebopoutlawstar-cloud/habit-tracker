function StatsPanel({ habits }) {
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce(
    (sum, habit) => sum + habit.totalCompletions,
    0
  );
const doneToday = habits.filter(
  (habit) => habit.lastCompleted === new Date().toDateString()
).length;
  return (
    <section className='stats'>
      <h2>Stats</h2>
      <div className='stat-tile'>
  <span className='stat-number'>{totalHabits}</span>
  <span className='stat-label'>Habits</span>
</div>
<div className='stat-tile'>
  <span className='stat-number'>{totalCompletions}</span>
  <span className='stat-label'>Completions</span>
</div>
<div className='stat-tile'>
  <span className='stat-number'>{doneToday}/{totalHabits}</span>
  <span className='stat-label'>Done today</span>
</div>
    </section>
  );
}

export default StatsPanel;
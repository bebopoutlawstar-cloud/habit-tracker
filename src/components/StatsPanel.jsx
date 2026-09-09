function StatsPanel({ habits }) {
  const totalHabits = habits.length;
  const totalCompletions = habits.reduce(
    (sum, habit) => sum + habit.totalCompletions,
    0
  );

  return (
    <section className='stats'>
      <h2>Stats</h2>
      <p>Total habits: {totalHabits}</p>
      <p>Total completions: {totalCompletions}</p>
    </section>
  );
}

export default StatsPanel;
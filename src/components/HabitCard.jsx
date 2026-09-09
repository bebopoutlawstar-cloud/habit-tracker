function HabitCard({ habit, deleteHabit, completeHabit }) {
  return (
    <div className='habit-card'>
      <h3>{habit.name}</h3>
      <div className='habit-stats'>
        <span>🔥 {habit.streak} day streak</span>
        <span>{habit.totalCompletions} total completions</span>
      </div>
      <div className='habit-actions'>
        <button className='complete' onClick={() => completeHabit(habit.id)}>
          Complete today
        </button>
        <button className='delete' onClick={() => deleteHabit(habit.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitCard;
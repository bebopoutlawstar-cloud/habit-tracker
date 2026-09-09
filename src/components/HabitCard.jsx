function HabitCard({ habit, deleteHabit, completeHabit }) {
  return (
    <div className='task'>
      <span>{habit.name}</span>
      <span>Streak: {habit.streak} days</span>
      <span>Total: {habit.totalCompletions}</span>
      <button onClick={() => completeHabit(habit.id)}>Complete today</button>
      <button onClick={() => deleteHabit(habit.id)}>Delete</button>
    </div>
  );
}

export default HabitCard;
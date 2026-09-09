import { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import StatsPanel from './components/StatsPanel';


function App() {
  const [habits, setHabits] = useState(() => {
  const saved = localStorage.getItem('habits');
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem('habits', JSON.stringify(habits));
}, [habits]);

  function addHabit(habitName) {
    const newHabit = {
      id: Date.now(),
      name: habitName,
      streak: 0,
      totalCompletions: 0
    };
    setHabits([...habits, newHabit]);
  }

  function deleteHabit(id) {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  }

  function completeHabit(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          streak: habit.streak + 1,
          totalCompletions: habit.totalCompletions + 1
        };
      }
      return habit;
    });
    setHabits(updatedHabits);
  }

  return (
    <div className='container'>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <h3><StatsPanel habits={habits} /></h3>
      {habits.length === 0 ? (
        <p className='empty-message'>
          No habits yet. Add your first habit!
        </p>
      ) : (
        <div className='task-list'>
          {habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              deleteHabit={deleteHabit}
              completeHabit={completeHabit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
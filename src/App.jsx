import { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import StatsPanel from './components/StatsPanel';
import './App.css';

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
    setHabits(habits.filter((habit) => habit.id !== id));
  }

  function completeHabit(id) {
    setHabits(
      habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              streak: habit.streak + 1,
              totalCompletions: habit.totalCompletions + 1
            }
          : habit
      )
    );
  }

  return (
    <div className='container'>
      <header>
        <h1>Habit Tracker</h1>
      </header>
      <main>
        <section className='add-habit'>
          <HabitForm addHabit={addHabit} />
        </section>
        <StatsPanel habits={habits} />
        <section className='habit-list'>
          {habits.length === 0 ? (
            <p className='empty-message'>No habits yet. Add your first habit!</p>
          ) : (
            habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                deleteHabit={deleteHabit}
                completeHabit={completeHabit}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
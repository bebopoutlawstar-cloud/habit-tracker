import { useState } from 'react';

function HabitForm({ addHabit }) {
  const [habitName, setHabitName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (habitName.trim() === '') {
      alert('Please enter a habit name');
      return;
    }
    addHabit(habitName);
    setHabitName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='habit'>New habit</label>
      <input
        id='habit'
        type='text'
        placeholder='e.g. Drink water'
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type='submit'>Add Habit</button>
    </form>
  );
}

export default HabitForm;
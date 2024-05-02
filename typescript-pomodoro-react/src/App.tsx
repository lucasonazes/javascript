import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer
        pomodoroTime={5}
        shortRestTime={3}
        longRestTime={5}
        cycles={4}
      />
    </div>
  );
}

export default App;

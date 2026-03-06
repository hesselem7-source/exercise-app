import React, { useState, useEffect } from "react";

function RunningExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Timer logic
  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  // Format seconds as MM:SS
  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  };

  // Record a lap
  const recordLap = () => {
    setLaps([...laps, seconds]);
  };

  // Reset timer and laps
  const reset = () => {
    setRunning(false);
    setSeconds(0);
    setLaps([]);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Time: {formatTime(seconds)}</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={recordLap}>Record Lap</button>
      <button onClick={reset}>Reset</button>

      <h3>Laps:</h3>
      <ul>
        {laps.map((lapTime, index) => (
          <li key={index}>
            Lap {index + 1} - {formatTime(lapTime)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RunningExercise;
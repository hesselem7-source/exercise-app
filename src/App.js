import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise";

function App() {
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Wall Sit", type: "duration" },
    { name: "Running", type: "running" }  // NEW exercise
  ];

  const [selectedExercise, setSelectedExercise] = useState(null);

  // Default menu screen
  let screen = (
    <div>
      <h1>Exercise Menu</h1>
      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
          style={{ display: "block", margin: "10px" }}
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );

  // Conditional rendering for exercises
  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = <RepetitionExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "duration") {
      screen = <DurationExercise name={selectedExercise.name} />;
    } else if (selectedExercise.type === "running") {
      screen = <RunningExercise name={selectedExercise.name} />;
    }
  }

  return <div>{screen}</div>;
}

export default App;
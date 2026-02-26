import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Sit Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Wall Sit", type: "duration" },
  ];

  const [selectedExercise, setSelectedExercise] = useState(null);

  let screen = (
    <div>
      <h1>Exercise Menu</h1>
      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setSelectedExercise(exercise)}
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );

  if (selectedExercise) {
    if (selectedExercise.type === "repetition") {
      screen = <RepetitionExercise name={selectedExercise.name} />;
    } else {
      screen = <DurationExercise name={selectedExercise.name} />;
    }
  }

  return <div>{screen}</div>;
}

export default App;
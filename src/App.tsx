import CourseGoal from "./components/CourseGoal";
import goalsImg from './assets/goals.jpg';
import Header from "./components/Header";
import { useState } from "react";

interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        title: 'testowy cel',
        description: 'jakis opis testowego celu',
        id: Math.random(),
      }

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'App logo'}}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

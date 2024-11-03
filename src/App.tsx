import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import Header from "./components/Header";
import { useState } from "react";
import NewGoal from './components/NewGoal';

export interface CourseGoal {
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

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main>
      <Header image={{src: goalsImg, alt: 'App logo'}}>
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

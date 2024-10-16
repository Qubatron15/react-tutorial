import CourseGoal from "./components/CourseGoal";
import goalsImg from './assets/goals.jpg';
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{src: goalsImg, alt: 'App logo'}}>
        <h1>Your Course Goal</h1>
      </Header>
      <CourseGoal title="Nauka Reacka i TS">
        <p>Nauka reactaaaaaaa XD</p>
      </CourseGoal>
    </main>
  )
}

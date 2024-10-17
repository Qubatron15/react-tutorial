import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalDto } from "../App"

interface CourseGoalListProps {
    goals: CourseGoalDto[]
}

export default function CourseGoalList({goals}: CourseGoalListProps) {
    return(
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
    )
}
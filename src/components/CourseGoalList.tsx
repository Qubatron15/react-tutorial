import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalDto } from "../App"

interface CourseGoalListProps {
    goals: CourseGoalDto[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return(
        <ul>
        {
          goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))
        }
      </ul>
    )
}
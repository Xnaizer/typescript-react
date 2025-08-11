import CourseGoals from "./CourseGoal"
import { type CourseGoalType } from "@/app/page";


type CourseGoalProps = {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
};


const CourseGoalList: React.FC<CourseGoalProps> = ({ goals, onDelete }) => {
  return (
    <ul className="space-y-4">
      {goals.map((item) => (
        <li key={item.id}>
          <CourseGoals
            title={item.title}
            onDelete={onDelete}
            id={item.id}
          >
            <p className="text-gray-600">{item.desc}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;

import CourseGoal from "./CourseGoal";
import { type CourseGoalType as CGLType } from "../App";

interface CourseTypeListProps {
    goals:  CGLType[];
    handleDelete: (id: number) => void;
}




export default function CourseGoalList({goals, handleDelete}: CourseTypeListProps) {
    return (
        <>
            <ul>
                {goals.map((item) => (
                    <li key={item.id}>
                    <CourseGoal 
                    title={item.title}
                    onDelete={handleDelete}
                    id={item.id}
                    >
                    <p>{item.description}</p> 
                    </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}
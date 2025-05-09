import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { type ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {

  if(goals.length === 0) {
    return <InfoBox mode='hint'>
      Add Your Activity Course!
    </InfoBox>
  }

  let warningBox : ReactNode;

  if (goals.length >= 6 ) {
    warningBox = (<InfoBox mode='warning' severity='high'>
     TOOO MUCHH!
    </InfoBox>)
  } else if (goals.length >= 4) {
    warningBox = (<InfoBox mode='warning' severity='medium'>
      You need to do your task
    </InfoBox>)
  } else {
    warningBox = (<InfoBox mode='warning' severity='low'>
      Get Task Going!
    </InfoBox>)
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}

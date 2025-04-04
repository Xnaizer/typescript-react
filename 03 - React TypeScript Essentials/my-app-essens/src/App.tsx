// import CourseGoal from "./components/CourseGoal";


// function App() {
  

//   return (
//     <>
//       <CourseGoal 
//       title="learn React + ts " 
//       description="Learn it from zero"/>
//     </>
//   )
// }

// export default App





import goalsImg from './assets/goals.jpg'
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from './components/NewGoal';


export interface CourseGoalType {
  title: string;
  description : string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);
  
  function handleDeleteGoal (id: number) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id))
  }

  function handleAddGoal(goal: string, summary : string) {
    setGoals((prev) => {
      const newGoal:CourseGoalType = {
        id: Math.random(),
        title : goal,
        description : summary
      } 
      return [...prev, newGoal]
    });

  }

  return (
    <>
      <div className='max-w-2xl mx-auto my-auto min-h-screen items-center '>
        <Header 
        image={{src: goalsImg , alt: 'list of goals'}}
        >
          <h1> Your Course Goals</h1>
        </Header>

        <NewGoal onAddGoal={handleAddGoal}/>

        <CourseGoalList goals={goals} handleDelete={handleDeleteGoal} />
      </div>

    </>
  )
}

export default App





// type UserProps = {
//   name: string;
// };
 
// function User({ name }: UserProps) {
//   return <li>User: {name}</li>;
// }
 
// function App() {
//   const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
 
//   return (
//     <>
//       <ul>
//         {users.map((user, index) => (
//           <User key={index} name={user.name} />
//         ))}
//       </ul>
//     </>
//   );
// }
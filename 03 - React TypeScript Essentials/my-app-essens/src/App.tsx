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




import CourseGoal from "./components/CourseGoal";
import goalsImg from './assets/goals.jpg'

function App() {
  

  return (
    <>
      <Header 
      image={{src: goalsImg , alt: 'list of goals'}}
      >
        <h1> Your Course Goals</h1>
      </Header>


      <CourseGoal 
      title="learn React + ts " 
      >
      <p>Learn it from zero </p> 
      </CourseGoal> 
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
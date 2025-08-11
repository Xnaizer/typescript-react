'use client'

import Header from "@/components/Header";
import goalsImg from '../../public/next.svg'
import { useState } from 'react'
import CourseGoalList from "@/components/CourseGoalList";
import NewGoals2 from "@/components/NewGoal2";

export type CourseGoalType = {
  title:string;
  desc:string;
  id:number;
}


export default function Home() {
  const [goals, setGoals] = useState< CourseGoalType[] >([]);


  function handleAddGoal(titles: string,decs: string) {
    setGoals((prev) => {
      const newGoals: CourseGoalType = {
        id: Math.random(),
        title: titles,
        desc: decs
      };

      return [...prev, newGoals]
    });
  }

  function handleDeleteGoal(id:number) {
    setGoals((item) => item.filter(item => item.id !== id))
  }
  
  return (
    <div className="container mx-auto  p-12">
      <Header image={{src: goalsImg, alt:"ini image"}} >
        <h1>Your Course</h1>
      </Header>

      {/* <CourseGoal 
        title='learn ts'
        desc='heloo des'
        id={1}
      /> */}

      {/* <button onClick={handleAddGoal}>Add Goal</button> */}

      <NewGoals2 onAddGoal={handleAddGoal} />

      <CourseGoalList 
        goals={goals}
        onDelete={handleDeleteGoal}
      />  


    </div>
  );
}

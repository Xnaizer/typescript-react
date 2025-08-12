"use client"

import Header from "@/components/Header";
import imgNext from "../../public/next.svg"
import GoalCard from "@/components/GoalCard";
import { useState } from "react";
import GoalForm from "@/components/GoalForm";

type GoalType = {
  id:number;
  title:string;
  description: string;
}

export default function Home() {
  const [goals, setGoals] = useState<GoalType[]>([]);

  const This_Users = "Xnaizer";

  function handleDeleteCard(id:number) {
    return setGoals(goals.filter(item => item.id !== id));
  }

  function handleAddGoal(titless:string,decss:string) {
    setGoals((prev) => {
      const newGoal = {
        id: Math.random(),
        title: titless,
        description: decss
      }

      return [...prev, newGoal]
    })
  }

  return (
    <div>
      <Header img={{src:imgNext, alt:"Hello Image"}}>
        <h1>Hi, {This_Users}</h1>
      </Header>

      <GoalForm onAdd={handleAddGoal} />

      {goals.map((item) => (
        <GoalCard key={item.id}
          id={item.id} 
          title={item.title} 
          onDelete={handleDeleteCard}
        >
          <h1>{item.description}</h1>
        </GoalCard>
      ))}

    </div>
  );
}

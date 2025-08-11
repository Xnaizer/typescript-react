"use client"

import Header from "@/components/Header";
import ImgPhoto from "../../public/next.svg";
import { useState } from "react";
import GoalCard from "@/components/GoalCard";
import GoalForm from "@/components/GoalForm";

export type ImgType = {
  src:string;
  alt:string;
}

interface GoalItemsType {
  title : string;
  desc: string;
  id: number;
}
type addBtnType = {
  titles : string;
  descs: string;
}

export default function Home() {
  const [goals,setGoals] = useState<GoalItemsType[]>([]);



  function handleAddButton(titles: string,descs: string) {
    
    setGoals((prev) => {
      const newData:GoalItemsType = {
        id: Math.random(),
        title: titles,
        desc: descs
      }

    return [...prev, newData]});

  }

  function handleDeleteButton(id:number) {
    setGoals(goals.filter(item => item.id !== id));
  }


  return (
    <section>
      <Header 
        image={{src: ImgPhoto, alt:"image Header"}}
      />
      {/* <button onClick={handleAddButton}>add </button> */}
      <GoalForm onAdd={handleAddButton} />
      {goals.map((item) => (
        <GoalCard title={item.title} onDelete={handleDeleteButton} key={item.id} id={item.id}> 
          <h1>{item.desc}</h1>
        </GoalCard>

      ))}



    </section>
  );

}

"use client";
import Header from "@/components/Header";
import imagePhoto from '../../public/next.svg';
import CardGoal from "@/components/CardGoal";
import { useState } from "react";
import GoalForm from "@/components/GoalForm";

export type DataType = {
  id: number;
  title: string;
  desc?:string;
}

export default function Home() {
  const [ data, setData ] = useState<DataType[]>([]);

  function handleAddProgram(title:string, desc:string) {
      setData((prev) => { 
        const newData = {
          id: Math.random(),
          title: title,
          desc: desc
        }

        return [...prev, newData];
    })
  }

  function handleDelete(id:number) {
    return setData(data.filter(item => item.id !== id));
  }

  return (
    <section>
      <Header 
        images={{src: imagePhoto, alt:"hey"}}
      >
        <h1>NextJs CRUD</h1>
      </Header>

      {/* <button onClick={handleAddProgram}>Add Goal</button> */}


      <GoalForm
        onAdd={handleAddProgram}
      />

    {data.map((item) => (
      <CardGoal key={item.id}
        id={item.id}
        title={item.title}
        onDelete={handleDelete}

      >
        <h1>{item.desc}</h1>
      </CardGoal>
    ))}
    </section>
  );
}

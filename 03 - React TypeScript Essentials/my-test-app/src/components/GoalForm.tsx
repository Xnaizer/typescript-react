"use client"

import { FormEvent, useRef } from "react";

type GoalFormProps = {
    onAdd: (titless:string, decss:string) => void;
}

const GoalForm:React.FC<GoalFormProps> = ({onAdd}) => {
    const titles = useRef<HTMLInputElement>(null);
    const descs = useRef<HTMLInputElement>(null);

    const handleSubmitGoal = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const title = titles.current!.value;
        const description = descs.current!.value;

        if(title.trim() === "" || description.trim() === ""){
            return alert("harus isi keduanya")
        } 

        onAdd(title,description);

        e.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmitGoal}>
            
            <div>
                <label htmlFor="title">Input Title : </label>
                <input type="text" id="title" ref={titles} />
            </div>

            <div>
                <label htmlFor="decs">Input Description :</label>
                <input type="text" id="decs" ref={descs} />
            </div>

            <div>
                <button>Add Goal!</button>
            </div>

        </form>
    )
}

export default GoalForm;
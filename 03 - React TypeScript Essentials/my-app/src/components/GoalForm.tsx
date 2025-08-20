"use client"
import { type FormEvent, useState } from "react";

type GoalFormProps = {
    onAdd: (title:string,desc:string) => void;
}

const GoalForm:React.FC<GoalFormProps> = ({onAdd}) => {
    const [titleData, setTitleData] = useState<string>('');
    const [descData, setDescData] = useState<string>('');

    function handleSubmit(e:FormEvent) {
        e.preventDefault();
        if(titleData.trim() === '' || descData.trim() === '') { 
            alert("Tidak Bisa harus isi keduanya");    
        } else {
            onAdd(titleData,descData);

        } 
        setTitleData('');
        setDescData('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Input Title: </label>
                <input type="text" id="title" value={titleData} onChange={e =>setTitleData(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="desc">Input Deskripsi:</label>
                <input type="text" id="desc" value={descData} onChange={e => setDescData(e.target.value)}/>
            </div>

            <div>
                <button type="submit">Add Button</button>
            </div>


        </form>
    )
}

export default GoalForm;
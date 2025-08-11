"use client"

import { FormEvent, useState } from "react"

type GoalFormProps = {
    onAdd: (titles:string,descs:string) => void;
}

const GoalForm:React.FC<GoalFormProps> = ({onAdd}) => {
    const [titles, setTitles] = useState('');
    const [descs, setDescs] = useState('');



    function handleSubmitForm(e:FormEvent) {
        e.preventDefault();

        onAdd(titles,descs);
      
        setTitles('');
        setDescs('');
    }

    return (
        <form onSubmit={handleSubmitForm}>
            
            <div>
                <label htmlFor="title">Input Goal :</label>
                <input type="text" id="title" onChange={e => setTitles(e.target.value)} value={titles}/>
            </div>

            <div>
                <label htmlFor="desc">Input Desc :</label>
                <input type="text" id="desc" onChange={e => setDescs(e.target.value)} value={descs} />
            </div>

            <div>
                <button>Submit Form</button>
            </div>


        </form>
    )
}

export default GoalForm;
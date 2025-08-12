import { PropsWithChildren } from "react";

type PropsComponents = {
    id: number;
    title:string;
    onDelete: (id:number) => void; 
}

type GoalCardProps = PropsWithChildren<PropsComponents>;


const GoalCard:React.FC<GoalCardProps> = ({id, title,onDelete, children}) => {

    return (
        <section>
            <p>No Task : {id}</p>
            <h1>Goal : {title}</h1>
            {children}

            <button onClick={() => onDelete(id)}>Delete Card</button>
        </section>
    )
}

export default GoalCard;
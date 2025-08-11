import { type PropsWithChildren } from "react";

type GoaldCard = PropsWithChildren<{
    onDelete: (id:number) => void;
    id: number;
    title:string;
}>;

const GoalCard:React.FC<GoaldCard> = ({children,onDelete,id,title}) => {

    return (
        <section >
            <h1>{title}</h1>
            {children}

            <button onClick={() => onDelete(id)}>Delete</button>
        </section>
    )
}

export default GoalCard;
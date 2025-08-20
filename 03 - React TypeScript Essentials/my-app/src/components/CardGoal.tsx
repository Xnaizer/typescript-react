import { PropsWithChildren } from "react";
import { DataType } from "@/app/page";

type CardGoalPropsType = {
    onDelete: (id:number) => void;
}

// type combinedType = DataType & CardGoalPropsType;

type CardGoalProps = PropsWithChildren<DataType & CardGoalPropsType>;

const CardGoal:React.FC<CardGoalProps> = ({id,title,children,onDelete}) => {

    return (
        <section>
            <h2>No Goal: {id}</h2>
            <h1>{title}</h1>
            {children}

            <button onClick={() => onDelete(id)}>Delete</button>
        </section>
    )
}


export default CardGoal;
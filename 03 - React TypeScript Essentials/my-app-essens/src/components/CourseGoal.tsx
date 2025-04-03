

// export default function CourseGoal({title, description} : {
//     title: string; 
//     description: string
// }) {
//     // return (
//     //     <>



        
//     //     </>
//     // )

//     return <article >
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>

//         <button>delete</button>
//     </article>
// }


import { 
    PropsWithChildren, 
    // type ReactNode,
    // FC
} from "react";

// type CourseGoalProps = {
//     title: string; 
//     description: string
// }



// interface CourseGoalProps  {
//     title: string; 
//     // description: string
//     children: ReactNode;
// }

type CourseGoalPropsAlter = PropsWithChildren<{title: string}>


export default function CourseGoal({title, children} : CourseGoalPropsAlter ) {
  
    return <article >
        <div>
            <h2>{title}</h2>
            {/* <p>{description}</p> */}
            {children}
        </div>

        <button>delete</button>
    </article>
}



// another alternative on writing the comps

// const CourseGoal: FC<CourseGoalPropsAlter> = ({title, children}) => {
//     return (
        // <article >
        //     <div>
        //         <h2>{title}</h2>
        //         {/* <p>{description}</p> */}
        //         {children}
        //     </div>

        //     <button>delete</button>
        // </article>
//     )
// }

// export CourseGoal;


// FC = Functional Components
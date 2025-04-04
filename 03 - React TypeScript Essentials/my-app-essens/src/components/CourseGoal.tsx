

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

type CourseGoalPropsAlter = PropsWithChildren<{ 
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

export default function CourseGoal({ title, onDelete , children, id}: CourseGoalPropsAlter) {
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 border border-gray-300 max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="text-gray-600 mt-2">{children}</div>

      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition" onClick={() => onDelete(id) }>
        Delete
      </button>
    </article>
  );
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


// export default function CourseGoal(props:{title :string; desc:string;}) {


//     return (
//         <article>
//             <div>
//                 <h2>{props.title}</h2>
//                 <p>{props.desc}</p>
//             </div>
//             <button>delete</button>

//         </article>
//     )
// }



// export default function CourseGoal({title, desc}:{title :string; desc:string;}) {


//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//             </div>
//             <button>delete</button>

//         </article>
//     )
// }


// type CourseGoalProps = {
//     title:string;
//     desc:string;
//     id:number;
// }

// export default function CourseGoal({title, desc,id}: CourseGoalProps) {


//     return (
//         <article>
//             <div id={`${id}`}>
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//             </div>
//             <button>delete</button>

//         </article>
//     )
// }



// interface CourseGoalProps {
//     title:string;
//     desc:string;
//     id:number;
// }

// export default function CourseGoal({title, desc,id}: CourseGoalProps) {


//     return (
//         <article>
//             <div id={`${id}`}>
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//             </div>
//             <button>delete</button>

//         </article>
//     )
// }

import { type FC, type PropsWithChildren, type ReactNode } from "react";


// interface CourseGoalProps {
//     title:string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
    id:number;
    title:string;
    onDelete: (id:number) => void;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete, id }) => {
  return (
    <article className="flex justify-between items-start bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="mt-1">{children}</div>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded"
      >
        Delete
      </button>
    </article>
  );
};

export default CourseGoal;
 


// export default function CourseGoal({title, children}: CourseGoalProps) {


//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {children}
//             </div>
//             <button>delete</button>

//         </article>
//     )
// }

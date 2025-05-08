// import { type FormEvent } from "react";

// export default function NewGoal() {
//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const formku = new FormData(event.currentTarget);

//     const enteredGoal = formku.get("goal");
//     const enteredSummary = formku.get("summary");

//     console.log(`goal : ${enteredGoal} dan summary  : ${enteredSummary}`);

// }

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="items-center p-12 rounded-lg bg-slate-400 max-w-md mx-auto mt-8 space-y-6"
//     >
//       <div>
//         <label
//           htmlFor="goal"
//           className="block text-lg font-medium text-gray-700 mb-1"
          
//         >
//           Your Goal
//         </label>
//         <input
//           type="text"
//           id="goal"
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           name="goal"
//         />
//       </div>

//       <div>
//         <label
//           htmlFor="summary"
//           className="block text-lg font-medium text-gray-700 mb-1"
//         >
//           Your Summary
//         </label>
//         <input
//           type="text"
//           id="summary"
//           className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           name="summary"
//         />
//       </div>

//       <div className="text-right">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Add Goal
//         </button>
//       </div>
//     </form>
//   );
// }

// code on top not complete


import { useRef, type FormEvent } from "react";

interface NewGoalTipe {
    onAddGoal: (goal: string, summary: string) => void
}


export default function NewGoal({onAddGoal}: NewGoalTipe) {
    
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);


    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
  
        onAddGoal(enteredGoal,enteredSummary);
        
        event.currentTarget.reset();
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="items-center p-12 rounded-lg bg-slate-400 max-w-md mx-auto mt-8 space-y-6"
    >
      <div>
        <label
          htmlFor="goal"
          className="block text-lg font-medium text-gray-700 mb-1"
          
        >
          Your Goal
        </label>
        <input
          type="text"
          id="goal"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="goal"
          ref={goal}
        />
      </div>

      <div>
        <label
          htmlFor="summary"
          className="block text-lg font-medium text-gray-700 mb-1"
        >
          Your Summary
        </label>
        <input
          type="text"
          id="summary"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="summary"
          ref={summary}
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Goal
        </button>
      </div>
    </form>
  );
}

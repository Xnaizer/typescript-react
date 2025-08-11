import {  useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (titles: string, decs: string) => void;
}


const NewGoals: React.FC<NewGoalProps> = ({onAddGoal}) => {
    const titles = useRef<HTMLInputElement>(null);
    const descs = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const enteredTitles = titles.current!.value;
    const enteredDescs = descs.current!.value;

    onAddGoal(enteredTitles,enteredDescs);
    
    e?.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 space-y-4 border border-gray-200"
    >
      <p className="flex flex-col">
        <label
          htmlFor="title"
          className="mb-1 font-medium text-gray-700"
        >
          Goal Title
        </label>
        <input
          type="text"
          id="title"
          ref={titles}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </p>

      <p className="flex flex-col">
        <label
          htmlFor="desc"
          className="mb-1 font-medium text-gray-700"
        >
          Goal Description
        </label>
        <input
          type="text"
          id="desc"
          ref={descs}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </p>

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
      >
        Add New Goal
      </button>
    </form>
  );
};

export default NewGoals;

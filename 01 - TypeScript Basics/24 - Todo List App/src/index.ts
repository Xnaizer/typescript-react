// console.log("Hi")

import { v4 as uuidV4 } from "uuid" 

type TaskType = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

const simpanData: TaskType[] = loadTasks();
simpanData.forEach(addListItem)


form?.addEventListener("submit", e => {
  e.preventDefault();

  if(input?.value == "" || input?.value == null) return

  const task: TaskType = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }

  simpanData.push(task);


  addListItem(task);
  input.value = '';
})

function addListItem(tasks: TaskType){
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    tasks.completed = checkbox.checked
    saveTasks()
  })
  checkbox.type = "checkbox";
  checkbox.checked = tasks.completed
  label.append(checkbox, tasks.title);
  item.append(label);
  list?.append(item)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(simpanData))
}

function loadTasks(): TaskType[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}
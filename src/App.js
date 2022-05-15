import { useState, useEffect } from "react";
import "./App.css";
import { List } from "./components/listTask";
import { FormTask } from "./components/formTask/indexFormTask";
import { exampleTaskList } from "./data/exampleTaskList";
function App() {
  const memory = JSON.parse(localStorage.getItem("tasklist"));

  const [taskList, setTaskList] = useState(memory || exampleTaskList);
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <header>
        <h1>Task List React Example</h1>
      </header>
      <main>
        <List content={taskList} handlerTaskList={setTaskList} />
        <FormTask content={taskList} handler={setTaskList} />
      </main>
      <footer>
        <h4>HACK A BOSS @HugoSuarez 2022</h4>
      </footer>
    </>
  );
}

export default App;

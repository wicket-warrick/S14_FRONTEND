import { useState } from "react";
import { propTypes } from "prop-types";
export const FormTask = ({ content, handler }) => {
  const [descriptionTask, setDescriptionTask] = useState("");

  const description = (event) => {
    setDescriptionTask(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault();
    const taskToDo = {
      id: content.length + 1,
      task: descriptionTask,
      done: false,
    };

    handler([...content, taskToDo]);
    setDescriptionTask("");
  };
  return (
    <form onSubmit={createTask}>
      <label htmlFor="taskToDo">tarefa</label>
      <input
        id="taskToDo"
        type="text"
        required
        autoFocus
        value={descriptionTask}
        maxLength={100}
        onChange={description}
        autoComplete="off"
      />
      <input type="submit" value="añadir"></input>
    </form>
  );
};

FormTask.propTypes = {
  content: propTypes.array.isRequired,
  handler: propTypes.func.isRequired,
};

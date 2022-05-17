import { useState } from "react";
import { propTypes } from "prop-types";

export const Task = ({ task, handlerTask, content, index }) => {
  const [check, setCheck] = useState(task.done);

  const handlerCheckBox = () => {
    setCheck(!check);
    const _content = [...content];
    _content[index].done = !task.done;
    handlerTask(_content);
  };

  return (
    <li className={check ? "task done" : "task"}>
      <h4>{task.task}</h4>
      <input type="checkbox" checked={check} onChange={handlerCheckBox}></input>
    </li>
  );
};

Task.propTypes = {
  task: propTypes.object.isRequired,
  handlerTask: propTypes.func.isRequired,
  content: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

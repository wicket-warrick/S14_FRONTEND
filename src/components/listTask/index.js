import { Task } from "../task/indexTask";
import { propTypes } from "prop-types";

export const List = ({ content, handlerTaskList }) => {
  return (
    <ul className="task-list">
      {content.map((task, index) => (
        <Task
          task={task}
          key={task.id}
          index={index}
          handlerTask={handlerTaskList}
          content={content}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  content: propTypes.array.isRequired,
  handlerTaskList: propTypes.func.isRequired,
};

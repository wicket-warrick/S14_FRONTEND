import { Task } from "../task/indexTask";

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

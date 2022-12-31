import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { ITask } from "../types/task";

import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((previousTask) =>
      previousTask.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((previousTask) =>
        previousTask.map((task) => {
          if (selected.id === task.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;

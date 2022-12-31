import React, { FormEvent, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import Button from "../Button";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

import style from "./Form.module.scss";

interface Props {
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export default function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((previousTasks) => [
      ...previousTasks,
      { task, time, selected: false, completed: false, id: uuidv4() },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="1:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

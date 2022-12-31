import { useEffect, useState } from "react";
import Button from "../Button";
import Watch from "./Watch";
import { ITask } from "../../types/task";
import { timeToSeconds } from "../../common/utils/time";

import style from "./Timer.module.scss";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      } else {
        finishTask();
      }
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar</Button>
    </div>
  );
}

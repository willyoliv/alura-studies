import type { ReactNode } from "react";

import style from "./Button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: () => void;
}

export default function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.btn}>
      {children}
    </button>
  );
}

import { useState } from "react";

import style from './input.module.scss';

export default function Input(props) {
  const { type, value, onChange, serialNumber } = props;

  const [input, setInput] = useState(value);
  const [validate, setValidate] = useState(true);

  const onBlur = (e, serialNumber) => {
    if (!+e.target.value || +e.target.value < 0) {
      setValidate(false);
      return;
    };
    setValidate(true);
    onChange(e, serialNumber);
  }

  return (
    <input type={type} className={`${style.input} ${validate ? '' : style.validate}`}
      value={input}
      onChange={e => setInput(e.target.value)}
      onBlur={e => onBlur(e, serialNumber)}
    />
  )
}

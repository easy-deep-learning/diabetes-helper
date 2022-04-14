import { useState, useEffect } from "react";

import style from './input.module.scss';

export default function Input(props) {
  const { type, value, changeInput, serialNumber } = props;

  const [input, setInput] = useState(value);
  const [validate, setValidate] = useState(true);

  useEffect(() => {
    if (input !== value) setInput(value);
  }, [value]);

  const onBlur = (e, serialNumber) => {
    const value = +e.target.value;
    if (!value || value < 0) {
      setValidate(false);
      return;
    };
    setValidate(true);
    changeInput(e, serialNumber);
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <input type={type} className={`${style.input} ${validate ? '' : style.validate}`}
      value={input}
      onChange={e => onChange(e)}
      onBlur={e => onBlur(e, serialNumber)}
    />
  )
}

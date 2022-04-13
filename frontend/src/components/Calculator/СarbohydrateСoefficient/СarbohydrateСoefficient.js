import { useEffect, useState } from "react";

import Input from "../../Input/input";

import style from './coefficient.module.scss'

export default function СarbohydrateСoefficient() {

  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 24; i++) {
      const obj = { auto: true, value: 1 }
      arr.push(obj);
    }
    setList(arr);
  }, []);



  const onChange = (e, i) => {
    const newValue = +e.target.value;
    if (newValue == list[i].value) return;
    const newList = JSON.parse(JSON.stringify(list));
    newList[i].auto = false;
    newList[i].value = newValue;
    interpolation(newList);
  }

  const interpolation = (arr) => {
    console.log(arr);
    if (arr[0].auto) { arr[0].value = 1 };
    if (arr[23].auto) { arr[23].value = 1 };
    const newArr = [];

    const calcInterval = (prev = 0, next) => {
      const increment = (arr[next].value - arr[prev].value) / (next - prev);
      for (let a = prev; a < next; a++) {
        if (a === prev) {
          newArr.push(arr[a]);
          continue;
        };
        const elem = {
          auto: true,
          value: newArr[a - 1].value + increment
        };
        newArr.push(elem);
      };
      if (next === 23) newArr.push(arr[next]);
    }

    const calc = () => {
      let prev, next = null;
      arr.forEach((item, i) => {
        if (!item.auto && !prev) {
          prev = i;
          calcInterval(0, prev);
          return;
        };
        if (!item.auto && prev && !next && (i != 23)) {
          next = i;
          calcInterval(prev, next);
          prev = next;
          next = null;
          return;
        };
        if (prev && (i == 23)) {
          next = i;
          calcInterval(prev, next);
        };
        if (!arr.filter(item => !item.auto)[0]) {
          newArr = arr.map(item => ({ auto: true, value: 1 }));
        }
      });

      setList(newArr);
    }
    calc();
    setList(newArr);
  }

  const onAuto = (i) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList[i].auto = true;
    interpolation(newList);
  }

  const renderList = list.map((item, i) => {
    return (
      <li key={i} className={style.item}>
        <label className={style.label}>
          <div className={style.desc}>
            <span>{i} o'clock</span>
            <button onClick={() => onAuto(i)} type='button' className={`${style.button}
                 ${item.auto === true ? style.button_auto : null}`}
            >auto</button>
          </div>
          <Input type={'text'} value={item.value.toFixed(2)}
            onChange={onChange} serialNumber={i}
          />
        </label>
        <div></div>
      </li>
    )
  })

  return (
    <div>
      <h2>
        СarbohydrateСoefficient
      </h2>
      <form>
        <ul className={style.list}>
          {renderList}
        </ul>
      </form>
    </div>
  )
}

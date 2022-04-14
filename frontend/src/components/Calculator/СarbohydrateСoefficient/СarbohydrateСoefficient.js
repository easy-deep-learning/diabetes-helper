import { useEffect, useState } from "react";

import Input from "../../Input/input";

import style from './coefficient.module.scss'

export default function СarbohydrateСoefficient() {

  const [list, setList] = useState([]);


  useEffect(() => {
    setList([...Array(24)].map(() => ({ auto: true, value: 1 })));
  }, []);

  const changeInput = (e, i) => {
    const newValue = +e.target.value;
    if (newValue == list[i].value) return;
    // const newList = JSON.parse(JSON.stringify(list));
    const newList = list;
    newList[i].auto = false;
    newList[i].value = newValue;
    interpolation(newList);
  }

  const interpolation = (arr) => {

    const onlyZero = () => {
      const increment = (1 - arr[0].value) / (arr.length - 2);
      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          newArr.push(arr[i])
        } else if (i === (arr.length - 1)) {
          newArr.push(arr[i])
        } else {
          const elem = {
            auto: true,
            value: newArr[i - 1].value + increment
          };
          newArr.push(elem);
        };
      };

      setList(newArr);
    };

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

    // console.log(arr);
    if (arr[0].auto) { arr[0].value = 1 };
    if (arr[23].auto) { arr[23].value = 1 };
    const newArr = [];
    if (!arr[0].auto && (arr.filter(item => !item.auto).length === 1)) {
      onlyZero();
      return;
    };
    calc();
  }

  const onAuto = (i) => {
    // const newList = JSON.parse(JSON.stringify(list));
    const newList = list;
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
            changeInput={changeInput} serialNumber={i}
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

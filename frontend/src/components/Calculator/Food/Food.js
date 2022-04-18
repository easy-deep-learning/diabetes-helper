import { useEffect, useState } from "react";

import useServices from "../../../services/useServices";
import Spinner from "../../Spinner/Spinner";

import style from './Food.module.scss';

export default function Food() {
  const [food, setFood] = useState([]);

  const { loading, error, getAllProducts } = useServices();

  useEffect(() => {
    getAllProducts().then(data => setFood(data));
  }, []);

  const renderFood = () => {
    return (food.map(item => {
      return (

        <li className={style.item} key={item._id}>
          <span className={style.text}>{item.name}</span>
          <span className={style.text}>{item.protein}</span>
          <span className={style.text}>{item.fat}</span>
          <span className={style.text}>{item.carbohydrate}</span>
        </li>
      );
    }));
  }

  const errorMessage = error ? 'error' : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(error || loading || !food) ? renderFood() : null;

  return (
    <>
      {errorMessage}
      {spinner}
      <ul>
        {content}
      </ul>
    </>
  )
}

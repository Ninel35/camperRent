import { campers } from "../../demoApi";
import CardItem from "../CardItem/CardItem";
import css from "./CardList.module.css";

const CardList = () => {
  return (
    <ul className={css.list}>
      {campers.map((el) => (
        <CardItem key={el._id} camper={el}></CardItem>
      ))}
    </ul>
  );
};

export default CardList;

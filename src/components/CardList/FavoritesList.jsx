import { useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import css from "./CardList.module.css";
import { selectorFavorites } from "../../store/favoritesSelector";

const FavoritesList = () => {
  const campers = useSelector(selectorFavorites);
  return (
    <>
      <ul className={css.list}>
        {campers.map((el) => (
          <CardItem key={el._id} camper={el}></CardItem>
        ))}
      </ul>
    </>
  );
};

export default FavoritesList;

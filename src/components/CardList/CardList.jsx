import { useDispatch, useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import css from "./CardList.module.css";
import {
  selectorCampers,
  selectorError,
  selectorLoading,
} from "../../store/campersSelectors";
import { useEffect } from "react";
import { getCampersThunk } from "../../store/campersThunks";

const CardList = () => {
  const campers = useSelector(selectorCampers);
  const loading = useSelector(selectorLoading);
  const error = useSelector(selectorError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampersThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ul className={css.list}>
        {campers.map((el) => (
          <CardItem key={el._id} camper={el}></CardItem>
        ))}
      </ul>
    </>
  );
};

export default CardList;

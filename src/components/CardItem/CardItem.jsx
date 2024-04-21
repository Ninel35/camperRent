import { useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./CardItem.module.css";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectorFavorites } from "../../store/favoritesSelector";
import { addFavoriteAction } from "../../store/favoriteSlice";

const CardItem = ({
  camper: {
    _id,
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  },
}) => {
  const [showModal, setShowModal] = useState(false);
  // const favorites = useSelector(selectorFavorites);
  const dispatch = useDispatch();

  const closeOpenModal = () => {
    setShowModal(!showModal);
    console.log("first");
  };

  const addToFavorite = () => {
    dispatch(addFavoriteAction());
  };
  return (
    <li className={css.cardItem}>
      <img src={gallery[0]} className={css.cardImg} />
      <div className={css.cardDescription}>
        <div className={css.cardHeader}>
          <div className={css.headerList}>
            <h3 className={css.price}>{name}</h3>
            <div>
              <h3 className={css.price}>€{price}.00</h3>
              <button type="button" onClick={addToFavorite}>
                <svg width="18" height="18">
                  <use href="/src/assets/sprite.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className={css.location}>
            <li>
              <svg width="18" height="18">
                <use href="/src/assets/sprite.svg#star"></use>
              </svg>
              <u>
                {rating}({reviews.length} Reviews)
              </u>
            </li>
            <li>
              <svg className={css.icon} width="20" height="20">
                <use href="/src/assets/sprite.svg#location"></use>
              </svg>
              {location}
            </li>
          </ul>
        </div>

        <div className={css.text}>{description}</div>
        <CategoriesList details={details} />

        <button
          onClick={closeOpenModal}
          type="button"
          className={css.showMoreButton}
        >
          Show more
        </button>
        {showModal && (
          <Modal
            camper={{
              _id,
              name,
              price,
              rating,
              location,
              adults,
              children,
              engine,
              transmission,
              form,
              length,
              width,
              height,
              tank,
              consumption,
              description,
              details,
              gallery,
              reviews,
            }}
            onClose={closeOpenModal}
          />
        )}
      </div>
    </li>
  );
};

export default CardItem;

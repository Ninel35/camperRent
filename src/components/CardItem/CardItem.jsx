import { useState } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import css from "./CardItem.module.css";
import Modal from "../Modal/Modal";

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

  const closeOpenModal = () => {
    setShowModal(!showModal);
    console.log("first");
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
              <button type="button" className="burgerMenu">
                <svg width="18" height="18">
                  <use href=""></use>
                </svg>
              </button>
            </div>
          </div>
          <ul className={css.location}>
            <li>
              <svg width="18" height="18">
                <use href=""></use>
              </svg>
              {rating}({reviews.length} Reviews)
            </li>
            <li>
              <svg className={css.icon} width="20" height="20">
                <use href="../../assets/map-pin.svg#icon-map-pin"></use>
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
        {showModal && <Modal />}
      </div>
    </li>
  );
};

export default CardItem;

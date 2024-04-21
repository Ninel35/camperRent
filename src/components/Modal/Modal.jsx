import ReactDOM from "react-dom";
import css from "./Modal.module.css";
const Modal = ({
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
  onClose,
}) => {
  return ReactDOM.createPortal(
    <div className={css.wrapper} onClick={onClose}>
      <div className={css.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={css.headerModal}>
          <div className={css.header}>
            <h3 className={css.headerTextAndPrice}>{name}</h3>
            <button type="button" className="closeButton" onClick={onClose}>
              <svg width="32" height="32">
                <use href="/src/assets/sprite.svg#closeBtn"></use>
              </svg>
            </button>
          </div>

          <ul className={css.reviews}>
            <li>
              <svg width="18" height="18">
                <use href="/src/assets/sprite.svg#star"></use>
              </svg>
              <u>
                {rating}({reviews.length} Reviews)
              </u>
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/src/assets/sprite.svg#location"></use>
              </svg>
              Kyiv, Ukraine
            </li>
          </ul>
          <h3 className={css.headerTextAndPrice}>€{price}.00</h3>
        </div>
        <ul className={css.listModal}>
          {gallery.map((url) => (
            <li key={_id}>
              <img className={css.image} src={url} />
            </li>
          ))}
        </ul>
        <div className={css.textDescription}>{description}</div>
        <div className={css.featuresAndReviews}>
          <button>Features</button>
          <button>Reviews</button>
        </div>
      </div>
    </div>,
    document.getElementById("modalRoot")
  );
};

export default Modal;

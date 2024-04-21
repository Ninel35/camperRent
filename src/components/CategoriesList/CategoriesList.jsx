import css from "./CategoriesList.module.css";

const CategoriesList = ({ details }) => {
  return (
    <ul className={css.categoriesList}>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        2 adults
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        Automatic
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        Petrol
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        Kitchen
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        1 beds
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/camperRent/src/assets/icomoon (1)/symbol-defs.svg#icon-Rating"></use>
        </svg>
        AC
      </li>
    </ul>
  );
};

export default CategoriesList;

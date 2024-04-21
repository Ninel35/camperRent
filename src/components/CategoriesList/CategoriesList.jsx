import css from "./CategoriesList.module.css";

const CategoriesList = ({ details }) => {
  return (
    <ul className={css.categoriesList}>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#Users"></use>
        </svg>
        2 adults
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#automatic"></use>
        </svg>
        Automatic
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#petrol"></use>
        </svg>
        Petrol
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#kitchen"></use>
        </svg>
        Kitchen
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#bed"></use>
        </svg>
        1 beds
      </li>
      <li className={css.category}>
        <svg className={css.icon} width="20" height="20">
          <use href="/src/assets/sprite.svg#ac"></use>
        </svg>
        AC
      </li>
    </ul>
  );
};

export default CategoriesList;

import CategoriesList from "../CategoriesList/CategoriesList"
import css from "./CardItem.module.css"

const CardItem = () => {
	return (
		<li className={css.cardItem}>
			<img href="" className={css.cardImg} />
			<div className={css.listCategories}>
				<div className={css.headerList}>
					<h3>Mavericks</h3>
					<div>
						<h3>€8000.00</h3>
						<button type="button" className="burgerMenu">
							<svg width="18" height="18">
								<use href=""></use>
							</svg>
						</button>
					</div>
				</div>
				
					<ul className={css.location}>
						<li><svg width="18" height="18">
								<use href=""></use>
							</svg>4.4(2 Reviews)</li>
						<li><svg width="18" height="18">
								<use href=""></use>
							</svg>Kyiv, Ukraine</li>
					</ul>
				
				<p>Embrace simplicity and freedom with the Mavericks panel truck, an ideal choice for solo travelers or couples seeking a compact and efficient way to explore the open roads.</p>
				<CategoriesList />
				
				<button type="button" className={css.showMoreButton}>Show more</button>
			</div>
		</li>
	)
}

export default CardItem
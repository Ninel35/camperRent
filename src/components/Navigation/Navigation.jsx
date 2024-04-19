import { NavLink } from "react-router-dom"
import css from './Navigation.module.css';


const Navigation = () => {
	return (
		<nav>
			<ul className={css.navList}>
				<li><NavLink to="/">
					Home
				</NavLink></li>
				<li><NavLink to="/catalog">
					Catalog
				</NavLink></li>
				<li><NavLink to="/favorites">
					Favorites
				</NavLink></li>
			</ul>
		</nav>
	)
}
export default Navigation
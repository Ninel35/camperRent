import { NavLink } from "react-router-dom"
import Navigation from "../Navigation/Navigation"
import css from "./Header.module.css"

const Header = () => {
	return (<header className={css.header}>
		<NavLink className={css.logo}>
			<h1 >Camper Rent</h1></NavLink >
		{/* <button type="button" className="burgerMenu">
			<svg width="18" height="18">
              <use href=""></use>
            </svg>
		</button> */}
		<Navigation />
	</header>
	)
}

export default Header
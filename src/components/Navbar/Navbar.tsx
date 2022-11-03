import React from "react";
import searchIcon from "../../assets/magnifying-glass.svg";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<nav className={styles.nav}>
			{/* <img src='' alt='' className={styles.logo} /> */}
			<h2 className={styles.text__logo}>GIPHY</h2>
			<span className={styles.searchbar}>
				<input
					type='text'
					placeholder='search'
					className={styles.searchbar__input}
				/>
				<button className={styles.searchbar__icon__wrapper}>
					<img
						src={searchIcon}
						alt='search icon'
						className={styles.searchbar__icon}
					/>
				</button>
			</span>
		</nav>
	);
};

export default Navbar;

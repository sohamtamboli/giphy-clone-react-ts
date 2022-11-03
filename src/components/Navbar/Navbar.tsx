import React, { useState } from "react";
import searchIcon from "../../assets/magnifying-glass.svg";
import styles from "./Navbar.module.css";

type Props = {
	searchQuery: string;
	handleSearch: (e: { target: { value: string } }) => void;
	handleSearchSubmit: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
};

const Navbar = ({ searchQuery, handleSearch, handleSearchSubmit }: Props) => {
	return (
		<nav className={styles.nav}>
			{/* <img src='' alt='' className={styles.logo} /> */}
			<h2 className={styles.text__logo}>GIPHY</h2>
			<form className={styles.searchbar}>
				<input
					type='text'
					placeholder='search'
					value={searchQuery || ""}
					onChange={handleSearch}
					className={styles.searchbar__input}
				/>
				<button
					type='submit'
					onClick={handleSearchSubmit}
					className={styles.searchbar__icon__wrapper}>
					<img
						src={searchIcon}
						alt='search icon'
						className={styles.searchbar__icon}
					/>
				</button>
			</form>
		</nav>
	);
};

export default Navbar;

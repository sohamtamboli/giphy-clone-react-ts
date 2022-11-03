import React from "react";
import trendingIcon from "../../assets/trending-icon.svg";
import styles from "./Grid.module.css";

type Props = {
	gifDataToGrid: Array<IGifInfo>;
	title?: string;
};

interface IGifInfo {
	id: string;
	images: {
		original: {
			webp: string;
			height?: string;
			width?: string;
		};
	};
}

const Grid = ({ gifDataToGrid, title }: Props) => {
	// console.log(gifDataToGrid, "grid");

	return (
		<>
			<div className={styles.title}>
				<img src={trendingIcon} alt='' />
				<h2>{title ? `Search results for '${title}'` : `Trending`}</h2>
			</div>
			<div className={styles.grid__container}>
				{gifDataToGrid.map((el) => {
					const gifSize =
						parseInt(el?.images?.original?.height || "0") -
						parseInt(el?.images?.original?.width || "0");

					return (
						<img
							key={el.id}
							className={`${styles.grid__image}`}
							src={el.images.original.webp}
							alt='gif'
						/>
					);
				})}
			</div>
		</>
	);
};

export default Grid;

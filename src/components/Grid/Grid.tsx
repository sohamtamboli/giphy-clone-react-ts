import React from "react";
import styles from "./Grid.module.css";

type Props = {
	gifDataToGrid: Array<IGifInfo>;
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

const Grid = ({ gifDataToGrid }: Props) => {
	// console.log(gifDataToGrid, "grid");

	return (
		<>
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

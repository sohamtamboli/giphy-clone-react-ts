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
		fixed_width: {
			webp: string;
			height?: string;
			width?: string;
		};
	};
}

const Grid = ({ gifDataToGrid, title }: Props) => {
	// console.log(gifDataToGrid, "grid");

	let arrCol1: Array<IGifInfo> = [];
	let arrCol2: Array<IGifInfo> = [];
	gifDataToGrid.forEach((el, idx, arr) => {
		arrCol1 = arr.slice(0, 25);
		arrCol2 = arr.slice(25, 50);
	});
	console.log(arrCol1, arrCol2);

	const numberOfCols = 4;

	return (
		<>
			<div className={styles.title}>
				<img src={trendingIcon} alt='' />
				<h2>{title ? `Search results for '${title}'` : `Trending`}</h2>
			</div>
			<div className={styles.flex__container}>
				<div className={styles.arr1__flexbox}>
					{arrCol1.map((arr, idx) => (
						<img key={arr.id} src={arr.images.fixed_width.webp} alt='gif' />
					))}
				</div>
				<div className={styles.arr2__flexbox}>
					{arrCol2.map((arr, idx) => (
						<img key={arr.id} src={arr.images.fixed_width.webp} alt='gif' />
					))}
				</div>
			</div>

			{/* normal grid approach */}
			{/* <div className={styles.grid__container}>

				{gifDataToGrid.map((el, idx, arr) => {
					const gifSize =
						parseInt(el?.images?.fixed_width?.height || "0") -
						parseInt(el?.images?.fixed_width?.width || "0");

					console.log(arr.length / numberOfCols);
					return (
						<img
							key={el.id}
							className={`${styles.grid__image}`}
							src={el.images.fixed_width.webp}
							alt='gif'
						/>
					);
				})}
			</div> */}
		</>
	);
};

export default Grid;

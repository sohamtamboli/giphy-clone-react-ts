import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import Grid from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [gifData, setGifData] = useState([]);

	const [searchQuery, setSearchQuery] = useState<string>("");

	// fetch trending gif data
	useEffect(() => {
		try {
			(async () => {
				const rawData = await fetch(
					`https://api.giphy.com/v1/gifs/trending?api_key=${
						import.meta.env.VITE_API_KEY
					}&limit=75&rating=g`
				);
				const data = await rawData.json();
				setGifData(data?.data);
			})();
		} catch (err) {
			console.log(err);
		}
	}, []);

	const handleSearch = useCallback((e: { target: { value: string } }) => {
		setSearchQuery((prevVal) => (prevVal = e.target.value));
	}, []);

	const handleSearchSubmit = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		try {
			// fetch search query gif data
			console.log("submit ran");
			(async () => {
				const rawData = await fetch(
					`https://api.giphy.com/v1/gifs/search?api_key=${
						import.meta.env.VITE_API_KEY
					}&q=${searchQuery}&limit=75&offset=0&rating=g&lang=en`
				);
				const data = await rawData.json();
				console.log("searched data", data?.data);
				setGifData(data?.data);
			})();
		} catch (err) {
			console.log(err);
		}
	};

	// console.log(gifData, "data");
	return (
		<div className={styles.container}>
			<Navbar
				searchQuery={searchQuery}
				handleSearch={handleSearch}
				handleSearchSubmit={handleSearchSubmit}
			/>
			<Grid gifDataToGrid={gifData} title={searchQuery} />
		</div>
	);
}

export default App;

import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Grid from "./components/Grid/Grid";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [gifData, setGifData] = useState([]);

	// fetch user
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

	console.log(gifData);
	return (
		<div className={styles.container}>
			<Navbar />
			<Grid gifDataToGrid={gifData} />
		</div>
	);
}

export default App;

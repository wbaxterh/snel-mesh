import { useState, useEffect, useCallback } from "react";

interface Asset {
	asset_name: string;
	quantity: string;
}

export default function TopMemecoins() {
	const [topMemecoins, setTopMemecoins] = useState<Asset[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const loadTopMemecoins = useCallback(async () => {
		try {
			setLoading(true);
			const response = await fetch("http://localhost:3001/api/top-memecoins");
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const memecoins = await response.json();
			setTopMemecoins(memecoins);
		} catch (err) {
			console.error("Error fetching memecoins:", err);
			setError("Failed to load memecoins. Please try again later.");
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		loadTopMemecoins();
	}, [loadTopMemecoins]);

	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			<div className='container mx-auto'>
				<h1 className='text-4xl font-bold text-center mb-6'>
					Top 10 Memecoins on Cardano
				</h1>
				{loading ? (
					<p className='text-center'>Loading...</p>
				) : error ? (
					<p className='text-center text-red-500'>{error}</p>
				) : (
					<div className='bg-white p-6 rounded-lg shadow-lg'>
						<ul>
							{topMemecoins.map((coin, index) => (
								<li
									key={index}
									className='flex justify-between py-2 border-b last:border-b-0'
								>
									<span>{coin.asset_name || "Unknown"}</span>
									<span>
										{Intl.NumberFormat("en-US").format(
											parseInt(coin.quantity, 10)
										)}{" "}
										Tokens
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

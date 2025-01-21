import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
	const [holderCount, setHolderCount] = useState<number | null>(null);
	const [priceInUSD, setPriceInUSD] = useState<string | null>(null);
	const [priceInADA, setPriceInADA] = useState<string | null>(null);
	const [marketCap, setMarketCap] = useState<string | null>(null);

	// Helper function to format market cap
	const formatMarketCap = (value: string | null): string => {
		if (!value) return "N/A";
		const num = parseFloat(value);
		if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`; // Format in millions
		if (num >= 1e3) return `${(num / 1e3).toFixed(1)}k`; // Format in thousands
		return num.toFixed(1); // No formatting needed for small values
	};

	// Helper function to format price
	const formatPrice = (price: string | null): string => {
		if (!price) return "N/A";
		const num = parseFloat(price);
		if (num < 0.01) {
			// Format small values as fractions of a cent
			return num < 0.0001
				? `${(num * 1e6).toFixed(2)}µ¢` // Display in micro cents for very small values
				: `${(num * 100).toFixed(4)}¢`; // Display in cents
		}
		return `$${num.toFixed(4)}`; // Display regular prices normally
	};

	const formatPriceInADA = (priceInADA: string | null): string => {
		if (!priceInADA) return "N/A";
		const num = parseFloat(priceInADA);

		// if (num < 0.0001) {
		// 	return `${(num * 1e6).toFixed(2)} micro ADA`;
		// }

		return `${num} ADA`;
	};

	useEffect(() => {
		// Fetch data from the API
		const fetchData = async () => {
			try {
				// Fetch holder count
				const holderResponse = await fetch(
					`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snel-holders`
				);
				const holderData = await holderResponse.json();
				if (holderData.holders) {
					setHolderCount(holderData.holders.length);
				}

				// Fetch market cap and price data
				const marketCapResponse = await fetch(
					`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snel-marketcap`
				);
				const marketCapData = await marketCapResponse.json();
				setPriceInUSD(marketCapData.priceInUSD);
				setPriceInADA(marketCapData.priceInADA);
				setMarketCap(marketCapData.marketCap);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<main className='flex flex-col items-center justify-center min-h-screen p-6'>
			{/* Welcome Section */}
			<section className='w-full flex flex-col p-4 justify-center items-center mt-[0px]'>
				<Image
					src='/snelIconWhiteBG.png'
					alt='SNeL Memecoin Logo'
					width={200}
					height={200}
					className='mb-4'
				/>

				<h1 className='text-5xl font-bold mb-4 text-center'>Welcome to SNeL</h1>
				<p className='text-lg text-center max-w-2xl mb-8'>
					<strong>SNeL</strong> is immortal. A premium memecoin based on
					community and fairness. Built on Cardano.
				</p>

				{/* Social Icons */}
				<div className='flex space-x-4 mb-6'>
					<a
						href='https://x.com/snelcoin'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/x.svg'
							alt='Twitter X'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
					<a
						href='https://discord.gg/QGG9Z25bz7'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/discord.svg'
							alt='Discord'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center'>
					{holderCount !== null && (
						<div className='p-4 bg-white rounded-lg shadow-md'>
							<h2 className='text-2xl font-bold'>
								{holderCount.toLocaleString()}
							</h2>
							<p className='text-gray-600'>Holders</p>
						</div>
					)}
					{priceInUSD !== null && (
						<div className='p-4 bg-white rounded-lg shadow-md'>
							<h2 className='text-2xl font-bold'>
								{formatPriceInADA(priceInADA)}
							</h2>
							<p className='text-gray-600'>Price (ADA)</p>
						</div>
					)}
					{marketCap !== null && (
						<div className='p-4 bg-white rounded-lg shadow-md'>
							<h2 className='text-2xl font-bold'>
								${formatMarketCap(marketCap)}
							</h2>
							<p className='text-gray-600'>Market Cap</p>
						</div>
					)}
				</div>
			</section>
			<section>
				{/* Call-to-Action Buttons */}
				<div className='flex items-center space-4 m-2'>
					<a
						target='_blank'
						href='https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02534e654c'
						className='bg-primary text-black px-6 py-3 m-4 rounded-lg text-lg transition'
					>
						Buy $SNeL
					</a>
					<a
						href='#snel-story'
						className='text-blue-60 btn-secondary text-lg transition'
					>
						SNeL Story
					</a>
				</div>
			</section>

			{/* How to Buy Section */}
			<section id='how-to-buy' className='w-full bg-white rounded-lg p-6 mb-8'>
				<h2 className='text-3xl font-bold m-4 text-center'>How to Buy SNeL</h2>
				<ol className='list-decimal list-inside text-lg space-y-2 max-w-3xl mx-auto'>
					<li>
						Get Cardano (ADA) on a centralized exchange like{" "}
						<strong>Coinbase</strong> or <strong>Kraken</strong>.
					</li>
					<li>
						Download a Cardano wallet like <strong>Eternl</strong>,{" "}
						<strong>Vespr</strong>, <strong>Lace</strong>, or a similar wallet.
					</li>
					<li>
						Transfer your Cardano from the exchange to your wallet’s address.
					</li>
					<li>
						Visit{" "}
						<a
							href='https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02534e654c'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 underline hover:text-blue-800'
						>
							dexhunter.io
						</a>{" "}
						and swap your Cardano for SNeL!
					</li>
				</ol>
			</section>
			{/* SNeL Story*/}
			<section
				id='snel-story'
				className='w-full bg-white rounded-lg p-6 mb-8 space-y-2 max-w-3xl mx-auto'
			>
				<h2 className='text-3xl font-bold m-4 text-center'>SNeL Story</h2>
				<video
					className='w-full rounded-lg mt-4'
					controls
					poster='/memecoinVideo_thumb.png'
				>
					<source src='/memecoinVideo_1.mp4' type='video/mp4' />
					Your browser does not support the video tag.
				</video>
				<p className='p-2'>
					SNeL comes from the Immortal Snail meme, where on a podcast the
					question was asked: <br /> <br /> "What would you do if you were given
					millions of dollars and immortality? There is also an immortal snail
					that would kill you if it touched you, and won't stop until it finds
					you."
				</p>
				<p className='p-2'>
					SNeL on Cardano is the immortal snail which is coming for Snek.
				</p>
			</section>

			{/* SNeLenomics*/}
			<section id='snelenomics' className='w-full bg-white rounded-lg p-6 mb-8'>
				<h2 className='text-3xl font-bold m-4 text-center'>SNeLenomics</h2>
				<Image
					src='/snelenomics1.png'
					alt='First Image Description'
					width={1000} // The width and height can be omitted or set to 0 when using `w-full`
					height={0}
					className='w-full h-auto rounded-lg shadow-md mb-4'
				/>
				<h2 className='text-3xl font-bold m-4 text-center'>Dev Wallet</h2>
				<Image
					src='/snelenomics-dev-wallet.png'
					alt='Second Image Description'
					width={1000}
					height={0}
					className='w-full h-auto rounded-lg shadow-md'
				/>
			</section>

			{/* Footer */}
			<footer className='mt-12 text-center'>
				<p>
					<small>
						Token Policy ID:
						067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02
					</small>
					<br />
					<br />© {new Date().getFullYear()} SNeL. Built with ❤️ by the
					community. <br />
					<small>
						SNeL is a memecoin with no intrinsic value or expectation of
						financial return. There is no formal team or roadmap. The coin is
						for entertainment purposes only.
					</small>
				</p>
			</footer>
		</main>
	);
}

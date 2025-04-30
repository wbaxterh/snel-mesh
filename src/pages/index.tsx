import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
	const [holderCount, setHolderCount] = useState<number | null>(null);
	const [priceInUSD, setPriceInUSD] = useState<string | null>(null);
	const [priceInADA, setPriceInADA] = useState<string | null>(null);
	const [marketCap, setMarketCap] = useState<string | null>(null);

	const steps = [
		{
			step: "Step 1:",
			title: "Set up a Cardano-compatible wallet.",
			description:
				"$SNeL is currently unavailable on centralized exchanges. To purchase it, you'll need to obtain a Cardano wallet such as Lace, Vespr, or ETERNL and connect it to DexHunter.",
		},
		{
			step: "Step 2:",
			title: "Purchase ADA",
			description:
				"ADA is Cardano's native cryptocurrency. You can purchase through centralized exchanges like Coinbase, Kraken, or Binance, then transfer it to your wallet.",
		},
		{
			step: "Step 3:",
			title: "Trade ADA for $SNeL",
			description:
				"We suggest using DexHunter as it will find the best price path for your trade by consolidating all major liquidity sources on Cardano.",
		},
	];
	const HowToBuy = () => {
		return (
			<section id='how-to-buy' className='w-full mx-auto bg-silver p-6'>
				<h2 className='text-3xl font-bold m-4 text-center text-black'>
					How to Buy SNeL
				</h2>
				<div className='max-w-4xl mx-auto text-black'>
					{steps.map((step, index) => (
						<div key={index} className='mb-6'>
							<h2 className='text-2xl text-center text-black m-4'>
								{step.step}
							</h2>
							<h5 className='text-xl text-center m-4'>{step.title}</h5>
							<p className='mt-4'>{step.description}</p>
						</div>
					))}
				</div>
			</section>
		);
	};

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
		<main className='flex flex-col bg-primary items-center justify-center min-h-screen'>
			{/* Welcome Section */}
			<section className='w-full flex flex-col md:flex-row items-center md:items-center h-full min-h-screen p-4 bg-primary text-white'>
				{/* Left Content */}
				<div className='flex flex-col items-center md:items-start md:w-2/3 px-5 text-center md:text-left'>
					{/* Heading */}
					<h1 className='text-6xl text-black mb-4'>
						The Slow & Steady Memecoin
					</h1>
					<p className='text-lg max-w-2xl mb-8 text-black'>
						<strong>SNeL</strong> is immortal. A premium memecoin based on
						community and fairness. Built on Cardano.
					</p>

					{/* Stats */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xs mx-auto'>
						<div className='bg-white text-primary p-4 rounded-lg shadow-lg text-center'>
							<h2 className='text-2xl text-black'>{holderCount || 50}</h2>
							<p className='text-gray-600'>Holders</p>
						</div>
						<div className='bg-white text-primary p-4 rounded-lg shadow-lg text-center'>
							<h2 className='text-2xl text-black'>${marketCap || 13500}</h2>
							<p className='text-gray-600'>Market Cap</p>
						</div>
						<div className='bg-white text-primary p-4 rounded-lg shadow-lg text-center'>
							<h2 className='text-2xl text-black'>${priceInADA || 300}</h2>
							<p className='text-gray-600'>Price in ADA</p>
						</div>
					</div>

					{/* Social Icons */}
					<div className='flex space-x-4 mx-auto'>
						<a
							href='https://tiktok.com/snelcoin'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:scale-110 transition'
						>
							<Image
								src='/icons/tiktok.svg'
								alt='TikTok'
								width={40}
								height={40}
							/>
						</a>
						<a
							href='https://discord.gg/6HXsbxNE'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:scale-110 transition'
						>
							<Image
								src='/icons/discord.svg'
								alt='Discord'
								width={40}
								height={40}
							/>
						</a>
						<a
							href='https://x.com/snelcoin'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:scale-110 transition'
						>
							<Image
								src='/icons/x.svg'
								alt='Twitter X'
								width={40}
								height={40}
							/>
						</a>
					</div>
				</div>

				{/* Right Character */}
				<div className='relative md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0'>
					<div className="absolute w-full h-full bg-[url('/background.png')] bg-cover bg-center"></div>
					<Image
						src='/graphics/SnelChillGuyBG.png'
						alt='SNeL Character'
						width={500}
						height={500}
						className='relative z-10'
					/>
				</div>
			</section>

			{/* SNeL Story */}
			<section id='snel-story' className='w-full bg-secondary p-6'>
				<h2 className='text-3xl text-white font-bold m-4 text-center'>
					SNeL Story
				</h2>
				<div className='max-w-4xl mx-auto text-white'>
					<p>
						SNeL comes from the Immortal Snail meme, where on a podcast the
						question was asked:
					</p>
					<p className='pt-4'>
						"You and a super intelligent snail both get 1 million dollars, and
						you both become immortal, however you die if the snail touches you.
						It always knows where you are and slowly crawls towards you. What's
						your plan?"
					</p>
					<p className='pt-4 pb-8'>
						SNeL on Cardano is the immortal snail which is coming for Snek.
					</p>

					<video
						className='w-full rounded-lg mt-4'
						controls
						poster='/memecoinVideo_thumb.png'
					>
						<source src='/memecoinVideo_1.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>
			{/* How To Buy */}
			<HowToBuy />

			{/* SNeLenomics*/}
			<section id='snelenomics' className='w-full bg-white rounded-lg p-6 mb-8'>
				<h2 className='text-3xl font-bold m-4 text-center'>SNeLenomics</h2>
				<Image
					src='/graphics/Snelenomics.png'
					alt='Snelenomics'
					width={1000} // The width and height can be omitted or set to 0 when using `w-full`
					height={0}
					className='w-full h-auto rounded-lg shadow-md mb-4'
				/>
				<h2 className='text-3xl font-bold m-4 text-center'>Dev Wallet</h2>
				<Image
					src='/graphics/snelenomicsDev.png'
					alt='Dev Wallet'
					width={1000}
					height={0}
					className='w-full h-auto rounded-lg shadow-md'
				/>
			</section>
		</main>
	);
}

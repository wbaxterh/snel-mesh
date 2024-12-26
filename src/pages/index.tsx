import Image from "next/image";
import { FaTwitter, FaTiktok, FaDiscord, FaTelegram } from "react-icons/fa";

export default function Home() {
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
					{/* <a
						href='https://tiktok.com/@snel'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image
							src='/icons/tiktok.svg'
							alt='TikTok'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a> */}
					<a
						href='https://discord.gg/FN4s69CW'
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
					{/* <a href='https://t.me/snel' target='_blank' rel='noopener noreferrer'>
						<Image
							src='/icons/telegram.svg'
							alt='Telegram'
							width={40}
							height={40}
							className='hover:scale-110 transition'
						/>
					</a> */}
				</div>

				{/* Call-to-Action Buttons */}
				<div className='flex items-center space-4 m-2'>
					<a
						target='_blank'
						href='https://www.snek.fun/token/067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02.534e654c'
						className='bg-primary text-black px-6 py-3 m-4 rounded-lg text-lg hover:bg-blue-700 transition'
					>
						Buy $SNeL
					</a>
					<a
						href='#snel-story'
						className='text-blue-600 underline text-lg hover:text-blue-800 transition'
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
						Download a Cardano wallet like <strong>Nami</strong>,{" "}
						<strong>Vespr</strong>, or a similar wallet.
					</li>
					<li>
						Transfer your Cardano from the exchange to your wallet’s address.
					</li>
					<li>
						Visit{" "}
						<a
							href='https://www.snek.fun/token/067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02.534e654c'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-600 underline hover:text-blue-800'
						>
							snek.fun
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
					question was asked: <br /> "What would you do if you were given
					millions of dollars and immortality? And there is also an immortal
					snail that would kill you if it touched you."
				</p>
				<p className='p-2'>
					SNeL on Cardano is the immortal snail which is coming for Snek.
				</p>
				<p className='p-2'>
					SNeL has a dedicated team that will not let the project die. The team
					is here to grow slow and steady like the SNeL
				</p>
			</section>

			{/* SNeLenomics*/}
			<section id='snelenomics' className='w-full bg-white rounded-lg p-6 mb-8'>
				<h2 className='text-3xl font-bold m-4 text-center'>SNeLenomics</h2>
				<p className='text-center'>Coming soon...</p>
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

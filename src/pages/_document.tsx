import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en' className='scroll-smooth'>
			<Head>
				{/* Custom Favicon */}
				<link rel='icon' href='/favicon.png' />

				{/* Google Fonts for Geist and Geist Mono */}
				<link
					href='https://fonts.googleapis.com/css2?family=Geist:wght@400;700&family=Geist+Mono&display=swap'
					rel='stylesheet'
				/>

				{/* Meta Tags for SEO */}
				<meta
					name='description'
					content='SNeL is immortal. A premium memecoin based on community and fairness. Join the revolution on Cardano with Snek.fun.'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
			</Head>
			<body className='antialiased bg-white text-secondary'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

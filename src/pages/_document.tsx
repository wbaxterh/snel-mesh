import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en' className='scroll-smooth'>
			<Head>
				{/* Custom Favicon */}
				<link rel='icon' href='/favicon.png' />

				{/* Google Fonts */}
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Titan+One&family=Varela+Round&display=swap'
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

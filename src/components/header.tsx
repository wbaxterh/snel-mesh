import React, { useState, useEffect, useCallback } from "react";
import { CardanoWallet, useWallet } from "@meshsdk/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const { wallet, connected } = useWallet();
	const [snelBalance, setSnelBalance] = useState<string | null>(null);
	const [usdValue, setUsdValue] = useState<number | null>(null);
	const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu
	const router = useRouter();

	const SNEL_POLICY_ID =
		"067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02";

	// Fetch SNeL Balance from the Wallet
	const fetchSnelBalance = useCallback(async () => {
		try {
			if (!connected || !wallet) {
				throw new Error("Wallet is not connected or initialized.");
			}

			const balance = await wallet.getBalance();
			const snelAsset = balance.find((asset) =>
				asset.unit.startsWith(SNEL_POLICY_ID)
			);

			if (snelAsset) {
				const snelQuantity = BigInt(snelAsset.quantity);
				const formattedBalance = new Intl.NumberFormat("en-US").format(
					snelQuantity
				);
				setSnelBalance(formattedBalance);
				return Number(snelQuantity);
			} else {
				setSnelBalance("0");
				return 0;
			}
		} catch (err) {
			console.error("Error fetching SNeL balance:", err);
			return 0;
		}
	}, [connected, wallet]);

	// Fetch SNeL Price from the Market Cap API
	const fetchSnelPrice = useCallback(async () => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snel-marketcap`
			);
			const data = await response.json();
			return parseFloat(data.priceInUSD);
		} catch (err) {
			console.error("Error fetching SNeL price:", err);
			return 0;
		}
	}, []);

	// Fetch both balance and price to calculate USD value
	const fetchBalanceAndUsdValue = useCallback(async () => {
		const balance = await fetchSnelBalance();
		const price = await fetchSnelPrice();
		setUsdValue(balance * price);
	}, [fetchSnelBalance, fetchSnelPrice]);

	useEffect(() => {
		if (connected) {
			fetchBalanceAndUsdValue();
		}
	}, [connected, fetchBalanceAndUsdValue]);

	const handleSmoothScroll = async (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		targetId: string
	) => {
		e.preventDefault();

		// If we're not on the home page, navigate there first
		if (router.pathname !== "/") {
			await router.push("/");
		}

		// Then scroll to the section
		const targetElement = document.getElementById(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
			setMenuOpen(false);
		}
	};

	return (
		<header className='bg-silver text-white  py-4 shadow-md relative sticky top-0 z-50'>
			<div className='container mx-auto flex justify-between items-center px-6'>
				{/* Logo and Wallet */}
				<div className='flex items-center space-x-4'>
					<Link href='/'>
						<Image
							src='/graphics/snelPill2.png'
							alt='SNeL Memecoin Logo'
							width={125}
							height={125}
							className=''
						/>
					</Link>
					<CardanoWallet label='Connect Wallet' />
					{connected && snelBalance !== null && (
						<div className='text-sm text-black lg:ml-4'>
							<p>
								SNeL Balance: <strong>{snelBalance}</strong>
							</p>
							{usdValue !== null && (
								<p>
									Value in USD:{" "}
									<strong>
										$
										{usdValue.toLocaleString("en-US", {
											minimumFractionDigits: 2,
										})}
									</strong>
								</p>
							)}
						</div>
					)}
				</div>

				{/* Hamburger Menu */}
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className='lg:hidden focus:outline-none text-black'
				>
					<svg
						className='w-6 h-6'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				{/* Desktop Navigation Links */}
				<nav className='hidden lg:flex space-x-6 items-center text-black'>
					<a
						href='#snel-story'
						onClick={(e) => handleSmoothScroll(e, "snel-story")}
						className='hover:text-blue-300 transition'
					>
						About
					</a>
					<Link href='/blog' className='hover:text-blue-300 transition'>
						Blog
					</Link>
					<Link href='/contact' className='hover:text-blue-300 transition'>
						Contact
					</Link>
					<a
						href='https://app.dexhunter.io/swap?tokenIdSell=&tokenIdBuy=067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02534e654c'
						target='_blank'
						rel='noopener noreferrer'
						className='mr-2 px-4 py-2 bg-primary flex items-center justify-center hover:bg-primary text-black font-bold rounded'
					>
						Buy SNeL
					</a>
				</nav>
			</div>

			{/* Mobile Drawer */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out z-50`}
			>
				<div className='flex justify-between items-center p-4'>
					<h2 className='text-xl font-bold text-black'>Menu</h2>
					<button
						onClick={() => setMenuOpen(false)}
						className='text-black focus:outline-none'
					>
						<svg
							className='w-6 h-6'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<nav className='flex flex-col space-y-4 p-4 text-black'>
					<a
						href='#how-to-buy'
						onClick={(e) => handleSmoothScroll(e, "how-to-buy")}
						className='hover:text-blue-300 transition'
					>
						How To Buy
					</a>
					<Link
						href='/blog'
						className='hover:text-blue-300 transition'
						onClick={() => setMenuOpen(false)}
					>
						Blog
					</Link>
					<Link
						href='/contact'
						className='hover:text-blue-300 transition'
						onClick={() => setMenuOpen(false)}
					>
						Contact
					</Link>
				</nav>
			</div>

			{/* Overlay for closing drawer */}
			{menuOpen && (
				<div
					onClick={() => setMenuOpen(false)}
					className='fixed inset-0 bg-black bg-opacity-50 z-40'
				></div>
			)}
		</header>
	);
}

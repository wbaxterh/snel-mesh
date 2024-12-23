import React, { useState, useEffect, useCallback } from "react";
import { CardanoWallet, useWallet } from "@meshsdk/react";

export default function Header() {
	const { wallet, connected, connect, error: walletError } = useWallet();
	const [snelBalance, setSnelBalance] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const SNEL_POLICY_ID =
		"067cac6082f8661b6e14909b40590120bf0bf02c21f5d07ee03d0e02";

	// Handle wallet connection
	// const handleConnectWallet = async () => {
	// 	try {
	// 		setError(null); // Clear any existing errors
	// 		await connect("nami"); // Connect to the Nami wallet
	// 	} catch (err) {
	// 		console.error("Error connecting wallet:", err);
	// 		setError(
	// 			err instanceof Error ? err.message : "An unknown error occurred."
	// 		);
	// 	}
	// };

	// Fetch SNeL balance
	const fetchSnelBalance = useCallback(async () => {
		try {
			if (!connected || !wallet) {
				throw new Error("Wallet is not connected or initialized.");
			}

			// Fetch wallet balance
			const balance = await wallet.getBalance();
			console.log("Raw Balance:", balance);

			// Extract SNeL balance
			const snelAsset = balance.find((asset) =>
				asset.unit.startsWith(SNEL_POLICY_ID)
			);

			if (snelAsset) {
				const snelQuantity = BigInt(snelAsset.quantity); // Use BigInt for large numbers
				// Format with commas
				const formattedBalance = new Intl.NumberFormat("en-US").format(
					snelQuantity
				);
				console.log(formattedBalance);

				setSnelBalance(formattedBalance);
			} else {
				setSnelBalance("0"); // Default to 0 if SNeL is not found
			}
		} catch (err) {
			console.error("Error fetching SNeL balance:", err);
			setError(
				err instanceof Error ? err.message : "An unknown error occurred."
			);
		}
	}, [connected, wallet]);

	// Effect to fetch balance when connected
	useEffect(() => {
		if (connected) {
			console.log("wallet connected");
			fetchSnelBalance();
		}
	}, [connected, fetchSnelBalance]);

	return (
		<header className='bg-primary text-white py-4 shadow-md'>
			<div className='container mx-auto flex justify-between items-center px-6'>
				<div className='flex items-center space-x-4'>
					{/* Render CardanoWallet */}
					<CardanoWallet label='Connect Wallet' />

					{/* Display SNeL balance */}
					{connected && snelBalance !== null && (
						<p className='text-sm text-black'>
							SNeL Balance: <strong>{snelBalance}</strong>
						</p>
					)}

					{/* Display errors */}
					{/* {(error || walletError) && (
						<p className='text-red-300 text-xs'>{error || walletError}</p>
					)} */}
				</div>
				{/* Navigation Links */}
				<nav className='flex space-x-6 text-black'>
					<a href='#how-to-buy' className=' hover:text-blue-300 transition'>
						How To Buy
					</a>
					<a href='#snel-story' className='hover:text-blue-300 transition'>
						SNeL Story
					</a>
					<a href='#snelenomics' className=' hover:text-blue-300 transition'>
						SNeLenomics
					</a>
				</nav>
			</div>
		</header>
	);
}

import "@/styles/globals.css";
import "@meshsdk/react/styles.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MeshProvider>
			<Header />
			<main>
				<Component {...pageProps} />
			</main>
		</MeshProvider>
	);
}

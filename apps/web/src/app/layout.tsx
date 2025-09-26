import "../styles/global.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "@/components/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BRIDY",
	description: "Quebrando muros, construindo pontes. Participe da pesquisa!",
	metadataBase: new URL("https://bridy.com.br"),
	openGraph: {
		title: "BRIDY",
		description: "Quebrando muros, construindo pontes. Participe da pesquisa!",
		url: "https://bridy.com.br",
		siteName: "BRIDY",
		images: [
			{
				url: "/logo.jpg",
				width: 256,
				height: 256,
			},
		],
		type: "website",
	},
};

type RootLayoutProps = Readonly<{ children: ReactNode }>;

export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40 antialiased`}
			>
				<Providers>{props.children}</Providers>
			</body>
		</html>
	);
}

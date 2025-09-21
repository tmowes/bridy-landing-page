"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

type ProvidersProps = { children: ReactNode };

export default function Providers(props: ProvidersProps) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{props.children}
			<Toaster richColors />
		</ThemeProvider>
	);
}

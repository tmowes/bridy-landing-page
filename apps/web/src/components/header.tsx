"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { RainbowButton as Button } from "./ui/rainbow-button";

export default function Header() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background/60 py-3 backdrop-blur-sm">
			<div className="container mx-auto flex items-center justify-between px-4">
				<Link href="/" className="inline-flex items-center gap-3 no-underline">
					<span className="font-extrabold text-primary text-sm tracking-tight">
						BRIDY
					</span>
					<span className="hidden text-muted-foreground text-xs md:inline">
						Quebrando muros, construindo pontes
					</span>
				</Link>

				<div className="flex items-center gap-3">
					<ModeToggle />
					<Button asChild size="sm">
						<Link
							href="https://forms.gle/swwezjY1ERLxp62QA"
							target="_blank"
							rel="noreferrer"
						>
							Participar da Pesquisa
						</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}

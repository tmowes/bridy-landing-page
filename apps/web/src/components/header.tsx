import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { RainbowButton as Button } from "./ui/rainbow-button";

export function Header() {
	return (
		<header className="sticky top-0 z-40 h-20 border-b bg-background/60 backdrop-blur-sm">
			<div className="container mx-auto flex h-full flex-1 items-center justify-between px-4">
				<Link
					href="/"
					className="flex items-center justify-center gap-3 no-underline"
				>
					<span className="font-extrabold text-2xl text-primary tracking-tight">
						BRIDY
					</span>
					<span className="mt-1 hidden text-muted-foreground text-sm md:inline">
						Quebrando muros, construindo pontes ✨
					</span>
				</Link>

				<div className="flex items-center gap-3">
					<Button asChild>
						<Link
							href="https://forms.gle/swwezjY1ERLxp62QA"
							target="_blank"
							rel="noreferrer"
						>
							Participe da Pesquisa
						</Link>
					</Button>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}

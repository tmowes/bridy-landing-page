import Link from "next/link";
import { Logo } from "./logo";
import { InstagramIcon } from "@/components/icons/instagram";
import { RainbowButton as Button } from "@/components/ui/rainbow-button";

export function Footer() {
	return (
		<footer className="border-t bg-muted/30 dark:bg-primary/10">
			<div className="mask-radial-from-40% mask-radial-to-95% relative mx-auto duration-200 [--color-border:color-mix(in_oklab,var(--color-primary)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
				<div
					aria-hidden
					className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
				/>
				<div className="container mx-auto px-4 py-8">
					<div className="space-y-4 text-center">
						<span className="flex items-center justify-center space-x-4">
							<Logo className="h-5 w-auto" />
						</span>
						<p className="text-muted-foreground">
							Quebrando muros, construindo pontes
						</p>
						<div className="flex items-center justify-center space-x-4">
							<Button variant="outline" asChild>
								<Link
									href="https://instagram.com/bridyoficial"
									target="_blank"
									rel="noopener noreferrer"
								>
									<InstagramIcon />
									@bridyoficial
								</Link>
							</Button>
						</div>
						<p className="text-muted-foreground text-sm">
							© {new Date().getFullYear()} BRIDY. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

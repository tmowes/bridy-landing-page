import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import { InstagramIcon } from "@/components/icons/instagram";
import { RainbowButton as Button } from "@/components/ui/rainbow-button";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
			<HeroSection />
			<Features />

			<section className="container mx-auto px-4 py-16">
				<div className="mx-auto max-w-4xl space-y-8 text-center">
					<div className="space-y-6">
						<h2 className="text-balance font-bold text-3xl text-emerald-700 lg:text-4xl dark:text-emerald-400">
							🚀 PRONTO PARA FAZER A DIFERENÇA?
						</h2>
						<p className="text-lg text-muted-foreground">
							Sua participação é fundamental para entendermos os desafios do
							mercado e construirmos soluções reais junto com você.
						</p>
					</div>

					<div className="mt-12 space-y-6">
						<Button
							asChild
							size="lg"
							className="bg-emerald-600 px-8 py-6 text-lg hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600"
						>
							<Link
								href="https://forms.gle/swwezjY1ERLxp62QA"
								target="_blank"
								rel="noopener noreferrer"
							>
								PARTICIPE AGORA
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</Button>

						<div className="flex items-center justify-center space-x-2 text-muted-foreground">
							<InstagramIcon className="text-emerald-600" />
							<span>Siga @bridyoficial no Instagram para mais novidades</span>
						</div>
					</div>
				</div>
			</section>

			<footer className="border-t bg-muted/30">
				<div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto duration-200 [--color-border:color-mix(in_oklab,var(--color-primary)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
					<div
						aria-hidden
						className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
					/>
					<div className="container mx-auto px-4 py-8">
						<div className="space-y-4 text-center">
							<h3 className="font-bold text-2xl">BRIDY</h3>
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
								© 2025 BRIDY. Todos os direitos reservados.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

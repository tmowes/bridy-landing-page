import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Features from "@/components/features-2";
import HeroSection from "@/components/hero-section";
import { InstagramIcon } from "@/components/icons/instagram";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
			<HeroSection />
			<Features />

			{/* Impact Section */}
			<section className="container mx-auto px-4 py-16">
				<div className="mx-auto max-w-4xl space-y-8 text-center">
					<div className="mt-12 space-y-6">
						<Button asChild size="lg" className="px-8 py-6 text-lg">
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
							<InstagramIcon />
							<span>Siga @bridyoficial no Instagram</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t bg-muted/30">
				<div className="container mx-auto px-4 py-8">
					<div className="space-y-4 text-center">
						<h3 className="font-bold text-2xl">BRIDY</h3>
						<p className="text-muted-foreground">
							Quebrando muros, construindo pontes
						</p>
						<div className="flex items-center justify-center space-x-4">
							<Button variant="ghost" size="sm" asChild>
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
			</footer>
		</div>
	);
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { RainbowButton as Button } from "@/components/ui/rainbow-button";

export function CTA() {
	return (
		<section className="container mx-auto py-8">
			<div className="mx-auto max-w-4xl space-y-8 text-center">
				<div className="space-y-6">
					<h2 className="text-balance font-bold text-3xl text-primary lg:text-4xl dark:text-primary">
						PRONTO PARA FAZER A DIFERENÇA?
					</h2>
					<p className="text-balance text-lg text-muted-foreground">
						Sua participação é fundamental para entendermos os desafios do
						mercado e construirmos soluções reais junto com você.
					</p>
				</div>

				<div className="mt-12 space-y-6">
					<Button asChild className="px-8 py-6 text-lg">
						<Link
							href="https://forms.gle/swwezjY1ERLxp62QA"
							target="_blank"
							rel="noopener noreferrer"
						>
							PARTICIPE AGORA
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

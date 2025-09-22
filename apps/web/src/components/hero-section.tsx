import type { Variants } from "motion/react";
import Link from "next/link";

import { Logo } from "./logo";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { RainbowButton as Button } from "@/components/ui/rainbow-button";
import { TextEffect } from "@/components/ui/text-effect";

const transitionVariants: { item: Variants } = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

export function HeroSection() {
	return (
		<main className="overflow-hidden py-6">
			<div
				aria-hidden
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
				<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>
			<section>
				<div className="relative">
					<AnimatedGroup
						variants={{
							container: {
								visible: {
									transition: {
										delayChildren: 1,
									},
								},
							},
							item: {
								hidden: {
									opacity: 0,
									y: 20,
								},
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										type: "spring",
										bounce: 0.3,
										duration: 2,
									},
								},
							},
						}}
						className="mask-b-from-35% mask-b-to-90% -z-20 absolute inset-0 top-56 lg:top-32"
					>
						<div />
					</AnimatedGroup>

					<div
						aria-hidden
						className="-z-10 absolute inset-0 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
					/>

					<div className="@container container mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
						<div className="text-center">
							<div className="mx-auto max-w-3xl text-balance py-4 text-muted-foreground">

								<AnimatedGroup
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
									className="mt-6 flex flex-col items-center justify-center gap-3  sm:items-center lg:justify-start"
								>
									<Logo className="h-12 w-auto px-8" />
								</AnimatedGroup>
								

								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="p"
									className="max-w-3xl text-base text-muted-foreground py-6"
								>
									✨ Quebrando muros, construindo pontes
								</TextEffect>

								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="p"
									className="max-w-3xl text-base text-muted-foreground"
								>
									🔎 Estudando desafios e oportunidades em diferentes áreas
								</TextEffect>

								<AnimatedGroup
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
									className="mt-6 flex flex-col items-center justify-center gap-3  sm:items-center lg:justify-start"
								>
									<Button asChild className="px-8 py-6 text-lg">
										<Link
											href="https://forms.gle/swwezjY1ERLxp62QA"
											target="_blank"
											rel="noreferrer"
										>
											Participe da pesquisa
										</Link>
									</Button>

									<Button variant="outline" asChild>
										<Link
											href="https://instagram.com/bridyoficial"
											target="_blank"
											rel="noopener noreferrer"
										>
											Siga @bridyoficial
										</Link>
									</Button>
								</AnimatedGroup>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

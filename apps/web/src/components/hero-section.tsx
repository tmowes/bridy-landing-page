import type { Variants } from "motion/react";
import Link from "next/link";
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

export default function HeroSection() {
	return (
		<main className="overflow-hidden">
			<div
				aria-hidden
				className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
			>
				<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-140 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="-rotate-45 absolute top-0 left-0 h-320 w-60 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
				<div className="-translate-y-87.5 -rotate-45 absolute top-0 left-0 h-320 w-60 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>
			<section>
				<div className="relative pt-24 md:pt-36">
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

					<div className="mx-auto max-w-7xl px-6">
						<div className="grid grid-cols-1 gap-8 text-center sm:mx-auto lg:mt-0 lg:mr-auto lg:grid-cols-2 lg:text-left">
							<div className="space-y-6">
								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="h1"
									className="bg-gradient-to-r from-primary to-accent bg-clip-text font-extrabold text-5xl text-transparent leading-tight md:text-6xl"
								>
									BRIDY
								</TextEffect>

								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="p"
									className="max-w-2xl text-lg text-muted-foreground"
								>
									✨ Quebrando muros, construindo pontes — estudamos desafios e
									oportunidades para gerar insights que transformem como as
									pessoas trabalham.
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
									className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
								>
									<div className="rounded-[calc(var(--radius-xl)+0.125rem)] border bg-foreground/10 p-0.5">
										<Button
											asChild
											size="lg"
											className="rounded-xl px-5 text-base"
										>
											<Link
												href="https://forms.gle/swwezjY1ERLxp62QA"
												target="_blank"
												rel="noopener noreferrer"
											>
												Participe da Pesquisa
											</Link>
										</Button>
									</div>

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

							<aside
								className="pointer-events-none hidden h-72 w-full rounded-lg md:block lg:ml-8"
								style={{
									backgroundImage: "url('/textures/mint-pattern.svg')",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
								}}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

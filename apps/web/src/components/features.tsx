import { MessageCircle, Target, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function Features() {
	return (
		<section>
			<div className="@container container mx-auto py-8">
				<div className="text-center">
					<h2 className="text-balance font-semibold text-4xl text-foreground/80 lg:text-5xl">
						Conheça a <span className="text-primary">BRIDY</span>
					</h2>
					<p className="mx-auto max-w-3xl text-balance py-4 text-muted-foreground">
						Um grupo de pesquisa independente focado em gerar insights que
						transformem como as pessoas trabalham
					</p>
				</div>
				<div className="mx-auto grid @min-4xl:max-w-full max-w-sm @min-4xl:grid-cols-3 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center dark:[--color-muted:var(--color-zinc-900)]">
					<Card className="group border-0 bg-gradient-to-br from-primary/10 to-primary/20 shadow-none dark:from-primary/20 dark:to-primary/10">
						<CardHeader>
							<div className="-mt-6 h-24">
								<CardDecorator>
									<Users className="size-6 text-primary" aria-hidden />
								</CardDecorator>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-balance text-muted-foreground text-sm">
								Somos a <strong>BRIDY</strong>, um grupo de pesquisa
								independente que busca compreender de forma mais profunda os
								desafios enfrentados por diferentes profissionais em seu dia a
								dia.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gradient-to-br from-primary/10 to-primary/20 shadow-none dark:from-primary/20 dark:to-primary/10">
						<CardHeader>
							<div className="-mt-6 h-24">
								<CardDecorator>
									<Target className="size-6 text-primary" aria-hidden />
								</CardDecorator>
							</div>
						</CardHeader>

						<CardContent>
							<p className="text-balance text-muted-foreground text-sm">
								Nosso objetivo é ouvir profissionais de diferentes áreas,
								entender suas rotinas, dificuldades e necessidades. A partir
								disso, buscamos mapear padrões e gerar insights que possam
								orientar transformações reais no mercado.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-0 bg-gradient-to-br from-primary/10 to-primary/20 shadow-none dark:from-primary/20 dark:to-primary/10">
						<CardHeader>
							<div className="-mt-6 h-24">
								<CardDecorator>
									<MessageCircle className="size-6 text-primary" aria-hidden />
								</CardDecorator>
							</div>
						</CardHeader>

						<CardContent>
							<p className="text-balance text-muted-foreground text-sm">
								<strong>AJUDE A GERAR IMPACTO!</strong>
								<br />
								Participe da nossa pesquisa! Usaremos os dados para revelar
								desafios, entender necessidades e gerar soluções reais.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
	<div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
		<div
			aria-hidden
			className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
		/>

		<div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l bg-background">
			{children}
		</div>
	</div>
);

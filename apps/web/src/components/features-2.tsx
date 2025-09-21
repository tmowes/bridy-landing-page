import { MessageCircle, Target, Users } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Features() {
	return (
		<section className="py-16 md:py-32">
			<div className="@container mx-auto max-w-5xl px-6">
				<div className="text-center">
					<h2 className="text-balance font-semibold text-4xl lg:text-5xl">
						QUEM NÓS SOMOS?
					</h2>
					<p className="mx-auto mt-4 max-w-3xl">
						Somos a <span className="font-semibold text-primary">BRIDY</span>,
						um grupo de pesquisa independente que busca compreender de forma
						mais profunda os desafios enfrentados por diferentes profissionais
						em seu dia a dia.
					</p>
				</div>
				<div className="mx-auto mt-8 grid @min-4xl:max-w-full max-w-sm @min-4xl:grid-cols-3 gap-6 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Users className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Ouvir Profissionais</h3>
						</CardHeader>

						<CardContent>
							<p className="text-sm">
								Entendemos as rotinas e dificuldades de diferentes áreas
								profissionais, coletando percepções que geram insights
								acionáveis.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<Target className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Mapear Padrões</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">
								Identificamos tendências e oportunidades que orientam melhorias
								reais no mercado e nas formas de trabalho.
							</p>
						</CardContent>
					</Card>

					<Card className="group border-0 shadow-none">
						<CardHeader className="pb-3">
							<CardDecorator>
								<MessageCircle className="size-6" aria-hidden />
							</CardDecorator>

							<h3 className="mt-6 font-medium">Gerar Soluções</h3>
						</CardHeader>

						<CardContent>
							<p className="mt-3 text-sm">
								A partir dos dados e análises, propomos soluções e recomendações
								que podem orientar transformações reais.
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

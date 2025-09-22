import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
	return (
		<>
			<main className="flex-1 bg-gradient-to-br from-background to-muted/20">
				<HeroSection />
				<Features />
				<CTA />
			</main>
			<Footer />
		</>
	);
}

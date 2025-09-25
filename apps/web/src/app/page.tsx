import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import Head from "next/head";

export default function Home() {
  return (
	<div className="flex min-h-svh flex-col bg-primary/15">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-background to-muted/20">
        <HeroSection />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
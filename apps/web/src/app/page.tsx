import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://bridy.com.br'),
  title: 'BRIDY',
  description: 'Quebrando muros, construindo pontes. Participe da pesquisa!',
  openGraph: {
    title: 'BRIDY',
    description: 'Quebrando muros, construindo pontes. Participe da pesquisa!',
    url: 'https://bridy.com.br',
    siteName: 'BRIDY',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'BRIDY - Quebrando muros, construindo pontes',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

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
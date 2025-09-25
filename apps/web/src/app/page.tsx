import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import Head from "next/head";

export default function Home() {
  return (
	<div className="flex min-h-svh flex-col bg-primary/15">
      <Head>
        <title>BRIDY</title>
        <meta name="description" content="Quebrando muros, construindo pontes. Participe da pesquisa!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OG Tags */}
        <meta property="og:title" content="BRIDY" />
        <meta
          property="og:description"
          content="Quebrando muros, construindo pontes. Participe da pesquisa!"
        />
        <meta property="og:image" content="https://bridy.com.br/LogoOG.png" /> {/* URL absoluta da imagem */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://bridy.com.br" /> {/* Substitua pela URL real */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="BRIDY" />

      </Head>
	  
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
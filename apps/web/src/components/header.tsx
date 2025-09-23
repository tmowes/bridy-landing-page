// components/header.tsx
import Link from "next/link";
import Script from "next/script";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { RainbowButton as Button } from "./ui/rainbow-button";

export function Header() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DJ93S761NS"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DJ93S761NS');
          console.log('Google Analytics initialized');
        `}
      </Script>

      <header className="sticky top-0 z-40 h-20 border-b bg-background/60 backdrop-blur-sm">
        <div className="container mx-auto flex h-full flex-1 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 no-underline"
          >
            <span className="font-extrabold text-2xl text-primary tracking-tight">
              <Logo className="h-5 w-auto" />
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild>
              <Link
                href="https://forms.gle/swwezjY1ERLxp62QA"
                target="_blank"
                rel="noreferrer"
              >
                Participe da Pesquisa
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}

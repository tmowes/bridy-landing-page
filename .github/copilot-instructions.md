# Bridy Landing Page - AI Agent Instructions

## Architecture Overview
This is a Turborepo monorepo containing a single Next.js 15 web application in `apps/web/`. The app uses the App Router with client-side components marked with `"use client"`.

**Key Structure:**
- `apps/web/src/app/` - Next.js App Router pages and layouts
- `apps/web/src/components/` - Custom components (header, providers, etc.)
- `apps/web/src/components/ui/` - shadcn/ui components (button, card, etc.)
- `apps/web/src/libs/` - Utility libraries (shadcn.ts for class merging)
- `apps/web/src/styles/` - Global CSS with Tailwind v4 and custom design tokens

## Development Workflow
- **Package Manager:** Bun (not npm/yarn)
- **Commands:** Use `bun dev` (runs on port 3001), `bun build`, `bun check` (Biome lint/format), `bun check-types`
- **Linting/Formatting:** Biome with tab indentation, auto-organize imports enabled
- **Build System:** Turborepo orchestrates tasks across the monorepo

## Component Patterns
- **Path Aliases:** `@/*` maps to `./src/*` (configured in `tsconfig.json`)
- **Styling:** Tailwind CSS v4 with OKLCH color space design tokens
- **UI Library:** shadcn/ui with Radix UI primitives, configured in `components.json`
- **Component Variants:** Use `class-variance-authority` (CVA) for variant props
- **Class Merging:** Always use `cn()` utility from `@/libs/shadcn` for conditional classes
- **Icons:** Lucide React icons
- **Forms:** @tanstack/react-form with Zod validation
- **Theme:** next-themes with system preference detection

## Layout & Structure
- **Root Layout:** CSS Grid with `[auto_1fr]` rows (header + content)
- **Providers:** ThemeProvider and Toaster wrapped in `src/components/providers.tsx`
- **Fonts:** Geist Sans/Mono loaded in layout
- **Hydration:** `suppressHydrationWarning` on html element for theme compatibility

## Key Files
- `apps/web/components.json` - shadcn/ui configuration (New York style, RSC disabled)
- `apps/web/tsconfig.json` - TypeScript config with `@/*` path mapping
- `biome.json` - Linting/formatting rules (tabs, organize imports)
- `turbo.json` - Build pipeline configuration
- `bunfig.toml` - Bun configuration (isolated linker)

## Code Style Examples
```tsx
// Component with variants
const buttonVariants = cva("base-classes", {
  variants: { variant: { default: "styles", outline: "styles" } }
})

// Conditional classes
<div className={cn("base", condition && "conditional")} />

// Client component
"use client";
import { useState } from "react";
```

## Dependencies to Note
- Next.js 15 with typed routes enabled
- React 19 with TypeScript
- Tailwind CSS v4 (not v3)
- @tanstack/react-query for data fetching
- next-themes for dark/light mode
- Sonner for toast notifications</content>
<parameter name="filePath">d:\dev\_techstarts\forms\bridy-landing-page\.github\copilot-instructions.md

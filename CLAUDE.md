# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite and Cloudflare Workers
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run Biome linter and formatter
- `npm run preview` - Build and preview production version locally
- `npm run deploy` - Build and deploy to Cloudflare Workers
- `npm run cf-typegen` - Generate TypeScript types for Cloudflare Workers

## Architecture Overview

This is a full-stack application for generating system architecture diagrams through natural language conversation, built with React frontend and Cloudflare Workers backend.

### Frontend-Backend Communication
- **Frontend**: React app built with Vite, served as static assets
- **Backend**: Cloudflare Workers using Hono framework at `/worker/index.ts`
- **Type Safety**: Hono RPC client (`src/lib/client.ts`) provides end-to-end type safety between frontend and backend
- **API Routes**: Backend exports `AppType` for client-side type inference

### Key Components
- **Main App**: `src/app.tsx` - Primary React component
- **UI Components**: `src/components/ui/` - shadcn/ui components with Radix UI
- **Worker**: `worker/index.ts` - Hono-based API server
- **Client**: `src/lib/client.ts` - Type-safe API client using Hono RPC

### Development Setup
- **Formatting**: Biome with tab indentation and double quotes
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Path Aliases**: `@/` maps to `src/` directory
- **TypeScript**: Strict configuration with separate configs for app, worker, and Node.js

### Deployment
- Frontend and backend deploy together as a single Cloudflare Workers application
- Vite builds static assets, Workers serves both static files and API routes
- Configuration in `wrangler.jsonc` with main entry at `worker/index.ts`

## Project Purpose

Building a conversational tool that generates system architecture diagrams from natural language prompts, with:
- Chat interface for iterative diagram construction
- Export to draw.io-compatible formats (SVG/XML)
- LLM integration for natural language interpretation
- Low-cost hosting on Cloudflare infrastructure
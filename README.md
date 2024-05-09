# Template Next.js App Router

# With Material UI, Theme color mode, Supabase and Protected router

## Created with

```sh
pnpm dlx create-next-app template-nextjs
```

## Packages

```bash
# Prettier
pnpm add prettier -D
# EsLint with Prettier
pnpm add eslint-config-prettier -D
# Material UI
pnpm add @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/material-nextjs @emotion/cache
# supabase
pnpm add @supabase/auth-ui-react @supabase/ssr @supabase/supabase-js
# Keeping Server-only Code out of the Client Environment
pnpm add server-only
```

## pnpm install is used to install all dependencies for a project.

```bash
pnpm i
```

# Requirements

<p>
Login enabled with Google only (edit if necessary).<br />
Edit .env.local-example with your Supabase Key. <br />
You need the profile table in supabase for page profile.
</p>


## First, run the development server:

```bash
pnpm dev
```

# Build for production and launch server

```bash
pnpm build
pnpm start
```

# cf-react-template

A template brining you:

- Vite/react `packages/frontend/`
- API, using hono in `packages/api/`

This allows for a super simple way to deploy a react app to Cloudflare
including backend functions.

## Build

```
bun run build
```

## Development

```
bun dev
```

## Deploy

```
bun run build && bunx wrangler pages deploy dist/
```

Go to `Worker & Pages` in your Cloudflare account > `pages` > `Connecto to GIT`.

### Build configuration:

**Build command:** `bun run build`
**Build output directory:** `/frontend/dist`
**Root directory:** `/`

# Deploying to Cloudflare Pages

This site deploys to Cloudflare Pages (project **`gandara-realtor`**, custom
domains `gandara-realtor.com` / `www.gandara-realtor.com`).

## How deploys happen

- **Automatic (source of truth)** — the Pages project is **Git-connected** to
  `CuriousCoreJoe/Gandara-Realtor`. Every push to `main` auto-builds and deploys
  via Cloudflare's own CI. This is the normal deploy path.
- **Manual (override)** — the CLI deploy below is a **manual override** for when
  you want to ship from your machine instead of waiting on a git push. Two deploy
  paths exist by design, but only one (the git integration) is automatic.

There is deliberately **no GitHub Actions CI** — it would double-deploy alongside
Cloudflare's git integration.

## One-time setup

```bash
bunx wrangler login
```

This opens a browser to authorize Wrangler against your Cloudflare account. It is
only needed once per machine.

## Deploy

```bash
bun run deploy        # = bun run build && bunx wrangler pages deploy --branch main
```

The `--branch main` flag pins the deploy as a **production** deployment (rather
than Wrangler inferring production vs. preview from your local git branch, which
can produce surprise `*.pages.dev` preview URLs).

## Rollback

```bash
bunx wrangler pages deployment rollback
```

Wrangler lists recent deployments and prompts you to pick which one to roll back
to. (Rolling back to an earlier production deployment immediately re-serves it.)

## Creating the CI API token

> Not required while deploys flow through Cloudflare's git integration — this is
> for when/if you later add a manual CI path against the Pages API.

1. Cloudflare dashboard → **My Profile** → **API Tokens** → **Create Token** →
   **Create Custom Token**.
2. Permissions: **Account → Cloudflare Pages → Edit**.
3. Restrict it to the account that owns `gandara-realtor`, then create the token.
4. Store the token as a repo/CI secret (`CLOUDFLARE_API_TOKEN`) along with your
   `CLOUDFLARE_ACCOUNT_ID`. Never commit either value.

## Obsolete files

- `netlify.toml` — legacy Netlify config (build command, publish dir, CSP-lite,
  redirects). Left in place for reference; no longer used now that hosting is on
  Cloudflare Pages. Safe to delete once the Cloudflare setup is confirmed stable.
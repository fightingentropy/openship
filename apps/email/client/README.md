

## Cloudflare CLI

Use `bun run build:worker`, `bun run deploy:dry-run`, and `bun run deploy` for the static email client. Node runs the CLIs. The default target remains `zero`; named deployments require matching build `--env` and cf `--mode` values. These upstream template targets have not been published by this migration.

Pinned CLI: `cf@1.0.0-beta.17` on Node 22.18 or newer. `cf auth login` is separate from Wrangler login. Verify the selected account before remote operations. Deployment settings live in `cloudflare.config.ts`; keep the original Wrangler configuration for local data and any remaining Wrangler commands.

The explicit Wrangler builder reads the new TypeScript configuration and writes `.cloudflare/output/v0/` using `--experimental-new-config --experimental-cf-build-output`. Deployment then uses `cf deploy --prebuilt`. This preserves custom build steps and avoids the beta CLI's framework detection choosing an unrelated frontend build. Use the package scripts rather than bare `cf build` or `cf deploy` in these mixed projects.

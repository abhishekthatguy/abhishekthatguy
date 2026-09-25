# Project Notes

## Dev / Verification

- Dev server: `yarn dev --port 3001` (port 3000 is a different project).
- IMPORTANT: never run `yarn build` while `next dev` is running — they share `.next/` and the build corrupts the dev server's chunks (500s, `e[o] is not a function` errors). If a build is needed, run it, then `rm -rf .next` and restart the dev server.
- Tests: `yarn test` (Jest + RTL, 5 suites / 43 tests) — safe to run while dev server is up.
- After implementation always verify: `yarn test`, `curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/` plus route checks (`/contact`, `/skills/<id>`, `/projects/<id>`), and grep rendered HTML for expected content.

## Contact form flow

- Form → `NEXT_PUBLIC_WEBHOOK_URL` (local n8n at `http://localhost:5678/webhook/contact`) → fallback `/api/send-mail` (Nodemailer) on webhook failure.
- Email validation enforced at 3 layers: client, `/api/send-mail`, n8n IF gate — see `src/utils/emailValidation.js`. Placeholder/disposable domains are rejected.
- `NEXT_PUBLIC_*` vars are inlined at build time — must exist before `next build`/deploy.

## n8n

- Local instance: `http://localhost:5678` (runs detached; logs `/tmp/n8n-restart.log`).
- Workflow file: `workflows/contact-form.json` — re-import via `n8n import:workflow` + `n8n publish:workflow` + restart after edits.
- Webhook nodes need a `webhookId` UUID or they register under a mangled composite path.

# Contact form flow (architecture)

Contact form submissions follow this flow:

```
Portfolio (Frontend)
        ↓
Webhook API (n8n)
        ↓
Postgres
        ↓
Email / WhatsApp / CRM
```

## Layer 1: Portfolio → Webhook (this repo)

- **Portfolio (frontend)** submits the form via `POST` to the URL in **`.env`**.
- All URLs are configured in `.env` (no hardcoded endpoints).

### Env (first layer)

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEBHOOK_URL` | Yes | Full URL of your n8n webhook (e.g. `https://your-n8n.com/webhook/contact`). The form POSTs here. |

### Payload sent to webhook

`POST` body (JSON):

- `name` (string)
- `email` (string)
- `subject` (string)
- `message` (string)

Headers: `Content-Type: application/json`, `Accept: application/json`.

### Behaviour

- Form submits to **`NEXT_PUBLIC_WEBHOOK_URL`** (n8n webhook) first.
- If the variable is not set, the form shows a configuration error and does not send.
- **If the webhook fails** (network error, non-2xx, or error response), the app falls back to **Nodemailer**: it calls `POST /api/send-mail` with the same form data. If that succeeds, you still get an email notification. Configure `MAIL_*` and `RECIPIENT_EMAIL` in `.env` for the fallback.

### Fallback: Nodemailer (this repo)

- **`/api/send-mail`** (Next.js API route) sends the form payload via SMTP (e.g. Gmail) when the webhook fails.
- Env: `MAIL_SERVER`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_FROM`, `RECIPIENT_EMAIL`. See `.env.example`.

## Layers 2–4 (outside this repo)

- **Webhook (n8n)** receives the payload, then:
  - Writes to **Postgres**
  - Triggers **Email / WhatsApp / CRM** as you configure in n8n.

All webhook and backend URLs stay in your environment (e.g. n8n, Postgres, CRM); this repo only implements the first layer (frontend → webhook).

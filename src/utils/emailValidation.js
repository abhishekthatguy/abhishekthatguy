// Shared email validation for the contact form (client) and /api/send-mail (server).
// Blocks placeholder/test domains and common disposable providers so junk
// submissions never reach the webhook or trigger emails.

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

const BLOCKED_TLDS = new Set(['test', 'invalid', 'example', 'localhost', 'local']);

const BLOCKED_DOMAINS = new Set([
  // RFC 2606 / placeholder domains
  'example.com',
  'example.org',
  'example.net',
  'example.edu',
  'example.io',
  'test.com',
  'test.org',
  'test.net',
  'test.dev',
  'invalid.com',
  'localhost',
  // Common disposable providers
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  'temp-mail.org',
  '10minutemail.com',
  'yopmail.com',
  'maildrop.cc',
  'trashmail.com',
  'fakeinbox.com',
  'sharklasers.com',
  'getnada.com',
  'dispostable.com',
  'tempinbox.com',
  'mailnesia.com',
  'mintemail.com',
  'throwawaymail.com',
  'moakt.com',
  'spamgourmet.com',
  'mytemp.email',
  'tempail.com',
  'emailondeck.com',
  'mailsac.com',
  'harakirimail.com',
  'inboxalias.com',
]);

const isBlockedDomain = (domain) => {
  if (!domain) return true;
  if (BLOCKED_TLDS.has(domain.split('.').pop())) return true;
  const parts = domain.split('.');
  // exact match or any parent domain of a blocked domain (e.g. x.mailinator.com)
  for (let i = 0; i < parts.length - 1; i++) {
    if (BLOCKED_DOMAINS.has(parts.slice(i).join('.'))) return true;
  }
  return false;
};

export const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;
  const trimmed = email.trim().toLowerCase();
  if (trimmed.length > 254 || !EMAIL_RE.test(trimmed)) return false;
  return !isBlockedDomain(trimmed.split('@')[1]);
};

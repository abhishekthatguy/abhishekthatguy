import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Contact from '@/components/Contact';

// Mock useThemeStyles to avoid theme/DOM side effects
jest.mock('@/hooks/useThemeStyles', () => ({
  useThemeStyles: () => ({
    themeStyles: {
      sectionBg: 'bg-gray-900',
      headingText: 'text-white',
      descriptionText: 'text-gray-300',
      mutedText: 'text-gray-500',
      subtitleGradient: 'linear-gradient(90deg, #FE7743, #00D9FF)',
    },
    effectiveTheme: 'dark',
  }),
}));

const WEBHOOK_URL = 'https://webhook.test/contact';

describe('Contact', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    global.fetch = jest.fn();
    process.env = { ...originalEnv, NEXT_PUBLIC_WEBHOOK_URL: WEBHOOK_URL };
  });

  afterEach(() => {
    jest.restoreAllMocks();
    process.env = originalEnv;
  });

  it('renders contact section with form fields', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('updates form fields when user types', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Doe', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@gmail.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message', name: 'message' } });
    expect(screen.getByLabelText(/name/i)).toHaveValue('Jane Doe');
    expect(screen.getByLabelText(/email/i)).toHaveValue('jane@gmail.com');
    expect(screen.getByLabelText(/message/i)).toHaveValue('Test message');
  });

  it('submits form and shows success message on success', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: 'Message saved successfully' }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@gmail.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hi', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        WEBHOOK_URL,
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: expect.stringContaining('Jane'),
        })
      );
    });
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it('falls back to email when webhook URL is not configured', async () => {
    process.env.NEXT_PUBLIC_WEBHOOK_URL = '';
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@gmail.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hi', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/send-mail', expect.any(Object));
  });

  it('shows error and does not submit for fake/disposable email domains', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hi', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('shows error when webhook returns error and mail fallback fails', async () => {
    global.fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: false, message: 'Validation failed' }),
      })
      .mockResolvedValueOnce({ ok: false });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@gmail.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hi', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send message|could not reach our system/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenNthCalledWith(1, WEBHOOK_URL, expect.any(Object));
    expect(global.fetch).toHaveBeenNthCalledWith(2, '/api/send-mail', expect.any(Object));
  });

  it('shows success when webhook fails but mail fallback succeeds', async () => {
    global.fetch
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true }),
      });
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane', name: 'name' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@gmail.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hi', name: 'subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenNthCalledWith(2, '/api/send-mail', expect.any(Object));
  });
});

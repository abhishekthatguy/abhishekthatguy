import { renderHook, act } from '@testing-library/react';
import { useTheme } from '@/hooks/useTheme';

describe('useTheme', () => {
  const originalMatchMedia = window.matchMedia;
  const originalLocalStorage = window.localStorage;

  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    window.localStorage = originalLocalStorage;
  });

  it('returns theme and setTheme', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current).toHaveProperty('theme');
    expect(result.current).toHaveProperty('setTheme');
    expect(result.current).toHaveProperty('toggleTheme');
    expect(result.current).toHaveProperty('getEffectiveTheme');
    expect(result.current).toHaveProperty('mounted');
  });

  it('setTheme rejects invalid theme and does not update', () => {
    const { result } = renderHook(() => useTheme());
    const initialTheme = result.current.theme;
    act(() => {
      result.current.setTheme('invalid');
    });
    expect(result.current.theme).toBe(initialTheme);
  });

  it('setTheme updates to valid theme', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.setTheme('dark');
    });
    expect(result.current.theme).toBe('dark');
    act(() => {
      result.current.setTheme('light');
    });
    expect(result.current.theme).toBe('light');
  });

  it('getEffectiveTheme returns theme when not system', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.setTheme('dark');
    });
    expect(result.current.getEffectiveTheme()).toBe('dark');
  });
});

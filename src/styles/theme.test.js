import { getThemeStyles } from '@/styles/theme';

describe('getThemeStyles', () => {
  it('returns dark theme styles when effectiveTheme is dark', () => {
    const styles = getThemeStyles('dark');
    expect(styles).toBeDefined();
    expect(styles.radialGradient).toContain('rgba(0,0,0,');
    expect(styles.abhishekGradient).toContain('#FE7743');
    expect(styles.overlayGradient).toContain('black');
  });

  it('returns light theme styles when effectiveTheme is light', () => {
    const styles = getThemeStyles('light');
    expect(styles).toBeDefined();
    expect(styles.radialGradient).toContain('rgba(249, 250, 251,');
    expect(styles.overlayGradient).toContain('gray-50');
  });

  it('returns consistent structure for both themes', () => {
    const darkKeys = Object.keys(getThemeStyles('dark'));
    const lightKeys = Object.keys(getThemeStyles('light'));
    expect(darkKeys).toEqual(lightKeys);
  });
});

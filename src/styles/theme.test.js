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
    expect(styles.radialGradient).toContain('rgba(255,255,255,');
    expect(styles.overlayGradient).toContain('white');
  });

  it('returns consistent structure for both themes', () => {
    const darkKeys = Object.keys(getThemeStyles('dark'));
    const lightKeys = Object.keys(getThemeStyles('light'));
    expect(darkKeys).toEqual(lightKeys);
  });
});

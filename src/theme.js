export const colors = {
  primary: '#4F46E5',
  secondary: '#F97316',
  background: '#F5F5F7',
  cardBackground: '#FFFFFF',
  text: '#000000',
  textLight: '#FFFFFF',
  textMuted: '#6B7280',
  border: '#E0E0E0',
};

export const spacingRaw = {
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
  },
};

export const borderRadius = {
  small: 8,
  medium: 16,
  large: 24,
};

// Provide a spacing function for compatibility with theme.spacing(n)
export const spacing = (n) => (typeof n === 'number' ? n * 8 : spacingRaw.medium);

// Default theme object for `import theme from '../theme'` usage
const theme = {
  colors,
  spacing,
  spacingRaw,
  typography,
  borderRadius,
  radius: borderRadius,
};

// Defensive global assignment in case some modules read global.theme
try {
  if (typeof global !== 'undefined' && !global.__APP_THEME__) {
    global.__APP_THEME__ = theme;
    if (!global.theme) global.theme = theme;
  }
} catch (e) {
  // ignore
}

export default theme;
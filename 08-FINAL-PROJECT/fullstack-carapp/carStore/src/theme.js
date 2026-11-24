import { Platform, StatusBar } from 'react-native';

export const colors = {
  bg: '#0A0A0D',
  surface: '#141419',
  surfaceRaised: '#1C1C24',
  surfaceSoft: 'rgba(255,255,255,0.045)',
  border: 'rgba(255,255,255,0.09)',
  borderStrong: 'rgba(255,255,255,0.16)',
  text: '#F5F5F7',
  textMuted: '#9A9AA6',
  textDim: '#6B6B78',
  accent: '#FF5C1A',
  accentSoft: 'rgba(255,92,26,0.14)',
  accentBorder: 'rgba(255,92,26,0.36)',
  white: '#FFFFFF',
  black: '#000000',
  success: '#3DDC97',
  overlay: 'rgba(8,8,11,0.66)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 22,
  xxl: 32,
  xxxl: 48,
};

export const radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
};

export const text = {
  h1: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: -0.8,
    color: colors.text,
  },
  h2: {
    fontSize: 21,
    lineHeight: 27,
    fontWeight: '700',
    letterSpacing: -0.4,
    color: colors.text,
  },
  h3: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: -0.2,
    color: colors.text,
  },
  body: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: colors.textMuted,
  },
  sm: {
    fontSize: 12.5,
    lineHeight: 18,
    fontWeight: '400',
    color: colors.textMuted,
  },
  label: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: colors.textDim,
  },
  price: {
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '700',
    letterSpacing: -0.3,
    color: colors.accent,
  },
};

export const shadow = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
  },
  android: { elevation: 8 },
  default: {},
});

export const layout = {
  screenPadding: spacing.xl,
  topInset:
    Platform.OS === 'android' ? (StatusBar.currentHeight || 26) + 8 : 56,
  tabBarHeight: 66,
};

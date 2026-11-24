import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing, text } from '../theme';
import Icon from './Icon';

export function PrimaryButton({ label, onPress, style, icon = 'chevron-right' }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.primary,
        pressed && { opacity: 0.85, transform: [{ scale: 0.99 }] },
        style,
      ]}
    >
      <Text style={styles.primaryLabel}>{label}</Text>
      {icon ? (
        <View style={styles.primaryIcon}>
          <Icon name={icon} size={14} color={colors.white} />
        </View>
      ) : null}
    </Pressable>
  );
}

export function GhostButton({ label, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.ghost,
        pressed && { backgroundColor: colors.surfaceRaised },
        style,
      ]}
    >
      <Text style={styles.ghostLabel}>{label}</Text>
    </Pressable>
  );
}

export function IconButton({ name, onPress, size = 40, color = colors.text }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={({ pressed }) => [
        styles.iconButton,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && { opacity: 0.7 },
      ]}
    >
      <Icon name={name} size={size * 0.45} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  primary: {
    height: 54,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  primaryLabel: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: -0.1,
    color: colors.white,
  },
  primaryIcon: {
    marginLeft: 2,
    marginTop: 1,
  },
  ghost: {
    height: 54,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghostLabel: {
    ...text.h3,
    fontSize: 15,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.border,
  },
});

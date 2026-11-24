import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';
import Icon from './Icon';

const TABS = [
  { key: 'Home', icon: 'home', label: 'Home' },
  { key: 'Explore', icon: 'search', label: 'Explore' },
  { key: 'Saved', icon: 'heart', label: 'Saved' },
  { key: 'Profile', icon: 'user', label: 'Profile' },
];

export default function TabBar({ active, onChange, badge }) {
  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View style={styles.bar}>
        {TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <Pressable
              key={tab.key}
              onPress={() => onChange(tab.key)}
              style={({ pressed }) => [styles.item, pressed && { opacity: 0.7 }]}
            >
              <View style={styles.iconWrap}>
                <Icon
                  name={tab.icon}
                  size={21}
                  color={isActive ? colors.white : colors.textDim}
                />
                {tab.key === 'Saved' && badge > 0 ? (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badge}</Text>
                  </View>
                ) : null}
              </View>
              <Text style={[styles.label, isActive && styles.labelActive]}>
                {tab.label}
              </Text>
              <View style={[styles.dot, isActive && styles.dotActive]} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.lg,
    paddingBottom: Platform.OS === 'ios' ? 24 : spacing.md,
  },
  bar: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: radius.xl,
    backgroundColor: 'rgba(20,20,25,0.97)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  iconWrap: {
    width: 26,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 9.5,
    fontWeight: '700',
    color: colors.white,
  },
  label: {
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 0.1,
    color: colors.textDim,
  },
  labelActive: {
    color: colors.white,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'transparent',
  },
  dotActive: {
    backgroundColor: colors.accent,
  },
});

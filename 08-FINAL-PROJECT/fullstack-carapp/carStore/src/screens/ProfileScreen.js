import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import { colors, radius, spacing, text } from '../theme';
import { initials } from '../utils/format';

const MENU = [
  { label: 'Edit profile', icon: 'user' },
  { label: 'Payment methods', icon: 'filter' },
  { label: 'Notifications', icon: 'star' },
  { label: 'Help & support', icon: 'location' },
];

const STATS = [
  { value: '6', label: 'Test drives' },
  { value: '12', label: 'Viewed' },
  { value: '3', label: 'Offers' },
];

function Row({ label, icon, onPress, danger }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && { opacity: 0.7 }]}
    >
      <View style={[styles.rowIcon, danger && styles.rowIconDanger]}>
        <Icon name={icon} size={14} color={danger ? colors.accent : colors.textMuted} />
      </View>
      <Text style={[styles.rowLabel, danger && { color: colors.accent }]}>
        {label}
      </Text>
      <Icon name="chevron-right" size={12} color={colors.textDim} />
    </Pressable>
  );
}

export default function ProfileScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={[text.label, { paddingHorizontal: spacing.xl }]}>
          Account
        </Text>

        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials('Alex Cole')}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={text.h2}>Alex Cole</Text>
            <Text style={[text.sm, { marginTop: 2 }]}>alex.cole@email.com</Text>
          </View>
          <View style={styles.verified}>
            <Icon name="check" size={10} color={colors.success} />
            <Text style={styles.verifiedText}>Verified</Text>
          </View>
        </View>

        <View style={styles.stats}>
          {STATS.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <View style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
              {index < STATS.length - 1 ? <View style={styles.statDivider} /> : null}
            </React.Fragment>
          ))}
        </View>

        <Text style={[text.label, styles.sectionLabel]}>Settings</Text>
        <View style={styles.group}>
          {MENU.map((item, index) => (
            <View key={item.label}>
              <Row label={item.label} icon={item.icon} onPress={() => {}} />
              {index < MENU.length - 1 ? <View style={styles.divider} /> : null}
            </View>
          ))}
        </View>

        <View style={[styles.group, { marginTop: spacing.lg }]}>
          <Row label="Sign out" icon="close" danger onPress={() => {}} />
        </View>

        <Text style={styles.footer}>CarStore · v1.0.0</Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.xl,
    paddingBottom: 130,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.accent,
  },
  verified: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacing.sm,
    height: 24,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(61,220,151,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(61,220,151,0.28)',
  },
  verifiedText: {
    fontSize: 10.5,
    fontWeight: '700',
    color: colors.success,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xxl,
    marginHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  statValue: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.text,
  },
  statLabel: {
    ...text.sm,
    fontSize: 11.5,
    color: colors.textDim,
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: colors.border,
  },
  sectionLabel: {
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  group: {
    marginHorizontal: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    height: 58,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowIconDanger: {
    backgroundColor: colors.accentSoft,
  },
  rowLabel: {
    ...text.h3,
    fontSize: 14.5,
    fontWeight: '500',
    flex: 1,
  },
  divider: {
    height: 1,
    marginLeft: spacing.lg + 32 + spacing.md,
    backgroundColor: colors.border,
  },
  footer: {
    ...text.sm,
    fontSize: 11,
    textAlign: 'center',
    color: colors.textDim,
    marginTop: spacing.xxl,
  },
});

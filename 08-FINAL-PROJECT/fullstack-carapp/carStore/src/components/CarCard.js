import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, shadow, spacing, text } from '../theme';
import { formatKm, money } from '../utils/format';
import Icon from './Icon';
import Rating from './Rating';

function Heart({ active, onPress, size = 32, style }) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={10}
      style={({ pressed }) => [
        styles.heart,
        { width: size, height: size, borderRadius: size / 2 },
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <Icon name="heart" size={size * 0.42} color={active ? colors.accent : colors.white} />
    </Pressable>
  );
}

export function FeaturedCard({
  car,
  width,
  onPress,
  onToggleFavorite,
  favorite,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ width }, pressed && { opacity: 0.94 }]}
    >
      <View style={[styles.hero, { width }]}>
        <Image source={{ uri: car.image }} style={styles.heroImage} />
        <View style={styles.heroShade} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{car.badge}</Text>
        </View>
        <Heart active={favorite} onPress={onToggleFavorite} style={styles.heroHeart} />
      </View>

      <View style={styles.featuredBody}>
        <View style={styles.featuredTitleRow}>
          <Text style={[text.h3, styles.flex]} numberOfLines={1}>
            {car.name}
          </Text>
          <Rating value={car.rating} />
        </View>
        <Text style={styles.meta}>
          {car.year} · {formatKm(car.mileage)} · {car.fuel}
        </Text>
        <View style={styles.priceRow}>
          <Text style={text.price}>{money(car.price)}</Text>
          <Text style={styles.monthly}>${car.monthly}/mo</Text>
        </View>
      </View>
    </Pressable>
  );
}

export function CompactCard({ car, onPress, onToggleFavorite, favorite }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.compact, pressed && { opacity: 0.9 }]}
    >
      <Image source={{ uri: car.image }} style={styles.compactImage} />
      <View style={styles.compactBody}>
        <Text style={[text.h3, { fontSize: 15 }]} numberOfLines={1}>
          {car.name}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {car.year} · {formatKm(car.mileage)}
        </Text>
        <View style={[styles.priceRow, { marginTop: 'auto' }]}>
          <Text style={[text.price, { fontSize: 16 }]}>{money(car.price)}</Text>
        </View>
      </View>
      <Heart
        active={favorite}
        onPress={onToggleFavorite}
        size={28}
        style={styles.compactHeart}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, paddingRight: spacing.sm },
  hero: {
    height: 208,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.surfaceRaised,
    ...shadow,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.16)',
  },
  badge: {
    position: 'absolute',
    top: spacing.md,
    left: spacing.md,
    paddingHorizontal: spacing.md,
    height: 26,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(10,10,13,0.72)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
    color: colors.white,
  },
  heart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(10,10,13,0.6)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
  },
  heroHeart: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
  },
  featuredBody: {
    paddingTop: spacing.md,
  },
  featuredTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meta: {
    ...text.sm,
    marginTop: 3,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  monthly: {
    ...text.sm,
    fontSize: 11.5,
    color: colors.textDim,
  },
  compact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  compactImage: {
    width: 92,
    height: 84,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceRaised,
  },
  compactBody: {
    flex: 1,
    height: 84,
    paddingVertical: 2,
  },
  compactHeart: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

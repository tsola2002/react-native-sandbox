import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { PrimaryButton } from '../components/Button';
import Icon from '../components/Icon';
import Rating from '../components/Rating';
import Screen from '../components/Screen';
import { useApp } from '../context/AppContext';
import { cars } from '../data/cars';
import { colors, layout, radius, spacing, text } from '../theme';
import { formatKm, initials, money } from '../utils/format';

const SPEC_LABELS = {
  acceleration: '0–100 km/h',
  power: 'Power',
  transmission: 'Transmission',
  fuel: 'Fuel',
};

export default function CarDetailsScreen({ params }) {
  const { goBack, toggleFavorite, isFavorite } = useApp();
  const { width } = useWindowDimensions();
  const car = params?.car || cars[0];
  const favorite = isFavorite(car.id);

  const specs = ['acceleration', 'power', 'transmission', 'fuel'].map((key) => ({
    key,
    label: SPEC_LABELS[key],
    value: car[key],
  }));

  return (
    <Screen noTopInset>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={[styles.hero, { width }]}>
          <Image source={{ uri: car.image }} style={styles.heroImage} />
          <View style={styles.heroShade} />
          <View style={[styles.heroControls, { top: layout.topInset - 8 }]}>
            <Pressable
              onPress={goBack}
              hitSlop={8}
              style={({ pressed }) => [styles.circleButton, pressed && { opacity: 0.7 }]}
            >
              <Icon name="chevron-left" size={15} color={colors.white} />
            </Pressable>
            <View style={styles.heroControlsRight}>
              <Pressable
                hitSlop={8}
                onPress={() => toggleFavorite(car.id)}
                style={({ pressed }) => [styles.circleButton, pressed && { opacity: 0.7 }]}
              >
                <Icon
                  name="heart"
                  size={15}
                  color={favorite ? colors.accent : colors.white}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>
              {car.year} · {car.brand}
            </Text>
          </View>
        </View>

        <View style={styles.sheet}>
          <View style={styles.titleRow}>
            <Text style={[text.h1, styles.title]}>{car.name}</Text>
          </View>

          <View style={styles.metaRow}>
            <View style={styles.locationRow}>
              <Icon name="location" size={12} color={colors.textDim} />
              <Text style={[text.sm, { fontSize: 12 }]}>{car.location}</Text>
            </View>
            <Rating value={car.rating} reviews={car.reviews} />
          </View>

          <View style={styles.priceRow}>
            <View>
              <Text style={styles.priceValue}>{money(car.price)}</Text>
              <Text style={styles.priceSub}>
                or ${car.monthly}/mo · 60 months
              </Text>
            </View>
            <View style={styles.mileagePill}>
              <Text style={styles.mileageText}>{formatKm(car.mileage)}</Text>
            </View>
          </View>

          <View style={styles.specGrid}>
            {specs.map((spec) => (
              <View key={spec.key} style={styles.specCard}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>

          <Text style={[text.h3, styles.blockTitle]}>Overview</Text>
          <Text style={text.body}>{car.description}</Text>

          <Text style={[text.h3, styles.blockTitle]}>Seller</Text>
          <View style={styles.sellerRow}>
            <View style={styles.sellerAvatar}>
              <Text style={styles.sellerInitials}>{initials(car.dealer)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={styles.sellerNameRow}>
                <Text style={[text.h3, { fontSize: 14.5 }]}>{car.dealer}</Text>
                {car.verified ? (
                  <View style={styles.verifiedDot}>
                    <Icon name="check" size={8} color={colors.success} />
                  </View>
                ) : null}
              </View>
              <Text style={[text.sm, { fontSize: 12 }]}>
                {car.verified ? 'Verified dealer · ' : ''}Responds in ~1h
              </Text>
            </View>
            <Pressable
              style={({ pressed }) => [styles.chatButton, pressed && { opacity: 0.7 }]}
            >
              <Text style={styles.chatText}>Chat</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={{ flex: 1 }}>
          <Text style={styles.footerLabel}>Total price</Text>
          <Text style={styles.footerPrice}>{money(car.price)}</Text>
        </View>
        <PrimaryButton
          label="Book test drive"
          style={{ flex: 1.2 }}
          onPress={() => {}}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 130,
  },
  hero: {
    height: 322,
    backgroundColor: colors.surfaceRaised,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  heroShade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.28)',
  },
  heroControls: {
    position: 'absolute',
    left: spacing.xl,
    right: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroControlsRight: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(10,10,13,0.62)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBadge: {
    position: 'absolute',
    left: spacing.xl,
    bottom: spacing.xl,
    height: 26,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(10,10,13,0.66)',
    borderWidth: 1,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.4,
    color: colors.white,
  },
  sheet: {
    marginTop: -28,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    backgroundColor: colors.bg,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.8,
    color: colors.accent,
  },
  priceSub: {
    ...text.sm,
    fontSize: 12,
    color: colors.textDim,
    marginTop: 2,
  },
  mileagePill: {
    height: 32,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mileageText: {
    ...text.sm,
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
  specGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  specCard: {
    flexBasis: '47%',
    flexGrow: 1,
    padding: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
  },
  specLabel: {
    ...text.label,
    fontSize: 10,
    letterSpacing: 0.8,
  },
  specValue: {
    ...text.h3,
    fontSize: 15,
    fontWeight: '600',
  },
  blockTitle: {
    marginTop: spacing.xxl,
    marginBottom: spacing.sm,
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sellerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellerInitials: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.accent,
  },
  sellerNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  verifiedDot: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(61,220,151,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    height: 34,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: colors.text,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: Platform.OS === 'ios' ? 28 : spacing.lg,
    backgroundColor: 'rgba(10,10,13,0.97)',
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  footerLabel: {
    ...text.label,
    fontSize: 9.5,
  },
  footerPrice: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.4,
    color: colors.text,
    marginTop: 2,
  },
});

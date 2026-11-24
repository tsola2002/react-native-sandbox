import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { CompactCard, FeaturedCard } from '../components/CarCard';
import ChipRow from '../components/Chip';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import { useApp } from '../context/AppContext';
import { cars, categories } from '../data/cars';
import { colors, radius, spacing, text } from '../theme';
import { initials } from '../utils/format';

function SectionHeader({ title, action, onAction }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={text.h2}>{title}</Text>
      {action ? (
        <Pressable onPress={onAction} hitSlop={8} style={styles.sectionAction}>
          <Text style={styles.sectionActionText}>{action}</Text>
          <Icon name="chevron-right" size={11} color={colors.accent} />
        </Pressable>
      ) : null}
    </View>
  );
}

export default function HomeScreen() {
  const { navigate, toggleFavorite, isFavorite, favorites, setTab } = useApp();
  const [category, setCategory] = useState('All');
  const { width } = useWindowDimensions();

  const cardWidth = Math.min(width - 64, 330);
  const featured = cars.slice(0, 4);
  const nearby = cars.slice(4);

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <View style={styles.locationRow}>
              <Icon name="location" size={13} color={colors.accent} />
              <Text style={styles.locationText}>Lagos, Nigeria</Text>
            </View>
            <Text style={[text.h1, { marginTop: 6 }]}>
              Find your{'\n'}dream car
            </Text>
          </View>
          <Pressable
            onPress={() => setTab('Profile')}
            style={({ pressed }) => [styles.avatar, pressed && { opacity: 0.8 }]}
          >
            <Text style={styles.avatarText}>{initials('Alex Cole')}</Text>
          </Pressable>
        </View>

        <View style={styles.searchWrap}>
          <SearchBar editable={false} onPress={() => setTab('Explore')} />
        </View>

        <ChipRow
          items={categories}
          value={category}
          onChange={setCategory}
          contentStyle={{ paddingTop: spacing.lg }}
        />

        <SectionHeader
          title="Featured"
          action="See all"
          onAction={() => setTab('Explore')}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth + spacing.md}
          decelerationRate="fast"
          contentContainerStyle={styles.carousel}
        >
          {featured.map((car) => (
            <FeaturedCard
              key={car.id}
              car={car}
              width={cardWidth}
              favorite={isFavorite(car.id)}
              onToggleFavorite={() => toggleFavorite(car.id)}
              onPress={() => navigate('CarDetails', { car })}
            />
          ))}
        </ScrollView>

        <SectionHeader
          title="Popular near you"
          action="See all"
          onAction={() => setTab('Explore')}
        />

        <View style={styles.list}>
          {nearby.map((car) => (
            <CompactCard
              key={car.id}
              car={car}
              favorite={isFavorite(car.id)}
              onToggleFavorite={() => toggleFavorite(car.id)}
              onPress={() => navigate('CarDetails', { car })}
            />
          ))}
        </View>

        <Pressable
          onPress={() => setTab('Saved')}
          style={({ pressed }) => [styles.savedBanner, pressed && { opacity: 0.9 }]}
        >
          <View style={{ flex: 1 }}>
            <Text style={styles.savedTitle}>Saved cars</Text>
            <Text style={styles.savedSub}>
              {favorites.length} {favorites.length === 1 ? 'car' : 'cars'} in your
              shortlist
            </Text>
          </View>
          <Icon name="chevron-right" size={14} color={colors.textDim} />
        </Pressable>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.md,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.sm,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  locationText: {
    ...text.label,
    letterSpacing: 1.2,
    color: colors.textMuted,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xs,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.accent,
  },
  searchWrap: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.xxl,
    marginBottom: spacing.lg,
  },
  sectionAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  sectionActionText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: colors.accent,
  },
  carousel: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.xl,
    gap: spacing.md,
  },
  savedBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginHorizontal: spacing.xl,
    marginTop: spacing.xxl,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  savedTitle: {
    ...text.h3,
    fontSize: 15,
  },
  savedSub: {
    ...text.sm,
    marginTop: 2,
  },
});

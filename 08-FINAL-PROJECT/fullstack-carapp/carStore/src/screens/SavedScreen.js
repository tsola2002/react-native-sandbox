import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CompactCard } from '../components/CarCard';
import { PrimaryButton } from '../components/Button';
import Icon from '../components/Icon';
import Screen from '../components/Screen';
import { useApp } from '../context/AppContext';
import { cars } from '../data/cars';
import { colors, radius, spacing, text } from '../theme';

export default function SavedScreen() {
  const { favorites, navigate, toggleFavorite, isFavorite, setTab } = useApp();
  const saved = cars.filter((car) => favorites.includes(car.id));

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={text.label}>Shortlist</Text>
        <View style={styles.titleRow}>
          <Text style={[text.h1, { marginTop: 6 }]}>Saved cars</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{saved.length}</Text>
          </View>
        </View>
      </View>

      {saved.length === 0 ? (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Icon name="heart" size={26} color={colors.accent} />
          </View>
          <Text style={[text.h3, { marginTop: spacing.lg }]}>
            Nothing saved yet
          </Text>
          <Text style={[text.sm, styles.emptyCopy]}>
            Tap the heart on any listing to keep it here for later.
          </Text>
          <PrimaryButton
            label="Browse cars"
            style={{ marginTop: spacing.xl, alignSelf: 'stretch' }}
            onPress={() => setTab('Explore')}
          />
        </View>
      ) : (
        <FlatList
          data={saved}
          keyExtractor={(item) => item.id}
          style={styles.flex}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CompactCard
              car={item}
              favorite={isFavorite(item.id)}
              onToggleFavorite={() => toggleFavorite(item.id)}
              onPress={() => navigate('CarDetails', { car: item })}
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  counter: {
    minWidth: 26,
    height: 26,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.accent,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 120,
    gap: spacing.md,
  },
  empty: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.accentSoft,
    borderWidth: 1,
    borderColor: colors.accentBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCopy: {
    textAlign: 'center',
    marginTop: spacing.sm,
    maxWidth: 240,
  },
  flex: {
    flex: 1,
  },
});

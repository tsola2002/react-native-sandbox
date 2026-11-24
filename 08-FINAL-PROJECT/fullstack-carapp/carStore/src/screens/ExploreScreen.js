import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CompactCard } from '../components/CarCard';
import ChipRow from '../components/Chip';
import Screen from '../components/Screen';
import SearchBar from '../components/SearchBar';
import { useApp } from '../context/AppContext';
import { cars, categories } from '../data/cars';
import { colors, spacing, text } from '../theme';

export default function ExploreScreen() {
  const { navigate, toggleFavorite, isFavorite } = useApp();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return cars.filter((car) => {
      const inCategory = category === 'All' || car.category === category;
      const inQuery =
        !needle ||
        `${car.name} ${car.brand} ${car.category} ${car.location}`
          .toLowerCase()
          .includes(needle);
      return inCategory && inQuery;
    });
  }, [query, category]);

  return (
    <Screen>
      <View style={styles.header}>
        <Text style={text.label}>Browse</Text>
        <Text style={[text.h1, { marginTop: 6 }]}>Explore cars</Text>
      </View>

      <View style={styles.searchWrap}>
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder="Search by make, model or city"
        />
      </View>

      <ChipRow
        items={categories}
        value={category}
        onChange={setCategory}
        contentStyle={{ paddingTop: spacing.lg }}
      />

      <View style={styles.countRow}>
        <Text style={text.sm}>
          {results.length} {results.length === 1 ? 'result' : 'results'}
        </Text>
        <Text style={styles.sort}>Newest first</Text>
      </View>

      <FlatList
        data={results}
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
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={text.h3}>No cars matched</Text>
            <Text style={[text.sm, { marginTop: 6, textAlign: 'center' }]}>
              Try a different keyword or pick another category.
            </Text>
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  searchWrap: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  countRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
  },
  sort: {
    ...text.sm,
    fontWeight: '600',
    color: colors.text,
  },
  list: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 120,
    gap: spacing.md,
  },
  flex: {
    flex: 1,
  },
  empty: {
    alignItems: 'center',
    paddingTop: spacing.xxxl,
  },
});

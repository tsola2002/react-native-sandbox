import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, text } from '../theme';
import Icon from './Icon';

export default function Rating({ value, reviews, compact = false }) {
  return (
    <View style={styles.row}>
      <Icon name="star" size={compact ? 11 : 13} color={colors.accent} />
      <Text style={[styles.value, compact && styles.valueCompact]}>
        {value.toFixed(1)}
      </Text>
      {reviews != null ? (
        <Text style={styles.reviews}>({reviews})</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  value: {
    ...text.sm,
    fontWeight: '700',
    color: colors.text,
  },
  valueCompact: {
    fontSize: 11.5,
  },
  reviews: {
    ...text.sm,
    fontSize: 11.5,
    color: colors.textDim,
  },
});

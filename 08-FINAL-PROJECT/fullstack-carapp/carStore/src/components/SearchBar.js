import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, radius, spacing, text } from '../theme';
import Icon from './Icon';

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search make, model or keyword',
  onPress,
  editable = true,
  onSubmitEditing,
}) {
  const content = (
    <View style={styles.field}>
      <Icon name="search" size={17} color={colors.textDim} />
      {editable ? (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textDim}
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={onSubmitEditing}
          selectionColor={colors.accent}
        />
      ) : (
        <Text style={styles.placeholder}>{placeholder}</Text>
      )}
      <Pressable style={styles.filterButton} hitSlop={8} onPress={onPress}>
        <Icon name="filter" size={16} color={colors.white} />
      </Pressable>
    </View>
  );

  if (!editable) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => pressed && { opacity: 0.8 }}>
        {content}
      </Pressable>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  field: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingLeft: spacing.lg,
    paddingRight: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    ...text.sm,
    fontSize: 14,
    color: colors.text,
    padding: 0,
  },
  placeholder: {
    flex: 1,
    ...text.sm,
    fontSize: 14,
    color: colors.textDim,
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

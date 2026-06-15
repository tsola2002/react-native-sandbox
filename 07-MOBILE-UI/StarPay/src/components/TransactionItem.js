import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{transaction.icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.time}>{transaction.time}</Text>
      </View>
      <Text style={[styles.amount, { color: colors.danger }]}>
        ${transaction.amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0e6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: colors.gray,
  },
  amount: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default TransactionItem;

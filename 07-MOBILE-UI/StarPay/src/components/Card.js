import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Card = ({ card }) => {
  const isDebit = card.type === 'Debit Card';

  return (
    <View style={[styles.container, { backgroundColor: card.bgColor }]}>
      <View style={styles.header}>
        <Text style={[styles.cardType, { color: card.textColor }]}>
          {card.type}
        </Text>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={[styles.label, { color: card.textColor }]}>
            {isDebit ? 'Total Balance' : 'Total Limit'}
          </Text>
          <Text style={[styles.amount, { color: card.textColor }]}>
            ${isDebit ? card.balance : card.limit}
          </Text>
        </View>
        {isDebit && (
          <View style={styles.icon}>
            <Text style={styles.iconText}>👁</Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={[styles.provider, { color: card.textColor }]}>
            {card.provider}
          </Text>
          <Text style={[styles.cardNumber, { color: card.textColor }]}>
            {card.cardNumber}
          </Text>
        </View>
        {!isDebit && (
          <View style={styles.dot}>
            <View style={styles.whiteDot} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    minHeight: 200,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 20,
  },
  cardType: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  amount: {
    fontSize: 28,
    fontWeight: '700',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  provider: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardNumber: {
    fontSize: 12,
    fontWeight: '500',
  },
  dot: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
  },
});

export default Card;

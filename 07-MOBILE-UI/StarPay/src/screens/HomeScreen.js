import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import ContactCard from '../components/ContactCard'
import TransactionItem from '../components/TransactionItem'
import colors from "../constants/colors";
import { cardsData } from '../data/cards'
import { transactionsData, contactsData } from '../data/transactions'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      {/* Cards Section */}
      <View style={styles.cardsSection}>
        {cardsData.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </View>

      {/* Transfer Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Transfer</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.contactsScroll}>
        {contactsData.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ScrollView>

      {/* Transactions Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Transactions</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={styles.transactionsSection}>
        {transactionsData.map(transaction => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  cardsSection: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.gray,
  },
  contactsScroll: {
    marginBottom: 24,
    marginLeft: -20,
    paddingLeft: 20,
  },
  transactionsSection: {
    marginBottom: 80,
  },
});

export default HomeScreen
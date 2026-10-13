import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card';
import { cardsData } from '../data/cards';
import { colors } from '../constants/colors';

const HomeScreen = () => {
  return (
    <ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      {/* Card Section */}
      <View style={styles.cardSection}>
        {cardsData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </View>

    </ScrollView>
  );
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
    fontFamily: "Poppins",
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: "Poppins",
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


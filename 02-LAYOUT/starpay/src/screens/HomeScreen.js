import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      {/* Card Section */}
      <View style={styles.cardSection}>

      </View>

    </ScrollView>
  );
}



export default HomeScreen

const styles = StyleSheet.create({})
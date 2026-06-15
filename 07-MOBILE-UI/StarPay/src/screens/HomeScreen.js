import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import colors from "../constants/colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  }
});

export default HomeScreen
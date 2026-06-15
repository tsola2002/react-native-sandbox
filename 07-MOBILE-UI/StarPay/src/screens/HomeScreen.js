import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import colors from "../constants/colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
  },
  subText: {
    color: colors.gray,
    marrginTop: 4,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius:25,
  }
});

export default HomeScreen
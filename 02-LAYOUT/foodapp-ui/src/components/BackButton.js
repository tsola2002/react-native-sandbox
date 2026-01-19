import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { s } from 'react-native-size-matters';
import React from 'react'

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="chevron-left" size={s(16)} color="black" />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        height: s(32),
        width: s(32),
        borderRadius: s(16),
        backgroundColor: "#ECF0F4",
        justifyContent:"center",
        alignItems: "center"
    }
})
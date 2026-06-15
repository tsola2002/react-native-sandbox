import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.container}>

        <Image source={require("../../assets/images/avatar.png")} style={ styles.avatar} />
          
      <View>
        <Text style={styles.greeting}>Good Evening</Text>
        <Text style={styles.subText}>Nicolas Smith</Text>      
      </View>
          

    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
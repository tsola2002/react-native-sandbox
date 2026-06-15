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

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        marginBottom: 20,
    },
    greeting: {
       fontSize: 22,
       fontWeight: "700",
       color: colors.text, 
    },
    subText: {
        color: colors.gray,
        marginTop: 4,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
    },
})
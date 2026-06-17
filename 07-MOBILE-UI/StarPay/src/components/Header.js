import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from "../constants/colors";
import BellIcon from "../../assets/icons/bell-icon.svg";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image source={require("../../assets/images/avatar.png")} style={styles.avatar} />
        <View>
          <Text style={styles.greeting}>Good Evening</Text>
          <Text style={styles.subText}>Nicolas Smith</Text>
        </View>
      </View>
      <BellIcon width={24} height={24} color={colors.text} />
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
        justifyContent: "space-between",
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    greeting: {
       fontSize: 14,
       fontWeight: "400",
       fontFamily: "Poppins",
       color: colors.gray,
    },
    subText: {
        color: colors.text,
        marginTop: 4,
        fontSize: 16,
        fontFamily: "PoppinsBold",
        fontWeight: "600",
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 12,
    },
    bell: {
        fontSize: 24,
    },
})
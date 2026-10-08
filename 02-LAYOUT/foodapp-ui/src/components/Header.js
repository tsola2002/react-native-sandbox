import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import BellIcon from "../assets/icons/bell-icon.svg";

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftSection}>
              <Image source={require('../assets/avatar.png')}  style={styles.avatar} />
              <View>
                  <Text style={styles.greeting}>Good Evening</Text>
                  <Text style={styles.subText}>Nicolas Smith</Text>
              </View>
        </View>
        <BellIcon width={24} height={24} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {},
    leftSection: {},
    greeting{},
    subText: {}
})
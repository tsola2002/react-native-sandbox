import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import UserAvatar from '../components/UserAvatar'
import BackButton from '../components/BackButton'

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <BackButton/>
            <UserAvatar/>          
        </View> 
    </View>
  )
}

export default ContactUsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,     // ✅ takes full screen width
        marginTop: vs(50),
        paddingHorizontal: s(17),
    },
    header: {
        flexDirection: "row",
        justifyContent:"space-between"
    }
})
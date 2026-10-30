import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is our Profile Screen</Text>
        </View>

        // <View style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}>
        //     <Text style={{ fontSize: 24, marginBottom: 20 }}>
        //         ProfileScreen
        //     </Text>
        //     <Button
        //         title="Go Back"
        //         onPress={() => navigation.goBack()}
        //     />
        // </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
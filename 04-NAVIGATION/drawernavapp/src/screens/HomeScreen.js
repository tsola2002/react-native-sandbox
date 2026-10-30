import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ padding: 20 }}>
            <Button
                title="Open Menu"
                onPress={() => navigation.openDrawer()}
            />
            <Button
                title="Close Menu"
                onPress={() => navigation.closeDrawer()}
            />
            <Button
                title="Toggle Menu"
                onPress={() => navigation.toggleDrawer()}
            />
        </View>     
    );
}

export default HomeScreen

const styles = StyleSheet.create({

    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 20,
    // },
    // title: {
    //     fontSize: 24,
    //     marginBottom: 20,
    // }
})
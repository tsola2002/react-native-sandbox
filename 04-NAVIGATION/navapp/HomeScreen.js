import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Go to Profiles" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}

export default HomeScreen
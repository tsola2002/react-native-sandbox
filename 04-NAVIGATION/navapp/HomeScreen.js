import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Button title="Go to Profiles" onPress={() => navigation.navigate("Profile")} />
    </View>
  )
}

export default HomeScreen
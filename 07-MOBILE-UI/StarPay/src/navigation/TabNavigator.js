import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import StatsScreen from '../screens/StatsScreen';
import CardsScreen from '../screens/CardsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
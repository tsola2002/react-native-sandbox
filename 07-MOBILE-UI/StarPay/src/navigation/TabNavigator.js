import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import StatsScreen from '../screens/StatsScreen';
import CardsScreen from '../screens/CardsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon = '';
          if (route.name === 'Home') icon = '🏠';
          else if (route.name === 'Stats') icon = '📊';
          else if (route.name === 'Wallet') icon = '💳';
          else if (route.name === 'Profile') icon = '👤';

          return <Text style={{ fontSize: 20 }}>{icon}</Text>;
        },
        tabBarLabel: ({ focused }) => {
          const labels = {
            Home: 'Home',
            Stats: 'Statistics',
            Wallet: 'Wallet',
            Profile: 'Profile',
          };
          return (
            <Text style={{
              fontSize: 11,
              fontWeight: '500',
              color: focused ? colors.text : colors.gray,
              marginTop: 4,
            }}>
              {labels[route.name]}
            </Text>
          );
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.lightGray,
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 16,
          height: 70,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Wallet" component={CardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
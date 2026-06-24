import { View, Text } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import StatsScreen from '../screens/StatsScreen';
import CardsScreen from '../screens/CardsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../constants/colors';
import HomeIcon from "../../assets/icons/home-icon.svg";
import WalletIcon from "../../assets/icons/wallet-icon.svg";
import StatIcon from "../../assets/icons/stat-icon.svg";
import ProfileIcon from "../../assets/icons/profile-icon.svg";
import CustomersScreen from '../screens/CustomersScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 75,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 0,
          elevation: 8,
          shadowOpacity: 0.08,
        },

        tabBarIcon: ({ focused }) => {
          const iconColor = focused ? "#181D31" : "#A7AEC1";
          const iconSize = 24;

          switch (route.name) {
            case "Home":
              return (
                <HomeIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );

            case "Wallet":
              return (
                <WalletIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );

            case "Stats":
              return (
                <StatIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );

            case "Profile":
              return (
                <ProfileIcon
                  width={iconSize}
                  height={iconSize}
                  color={iconColor}
                />
              );

            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stats" component={CustomersScreen} />
      <Tab.Screen name="Wallet" component={CardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
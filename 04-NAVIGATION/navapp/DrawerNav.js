import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
          <Drawer.Screen
              name="Dashboard"
              component={Tabs}
          />
    </Drawer.Navigator>
  )
}

export default DrawerNav
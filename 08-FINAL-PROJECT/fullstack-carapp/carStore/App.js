import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabBar from './src/components/TabBar';
import { AppProvider, useApp } from './src/context/AppContext';
import CarDetailsScreen from './src/screens/CarDetailsScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedScreen from './src/screens/SavedScreen';
import { colors } from './src/theme';

const TAB_SCREENS = {
  Home: HomeScreen,
  Explore: ExploreScreen,
  Saved: SavedScreen,
  Profile: ProfileScreen,
};

const STACK_SCREENS = {
  CarDetails: CarDetailsScreen,
};

function Shell() {
  const { tab, setTab, stack, favorites } = useApp();
  const top = stack.length ? stack[stack.length - 1] : null;
  const CurrentScreen = top ? STACK_SCREENS[top.name] : TAB_SCREENS[tab];

  return (
    <View style={styles.root}>
      <CurrentScreen key={top ? top.key : tab} params={top?.params} />
      {!top ? (
        <TabBar active={tab} onChange={setTab} badge={favorites.length} />
      ) : null}
    </View>
  );
}

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="light" />
      <Shell />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

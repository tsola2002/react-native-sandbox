import react from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View  } from 'react-native';
import styles from './style';
import Box from './Box';
import IntroScreen from "./src/screens/IntroScreen";

export default function App() {
  return (
    <IntroScreen/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

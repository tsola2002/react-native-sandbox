import react from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View  } from 'react-native';
import styles from './style';
import Box from './Box';
import IntroScreen from "./src/screens/IntroScreen";
import ContactUsScreen from "./src/screens/ContactUsScreen";

export default function App() {
  return (
    <ContactUsScreen/>
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

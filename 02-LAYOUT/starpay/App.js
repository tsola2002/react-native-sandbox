import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
//import { useFonts } from "expo-font";

export default function App() {

    // const[fontsLoaded] = useFonts({
    //   Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    //   PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    // });

  // if (!fontsLoaded) {
  //   return null;
  // }

    return (
      <HomeScreen />
    );
  
}



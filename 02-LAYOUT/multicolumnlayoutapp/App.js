import react from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text  } from 'react-native';
// import styles from './style';
export default function App() {
  return (
    <View>

    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    header: {
      flex: 1,
      backgroundColor: "#ccc",
      justifyContent: "center",
      alignItems: "center"
    },

    content: {
      flex: 5,
      flexDirection: "row"
    },

    sidebar: {
      flex: 1,
      backgroundColor: "#aaa"
    },

    main: {
      flex: 3,
      backgroundColor: "#eee"
    },

    footer: {
      flex: 1,
      backgroundColor: "#ccc",
      justifyContent: "center",
      alignItems: "center"
    },
  });
}



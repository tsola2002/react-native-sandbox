import react from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet  } from 'react-native';
import styles from './style';
export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.col, styles.col1]}>
        <Text>Column 1</Text>
      </View>
      <View style={[styles.col, styles.col2]}>
        <Text>Column 2</Text>
      </View>
      <View style={[styles.col, styles.col3]}>
        <Text>Column 3</Text>
      </View>
    </View>   
  );  
}


    container: {
      flex: 1,
    },

    header: {
      flex: 1,
      backgroundColor: "#c81616",
      justifyContent: "center",
      alignItems: "center"
    },

    content: {
      flex: 5,
      flexDirection: "row"
    },

    sidebar: {
      flex: 1,
      backgroundColor: "#bbd50f"
    },

    main: {
      flex: 3,
      backgroundColor: "#eee"
    },

    footer: {
      flex: 1,
      backgroundColor: "#1ea7dd",
      justifyContent: "center",
      alignItems: "center"
    },
  });





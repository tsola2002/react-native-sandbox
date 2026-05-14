import react from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet  } from 'react-native';
// import styles from './style';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.sidebar}>
          <Text>Sidebar</Text>
        </View>

        <View style={styles.main}>
          <Text>Main Content</Text>
        </View>

        
      </View>
      <View style={styles.footer}>
          <Text>Footer</Text>
      </View>
    </View>
  );

  
}

const styles = StyleSheet.create({
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





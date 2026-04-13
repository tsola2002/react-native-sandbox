import react from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View  } from 'react-native';
import styles from './style';
import Box from './Box';

export default function App() {
  return (

    <View style={styles.container}>
      <Box>Left Box</Box>
      <Box>Right Box</Box>
    </View>
    // <View style={styles.container}>
    //   <View style={styles.box}>
    //     <Text style={styles.boxText}>#1</Text>
    //   </View>
    //   <View style={styles.box}>
    //     <Text style={styles.boxText}>#2</Text>
    //   </View>
    //   <View style={styles.box}>
    //     <Text style={styles.boxText}>#3</Text>
    //   </View>
    //   <StatusBar style="auto" />
    // </View>
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

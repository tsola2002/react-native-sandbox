import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {



  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Our Content Goes</Text>
        </View>    
      </View>
    </>
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

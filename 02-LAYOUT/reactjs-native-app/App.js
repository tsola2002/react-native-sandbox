import { StatusBar } from 'expo-status-bar';
import {  Image, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function App() {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.boxText}>Omatsola's Content  Goes
        </Text>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png"}} style={{ width: 100, height: 100 }}
        />
        <TextInput
          placeholder="Enter Your name"
          value={text}
          onChangeText={setText}
          style={{
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
          }}
        />
        <Text>You Typed: {text}</Text>
        <Button  title="Press Me" onPress={() => alert("Button Pressed")}color="green"/>
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

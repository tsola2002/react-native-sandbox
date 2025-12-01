import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {


  const [text, setText] = useState("");


  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <Text key={i} style={{ margin: 10 }}>
            Item {i + 1}
          </Text>
        ))}
        
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your Name"
          value={text}
          onChangeText={setText}
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 10
          }}
        />
        <Text>You Typed: {text}</Text>
        <Button
          title='Press Me'
          onPress={() => alert("Button Pressed")}
        />
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 300, height: 300 }}
          />
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>This is my second view</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

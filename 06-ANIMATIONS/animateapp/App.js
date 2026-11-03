import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FadeInBox from './FadeInBox';
import ScaleBox from './ScaleBox';

export default function App() {
  return (
    // <FadeInBox />
    <ScaleBox />
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

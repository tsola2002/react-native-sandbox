import react from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import styles from './style';
import { PropTypes } from "prop-types";




export default function Box({ children }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}
Box.propTypes = {
  children: PropTypes.node.isRequired
};
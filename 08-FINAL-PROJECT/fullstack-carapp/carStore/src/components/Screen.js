import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { colors, layout } from '../theme';

export default function Screen({
  children,
  style,
  noTopInset = false,
  animate = true,
}) {
  const opacity = useRef(new Animated.Value(animate ? 0 : 1)).current;
  const translateY = useRef(new Animated.Value(animate ? 12 : 0)).current;

  useEffect(() => {
    if (!animate) return undefined;
    const animation = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 260,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]);
    animation.start();
    return () => animation.stop();
  }, [animate, opacity, translateY]);

  return (
    <View style={[styles.root, !noTopInset && { paddingTop: layout.topInset }, style]}>
      <Animated.View
        style={{ flex: 1, opacity, transform: [{ translateY }] }}
      >
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

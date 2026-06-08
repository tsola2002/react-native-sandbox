import { View, Text, Animated } from 'react-native'
import { React, useRef, useEffect}  from 'react'

const ScaleBox = () => {
    const scale = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
            Animated.spring(scale, {
                toValue: 1,
                friction: 3,
                useNativeDriver: true,
            }).start();
        }, []);

  return (
    <Animated.View
        style={{
            transform: [{ scale }],
            width: 100,
            height: 100,
            backgroundColor: 'green',
        }}
    />  
  )
}

export default ScaleBox